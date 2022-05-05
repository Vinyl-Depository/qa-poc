/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['./src'],
		ignoreDuringBuilds: true,
	},
	typescript: {
		tsconfigPath: './tsconfig.build.json',
	},
};

module.exports = nextConfig;
