'use client';
import React from "react";
import styles from "./page.module.css";
import { iframePortal } from "../../lib/helpers";

export default function Page() {
  const notesPortal = iframePortal({ title: '', url: 'https://docs.google.com/document/d/1aUbNb9jGFTsbFDcgnrsVLzES5rsQJPKcPqk4robTwk4/edit' });
  const roadmapPortal = iframePortal({ title: '', url: 'https://roadmap.sh/html' });

  return (
    <>
      <h2>Learn HTML</h2>
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
