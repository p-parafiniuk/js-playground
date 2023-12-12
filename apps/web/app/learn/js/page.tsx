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


function example1() {
  return NaN === NaN;
}
export default function JsDashboard() {
  const [a, setA] = React.useState(1)

  const result = example1();

  return (
    <>
      <h2>Learn JS </h2>
      <hr />
      {`--> Read (his)story <--`}

      <br />  <br />
      <h3>NaN (not a number)</h3>
      <p>so why you are so crazy JS?</p>

      <HighlightSummary>
        NaN === NaN // {result.toString()}
        <br />
        typeof(NaN) // {typeof (NaN)}
      </HighlightSummary>


      <br /><br />
      <h2>Roadmap</h2>
      <iframe 
        title="I contain a js roadmap" 
        src="https://roadmap.sh/javascript" 
        frameborder="0" 
        width="100%" 
        height="900px"
        aria-hidden="true"
        >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </>
  )
}


// helpers
function booleanEmoji(expr: T) { return !!expr ? <>✅</> : <>❌</>; }


function HeadValues() {
  const docType = document.doctype
  const elements = [
    {
      attribute: 'Doc type exists',
      value: booleanEmoji(docType)
    }
  ]

  return (
    <>
      <SimpleTable elements={elements}></SimpleTable>
    </>
  )
}

import { Table } from '@mantine/core';

// type Attr

function SimpleTable({ elements }) {
  const rows = elements.map((element) => (
    <Table.Tr key={element.attribute}>
      <Table.Td>{element.attribute}</Table.Td>
      <Table.Td>{element.value}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Attribute</Table.Th>
          <Table.Th>Value</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}