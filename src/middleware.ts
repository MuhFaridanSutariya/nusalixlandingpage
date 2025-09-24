import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['id', 'en'],
  defaultLocale: 'id'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};