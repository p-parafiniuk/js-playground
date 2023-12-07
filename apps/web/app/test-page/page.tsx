'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";

import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";


export default function TestPerfDashboard() {
  const [a, setA] = React.useState(1)

  return (
    <>
      <p> state(a): {a}</p>

      <SizeValues></SizeValues>
      <HeadValues></HeadValues>
    </>
  )
}

function HeadValues() {
  const docType = document.doctype
  const windowInnerWidth = window.innerWidth;
  const windowOuterWidth = window.outerWidth;
  // const booleanExists = (expr) => {
  //   return !!expr 
  // }

  const booleanEmoji = (expr: T) => !!expr ? <>✅</>: <>❌</>;

  return (
    <>
      <p> Doc type exists: {booleanEmoji(docType)}</p>
    </>
  )
}



function SizeValues() {
  const clientWidth = document.documentElement.clientWidth;
  const windowInnerWidth = window.innerWidth;
  const windowOuterWidth = window.outerWidth;

  return (
    <>
      <p> Client width: {clientWidth}px</p>
      <p> Window inner width: {windowInnerWidth}px</p>
      <p> Window outer width: {windowOuterWidth}px</p>
      <p> Window inner + outer width: {windowInnerWidth + windowOuterWidth}px</p>
    </>
  )
}

