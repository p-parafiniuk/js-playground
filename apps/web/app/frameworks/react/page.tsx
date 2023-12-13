'use client';
import React from "react";
import styles from "./page.module.css";
import { iframePortal } from "../../lib/helpers";

export default function Page() {
  const notesPortal = iframePortal({ title: '', url: 'https://docs.google.com/document/d/10XTXhOjxFKjyr2liP8xZzQRl9_Y_WNxsnP7yzX1qoC0/edit#heading=h.bslxfnp9plps' });
  const roadmapPortal = undefined; //iframePortal({ title: '', url: 'https://roadmap.sh/css' });

  return (
    <>
      <h2>Learn React</h2>
      <hr />
      {`--> Read (his)story <--`}

      <br /><br />
      <h2>Notes (portal - WiP)</h2>
      {notesPortal}

      <br /><br />
      <h2>Roadmap</h2>
      {roadmapPortal || 'no roadmap'}
    </>
  )
}
