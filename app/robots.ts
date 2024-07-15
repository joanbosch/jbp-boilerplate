
import config from "@/config/config";
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const languages: string[]  = (config.i18n.locales && config.i18n.pathLocalized) ? config.i18n.locales.map((locale: string) => locale.toLowerCase()) : [config.i18n.defaultLocale.toLowerCase()]

  const allowPaths = ['/']
  // REQUIRED: Add all paths that you do not want to be indexed by search engines
  const disallowPaths = ['/account', '/api', '/admin']

  return {
    rules: [
      {
        userAgent: ['*'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
      {
        userAgent: ['Googlebot'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
      {
        userAgent: ['Applebot'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
      {
        userAgent: ['Bingbot'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
      {
        userAgent: ['YandexBot'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
      {
        userAgent: ['Baiduspider'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
      {
        userAgent: ['GPTBot'],
        allow: allowPaths,
        disallow: disallowPaths.flatMap(
          (path) => {
            return config.i18n.pathLocalized
            ? languages.map((language) => `/${language}${path}`)
            : [`${path}`]
          }
        ),
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
  }
}