'use client';
import React from "react";
import styles from "./page.module.css";
import { iframePortal } from "../../lib/helpers";

export default function Page() {
  const notesPortal = iframePortal({ title: '', url: 'https://docs.google.com/document/d/1CMWdbGFhWjtY44GE5shGqSh04R_f2DbzJWiHhVRz-ts/edit' });
  const roadmapPortal = undefined; //iframePortal({ title: '', url: 'https://roadmap.sh/css' });

  return (
    <>
      <h2>Learn Algo</h2>
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
