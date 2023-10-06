/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	i18n: {
		defaultLocale: 'en_ZA',
		locales: ['en_ZA']
	}
};

module.exports = nextConfig;
