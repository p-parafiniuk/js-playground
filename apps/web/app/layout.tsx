import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript } from '@mantine/core';
import { MantineProvider, createTheme } from '@mantine/core';
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

export const metadata: Metadata = {
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
        <title>My awesome app</title>

        <ColorSchemeScript />
      </head>

      <body className={inter.className}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>

      </body>
    </html>
  );
}
