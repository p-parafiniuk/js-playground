'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";
// custom comps
import { StatsCard } from "@repo/ui/stats-card";


export default function DiscoveryDashboard() {

  return (
    <>
      <h2>Viz module</h2>

      <StatsCard></StatsCard>

      <br /><br />
      <h3>Three js</h3>
      {/* TODO add 3jsdemo */}
    </>
  )
}
