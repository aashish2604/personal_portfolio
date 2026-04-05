import { projectPages } from './project-pages';

export const thumbnailOptions = projectPages
  .slice(0, 3)
  .map(({ externalUrl, title, image, category }) => ({
    href: externalUrl,
    title,
    image,
    category,
  }));
