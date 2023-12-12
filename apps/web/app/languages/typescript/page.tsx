'use client';
import React, { useState, useId } from "react";
import styles from "./page.module.css";
import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";

function HighlightSummary({ children }) {
  return <>
    <section className={styles.hightlightSummary}>
      {children}
    </section>
  </>
}

function iframePortal({ title = '', url = '' }) {
  return <>
    <iframe
      title={title}
      src={url}
      frameBorder="0"
      width="100%"
      height="900px"
      aria-hidden="true"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  </>
}


export default function JsDashboard() {
  const [a, setA] = React.useState(1)

  const notesPortal = iframePortal({ title: '', url: 'https://docs.google.com/document/d/12Oi4Lu9HkFCiNlCZ6UgVlIY2wv65SZ1RUtEX8L3jLpE/edit' });
  const roadmapPortal = iframePortal({ title: '', url: 'https://roadmap.sh/javascript' });

  return (
    <>
      <h2>Learn TypeScript </h2>
      <hr />
      {`--> Read (his)story <--`}

      <br /><br />
      <h2>Notes (portal - WiP)</h2>
      {notesPortal}

      <br /><br />
      <h2>Roadmap</h2>
      {roadmapPortal}
    </>
  )
}

