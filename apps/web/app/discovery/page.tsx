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
      <DiscoveryInit></DiscoveryInit>
    </>
  )
}

function DiscoveryInit() {
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
      <DiscoveryEstimationTable elements={elements}></DiscoveryEstimationTable>
    </>
  )
}

import { Table } from '@mantine/core';

// type Attr

function DiscoveryEstimationTable({ elements }) {
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
        <Table.Th>Status</Table.Th>
          <Table.Th>Story</Table.Th>
          <Table.Th>Tasks</Table.Th>
          <Table.Th>Opt</Table.Th>
          <Table.Th>Pess</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}