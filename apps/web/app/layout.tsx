'use client';
import "./globals.css";
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeScript, MantineProvider, createTheme, AppShell, Burger, Group, Skeleton } from '@mantine/core';
// import { MantineLogo } from '@mantine/ds';
import type { Metadata } from "next";
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
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web playground - React</title>

        <ColorSchemeScript />
      </head>

      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <ResponsiveSizesAppShell>{children}</ResponsiveSizesAppShell>
        </MantineProvider>

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
      path: '/js',
      label: 'JavaScript'
    },
    {
      path: '/test-page',
      label: 'Checklists test'
    }]

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
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Nav links={links}></Nav>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}