// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../pb_data/types.d.ts" />

// ============================================================================
// GET /api/quiz/random - Fetch random questions for a new quiz
// ============================================================================
routerAdd(
  'GET',
  '/api/quiz/random',
  (e) => {
    const maxCount = 20;

    const query = e.request.url.query().get('count') || '10';
    const count = Math.min(parseInt(query, 10), maxCount);

    if (isNaN(count) || count < 1 || count > maxCount) {
      throw new BadRequestError(`Count must be between 1 and ${maxCount}`);
    }

    try {
      const allQuestions = $app.findAllRecords('questions');

      if (allQuestions.length === 0) {
        throw new NotFoundError('No active questions found');
      }

      const actualCount = Math.min(count, allQuestions.length);

      const questions = allQuestions
        .toSorted(() => Math.random() - 0.5)
        .slice(0, actualCount)
        .map((record) => ({
          id: record.id,
          label: record.getString('label'),
          options: record.get('options')
        }));

      $app.logger().info('Quiz generated', 'count', questions.length);

      return e.json(200, {
        questions: questions,
        total: questions.length
      });
    } catch (error) {
      if (error instanceof NotFoundError || error instanceof BadRequestError) {
        throw error;
      }

      $app.logger().error('Error fetching random questions', 'error', error);
      throw new BadRequestError('Failed to fetch questions');
    }
  },
  $apis.requireGuestOnly()
);

// ============================================================================
// GET /api/quiz/question/:id/solution - Get the answer to a question
// ============================================================================
routerAdd(
  'GET',
  '/api/quiz/question/{id}/solution',
  (e) => {
    const questionId = e.request.pathValue('id');

    try {
      const record = $app.findFirstRecordByFilter('solutions', 'question = {:id}', {
        id: questionId
      });

      const solution = {
        answer: record.getString('answer'),
        explanation: record.getString('explanation')
      };

      $app.logger().info('Solution retrieved', 'questionId', questionId);

      return e.json(200, solution);
    } catch (error) {
      if (error instanceof NotFoundError) {
        $app.logger().debug('Solution not found', 'questionId', questionId);
        throw error;
      }

      if (error instanceof BadRequestError) {
        throw error;
      }

      $app
        .logger()
        .error('Unexpected error fetching solution', 'questionId', questionId, 'error', error);
      throw new NotFoundError();
    }
  },
  $apis.requireGuestOnly()
);
