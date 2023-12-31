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


function example1() {
  return NaN === NaN;
}

function exampleObjectEquality() {
  return {} === {};
}

export default function JsDashboard() {
  const [a, setA] = React.useState(1)

  const result = example1();
  const result2 = exampleObjectEquality();
  const notesPortal = iframePortal({ title: '', url: 'https://docs.google.com/document/d/12Oi4Lu9HkFCiNlCZ6UgVlIY2wv65SZ1RUtEX8L3jLpE/edit' });
  const roadmapPortal = iframePortal({ title: '', url: 'https://roadmap.sh/javascript' });

  return (
    <>
      <h2>Learn JS </h2>
      <hr />
      {`--> Read (his)story <--`}

      <br />  <br />
      <h2>Examples</h2>
      <h3>NaN (not a number)</h3>
      <p>so why you are so crazy JS?</p>

      <HighlightSummary>
        NaN === NaN // {result.toString()}
        <br />
        typeof(NaN) // {typeof (NaN)}
        <br /><br />
        {'{}'} === {'{}'} // {result2.toString()}
        <br />
      </HighlightSummary>

      <br /><br />

      <h2>Recap</h2>
      <HighlightSummary>
        1. Primitive values are <strong>immutable</strong> <br />
        2. Variables are not values (they are like wires)
      </HighlightSummary>

      <br /><br />
      <h2>Notes (portal - WiP)</h2>
      {notesPortal}

      <br /><br />
      <h2>Roadmap</h2>
      {roadmapPortal}
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