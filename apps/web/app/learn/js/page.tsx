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

      <HighlightSummary>
        NaN === NaN // {result.toString()}
      </HighlightSummary>
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