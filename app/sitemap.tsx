import config from "@/config/config";
import { absoluteUrl } from "@/lib/utils";

export default async function sitemap() {

  // REQUIRED: Add all static pages here
  const staticPages = [
    { url: `/`, priority: 1, changeFrequency: 'monthly', lastModified: new Date() },
    { url: '/terms', priority: 1, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `/privacy`, priority: 1, changeFrequency: 'monthly', lastModified: new Date() }

    /* Add more static pages here */

  ];

  const languages: string[]  = (config.i18n.locales && config.i18n.pathLocalized) ? config.i18n.locales.map((locale: string) => locale.toLowerCase()) : [config.i18n.defaultLocale.toLowerCase()]

  const staticPagesData = staticPages.flatMap((page) => {
    return {
      ...page,
      url: `${absoluteUrl(`${page.url}`)}`,
      ...(
        config.i18n.pathLocalized ? {
          alternates: {
            languages: languages.reduce((obj: any, language: any) => {
              obj[language] = `${absoluteUrl(`/${language}${page.url}`)}`
              return obj
            }, {})
          }
        } : {}
      )
    }
  });

  return [
    {
      url: `${absoluteUrl(``)}`,
      priority: 1,
      changeFrequency: 'monthly',
      lastModified: new Date(),
    },
    ...staticPagesData
  ];
}
