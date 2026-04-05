import { projectPages } from './project-pages';

export const thumbnailOptions = projectPages.map(({ href, title, image }) => ({
  href,
  title,
  image,
}));
