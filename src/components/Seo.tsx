import Head from 'next/head';
import { useRouter } from 'next/router';

import { siteConfig } from '@/constant/config';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  templateTitle?: string;
}

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const title = props.templateTitle
    ? `${props.templateTitle} | ${siteConfig.title}`
    : props.title
      ? props.title
      : siteConfig.title;
  const description = props.description ?? siteConfig.description;
  const image = props.image ?? siteConfig.ogImage;
  const url = `${siteConfig.url}${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='robots' content='follow, index' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* Favicon */}
      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <meta name='msapplication-TileColor' content={siteConfig.themeColor} />
      <meta name='theme-color' content={siteConfig.themeColor} />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteConfig.title} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content={siteConfig.locale} />

      {/* Twitter */}
      <meta name='twitter:card' content={siteConfig.twitterCard} />
      <meta name='twitter:site' content={siteConfig.creator} />
      <meta name='twitter:creator' content={siteConfig.creator} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* Canonical */}
      <link rel='canonical' href={url} />
    </Head>
  );
} 