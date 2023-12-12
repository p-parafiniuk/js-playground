'use client';
import React from 'react';
import "./globals.css";
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeScript, MantineProvider, createTheme, AppShell, Burger, Group, Skeleton } from '@mantine/core';
// import { MantineLogo } from '@mantine/ds';
import type { Metadata } from "next";
import Link from "next/link";

import { Inter } from "next/font/google";
import Nav, { NavProps } from '@repo/ui/nav';
// core styles are required for all packages
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
  title: "Web playground 0.02",
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
        <script src="http://localhost:8097"></script>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web playground - React</title>

        <ColorSchemeScript />
      </head>

      <body className={inter.className}>

        <React.StrictMode>
          <MantineProvider theme={theme}>
            <ResponsiveSizesAppShell>{children}</ResponsiveSizesAppShell>
          </MantineProvider>
        </React.StrictMode>
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
      path: '/core/html',
      label: '1.1::Core::WebStandards::HTML 5'
    },
    {
      path: '/core/css',
      label: '1.2::Core::WebStandards::CSS'
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
    // NFR
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