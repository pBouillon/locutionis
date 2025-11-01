import type { FigureFrontmatter } from './figure-frontmatter';

export type Figure = FigureFrontmatter & {
  content: string;
};
