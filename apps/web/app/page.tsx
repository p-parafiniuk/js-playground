'use client';
import React, { useState, useId } from "react";
import styles from "./page.module.css";

import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";

import { client } from './lib/cms.ts';

export default function WebDashboard() {
  const [a, setA] = React.useState(1)

  return (
    <>
      <p> pov {a}</p>

      <DocumentValues></DocumentValues>
    </>
  )
}
// 

function DocumentValues() {
  const clientWidth = document.documentElement.clientWidth;
  const windowInnerWidth = window.innerWidth;
  const windowOuterWidth = window.outerWidth;
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  console.log('process.env', process)
  console.log('process.env.CONTENTFUL_SPACE_ID', process.env.CONTENTFUL_SPACE_ID)
  console.log('process.env.custom', process.env.customKey);
  
  // only testing purpose
  const data = client.getEntry(
    '3t7Iub6Arm23Cn7wWkIJTd'
  ).then((data) => {
    console.log('data', data)
  }).catch((err) => {
    console.error('err', err)
  })

  return (
    <>

      spaceId {spaceId ?? '0'}
      <p> Client width: {clientWidth}px</p>
      <p> Window inner width: {windowInnerWidth}px</p>
      <p> Window outer width: {windowOuterWidth}px</p>
      <p> Window inner + outer width: {windowInnerWidth + windowOuterWidth}px</p>
      <button className={styles.button}>Add</button>

      <CodeWithAnswer title='question 1' code={'react.off'} answer={'react.off'}></CodeWithAnswer>
    </>
  )
}

// function CodeWithAnswer({code: string, answer: string}) {

function CodeWithAnswer({ title, code, answer }) {
  const itemId = useId();

  return (
    <>
      <Todo ></Todo>

      <Code>{code}</Code>;

      <Accordion variant="separated" radius="md" defaultValue="Apples">
        <Accordion.Item key={itemId} value={title}>
          <Accordion.Control>{title}</Accordion.Control>
          <Accordion.Panel>{answer}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

    </>
  )
}
