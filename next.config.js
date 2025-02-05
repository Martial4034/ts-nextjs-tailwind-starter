/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Trouver la règle existante pour les fichiers SVG
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    // Ajout de nouvelles règles pour SVG
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // Traiter les SVG avec ?url comme fichiers
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // Exclure les SVG avec ?url
        use: ['@svgr/webpack'],
      }
    );

    // Exclure les SVG de la règle par défaut
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
