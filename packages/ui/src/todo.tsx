'use client';
import { Progress } from '@mantine/core';


export function Todo({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <>
      <Progress color="green" value={50} striped />;
    </>
  );
}
