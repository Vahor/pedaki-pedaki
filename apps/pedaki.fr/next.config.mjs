import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './nextra.config.tsx',
    defaultShowCopyCode: true,
    flexsearch: {
        codeblocks: true
    },
    codeHighlight: true
})

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,

    swcMinify: true,
    experimental: {
        appDir: true,
    },
    transpilePackages: ["ui"],

    redirects: async () => [
        {
            source: '/docs',
            destination: '/docs/getting-started',
            permanent: false,
        },
    ],

    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
    },

    eslint: {
        // Already checked in ci
        ignoreDuringBuilds: true
    },

    typescript: {
        // Already checked in ci
        ignoreBuildErrors: true
    }

};

export default withNextra(config);
