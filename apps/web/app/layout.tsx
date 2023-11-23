import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript } from '@mantine/core';

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
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My awesome app</title>

        <ColorSchemeScript />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
