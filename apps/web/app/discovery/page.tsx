'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";

import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';
import { Spoiler } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";


export default function DiscoveryDashboard() {

  return (
    <>
      <h2>Discovery helpers </h2>
    </>
  )
}



function ReactValues() {
  const [a, setA] = React.useState(1)
  const elements = [
    {
      attribute: 'React version',
      value: React.version
    },
    {
      attribute: 'Actual component state',
      value: a
    }
  ]

  return (
    <>
      <SimpleTable elements={elements}></SimpleTable>
    </>
  )
}


// helpers
function booleanEmoji(expr: T) { return !!expr ? <>✅</> : <>❌</>; }

function printEntries(obj, childRenderer = '') {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries?retiredLocale=pl
  const formattedEntries = Object.entries(obj).map(([key, value], index) => {

    // return <>{childRenderer}</> // TODO general case
    const isOwnProp: boolean = Object.hasOwn(obj, key)
    return <tr>
      <td>{index+1}. </td>
      <td>{key}</td>
      <td>{isOwnProp.toString()}</td>
    </tr>
  });


  // TODO:Perf whats better preformatting or inline
  return <>
    {formattedEntries}
  </>
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