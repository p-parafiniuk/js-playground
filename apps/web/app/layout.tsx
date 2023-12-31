'use client';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeScript, MantineProvider, createTheme, AppShell, Burger, Group, Skeleton } from '@mantine/core';
// import { MantineLogo } from '@mantine/ds';
import type { Metadata } from "next";
import Link from "next/link";

import { Inter } from "next/font/google";
import Nav, { NavProps } from '@repo/ui/nav';
// core styles are required for all packages
// import "./globals.css";
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

const theme = createTheme({
  /** Put your mantine theme override here */
});

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Web playground 0.04",
  description: "Web playground, a place to growth your frontend skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* <script src="http://localhost:8097"></script> */}

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web playground - React</title>

        <ColorSchemeScript />
      </head>

      <body
        className={inter.className} 
        suppressHydrationWarning>
          {/* https://github.com/vercel/next.js/discussions/22388#discussioncomment-6992884 */}

        {/* <React.StrictMode> */}
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <ResponsiveSizesAppShell>{children}</ResponsiveSizesAppShell>
          </MantineProvider>
        {/* </React.StrictMode> */}
      </body>
    </html>
  );
}


export function ResponsiveSizesAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, handlers] = useDisclosure(false);
  // alternative
  // const [opened, { toggle }] = useDisclosure();

  const links: NavProps = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/discovery',
      label: 'Discovery'
    },

    // Core
    {
      path: '/core/ai',
      label: 'Core::AI'
    },
    {
      path: '/core/algo',
      label: 'Core::Algo'
    },
    {
      path: '/core/html',
      label: 'Core::WebStandards::HTML 5'
    },
    {
      path: '/core/css',
      label: 'Core::WebStandards::CSS'
    },
    // features
    {
      path: '/features/TBA',
      label: 'Features::TBA'
    },

    // Languages
    {
      path: '/languages/js',
      label: 'Languages::JS'
    },
    {
      path: '/languages/typescript',
      label: 'Languages::TypeScript'
    },
    // Frameworks
    {
      path: '/frameworks/react',
      label: 'Frameworks::React'
    },
    {
      path: '/frameworks/next',
      label: 'Frameworks::Next'
    },
    // NFR
    {
      path: '/nfr/accesibility',
      label: 'NFR::Accesibility'
    },
    {
      path: '/nfr/testing',
      label: 'NFR::Testing'
    },
    {
      path: '/nfr/security',
      label: 'NFR::Security'
    },
    {
      path: '/nfr/perf',
      label: 'NFR::Performance'
    },
    {
      path: '/nfr/seo',
      label: 'NFR::SEO'
    },
    // Other
    {
      path: '/pages/viz',
      label: 'Viz module'
    },
    {
      path: '/pages/javascript-info',
      label: '<? javascript_info();?>'
    }
  ]

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={handlers.toggle} hiddenFrom="sm" size="sm" />
          {/* <MantineLogo size={30} /> */}
          <Link href="/">JS Playground</Link>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Nav links={links}></Nav>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}