type FigureFrontmatter = {
  title: string;
  short_description: string;
  slug: string;
};

export type Figure = FigureFrontmatter & {
  content: string;
};

const modules = import.meta.glob('./content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

// Cache to avoid re-parsing on every call
let figuresCache: Figure[] | null = null;

export async function getAllFigures(): Promise<Figure[]> {
  if (figuresCache) return figuresCache;

  // Dynamic imports to ensure these only run at build time
  const matter = (await import('gray-matter')).default;
  const { marked } = await import('marked');

  const figures = Object.entries(modules)
    .map(([path, raw]): Figure => {
      const { data, content } = matter(raw);

      if (!data.title || !data.short_description || !data.slug) {
        throw new Error(`Missing required frontmatter in ${path}: ${JSON.stringify(data)}`);
      }

      return {
        slug: data.slug,
        title: data.title,
        short_description: data.short_description,
        content: marked(content, { async: false }) as string
      };
    })
    .reduce((acc, figure) => [...acc, figure], new Array<Figure>())
    .sort((a, b) => a.title.localeCompare(b.title));

  // Cache the results
  figuresCache = figures;
  return figures;
}

export async function getFigureBySlug(slug: string): Promise<Figure | undefined> {
  const figures = await getAllFigures();
  return figures.find((figure) => figure.slug === slug);
}

export async function getAllSlugs(): Promise<string[]> {
  const figures = await getAllFigures();
  const slugs = figures.map((figure) => figure.slug);
  return slugs;
}
