'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";
// custom comps
import { StatsCard } from "@repo/ui/stats-card";
import { iframePortal } from "../../lib/helpers";


export default function DiscoveryDashboard() {
  const notesPortal = iframePortal({ title: '', url: 'https://docs.google.com/document/d/1vcgXviDFfEY9dI7e5CutxTqSDVv9CaUmuSIYenN21aY/edit' });

  return (
    <>
      <h2>Viz module</h2>

      {/* <StatsCard></StatsCard> */}

      <br /><br />
      <h3>Three js</h3>
      {/* TODO add 3jsdemo */}

      <br /><br />
      <h2>Notes (portal - WiP)</h2>
      {notesPortal}


    </>
  )
}
