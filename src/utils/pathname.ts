import { routes } from './routes';

export const cononicalOrigin = 'https://ruiningli.com';
const localePrefixes = /^\/zh($|\/)/;

export const normalizePath = (pathname: string): string => {
  const localeRemoved = pathname.replace(localePrefixes, '/');
  const trailingSlashRemoved =
    localeRemoved.length > 1 ? localeRemoved.replace(/\/$/, '') : localeRemoved;
  return trailingSlashRemoved;
};

export const getLocalePath = (
  pathname: string,
  locale: string,
  defaultLocale = 'en'
): string => {
  const normalizedPathname = normalizePath(pathname);
  if (locale === defaultLocale) return normalizedPathname;
  return `/${locale}${normalizedPathname === '/' ? '' : normalizedPathname}`;
};

export const getFullPath = (pathname: string, locale: string) =>
  `${cononicalOrigin}${getLocalePath(pathname, locale)}`;

export const isKnownPath = (pathname: string) => {
  const normalizedPathname = normalizePath(pathname);
  return Object.values(routes).includes(normalizedPathname);
};
