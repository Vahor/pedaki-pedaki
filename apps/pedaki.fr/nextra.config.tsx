import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import seoConfig from "./seo.config";
import Image from "next/image";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/vahor/pedaki-pedaki.fr",
  },
  primaryHue: 25,
  darkMode: false,
  nextThemes: {
    forcedTheme: "light",
  },
  logo: (
    <div className="flex items-center">
      <Image src="/logo.svg" alt="Pedaki" width="32" height="32" />
      <span className="ml-2 text-xl font-bold">pedaki</span>
    </div>
  ),
  docsRepositoryBase: "https://github.com/vahor/pedaki-pedaki.fr/tree/main",
  useNextSeoProps() {
    const { route } = useRouter();
    const { url, images } = seoConfig.openGraph;

    let template = "Pedaki";
    if (route !== "/docs") {
      template = `%s - ${template}`;
    }
    return {
      titleTemplate: template,
      openGraph: { url, images: [{ url: `${url}${images}` }] },
    };
  },
  head: function useHead() {
    const { frontMatter: meta } = useConfig();
    const { route } = useRouter();
    const { title } = meta;

    let finalTitle = "Pedaki";
    if (route !== "/docs") {
      finalTitle = `${title} - ${finalTitle}`;
    }

    return (
      <>
        {seoConfig.icons.map((icon, index) => (
          <link key={index} rel={icon.rel} href={icon.url} />
        ))}
        <meta httpEquiv="Content-Language" content="fr" />
        <meta
          name="description"
          content={(meta.description as string) || seoConfig.description}
        />
        <meta name="og:title" content={finalTitle} />
        <meta name="og:image" content={seoConfig.openGraph.images} />
        <meta name="og:url" content={seoConfig.openGraph.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-title" content="Pedaki" />
        <meta name="theme-color" content={seoConfig.themeColor} />
      </>
    );
  },
  editLink: {
    text: "Modifier cette page sur GitHub →",
  },
  toc: {
    float: true,
    title: "Sur cette page",
  },
  search: {
    placeholder: "Rechercher...",
  },
  navbar: {
    extraContent: <></>,
  },
  footer: {
    component: (
      <div className="flex w-full items-center justify-center py-8 text-sm text-slate-500">
        <div className="flex items-center justify-center space-x-4">aa</div>
        <div className="mt-4 flex items-center justify-center space-x-6">
          bb
        </div>
      </div>
    ),
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale = "fr" } = useRouter();
    return (
      <>
        <span>Dernière mise à jour le </span>
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  feedback: {
    content: "Un soucis avec cette page ?",
  },
  banner: {
    text: "Cette documentation est en cours de rédaction.",
    dismissible: false,
  },
  sidebar: {
    autoCollapse: true,
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <span className="-ml-1.5 cursor-default text-xs font-bold text-slate-500">
            {title}
          </span>
        );
      }
      return <>{title}</>;
    },
  },
};

export default config;
