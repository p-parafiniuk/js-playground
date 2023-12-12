'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";
import { CSVLink } from 'react-csv';

import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';
import { Spoiler } from '@mantine/core';

// custom comps
import { StatsCard } from "@repo/ui/stats-card";


export default function DiscoveryDashboard() {

  return (
    <>
      <h2>Discovery helpers </h2>

      <StatsCard></StatsCard>
      <DiscoveryInit></DiscoveryInit>
    </>
  )
}

type Estimation = {
  storyName?: string;
  tasks?: string;
  optimisticTime?: number;
  pessimisticTime?: number;
}

type Opp = {
  name?: string;

}

function DiscoveryInit() {
  // const [a, setA] = React.useState(1)

  const headers = [
    { name: 'Story', id: 'story' },
    { name: 'Tasks', id: 'tasks' }
  ];

  const data = [
    { story: 'stosfdkjaklj', tasks: 'taskds' },
    { story: 'stosfdkjaklj', tasks: 'taskds' }
  ];

  return (
    <>
      {/* <CSVLink data={data} headers={headers} filename={"my-data.csv"}>
        Export to CSV
      </CSVLink> */}
      <DynamicTable headers={headers} data={data} />
    </>
  )
}

import { Table } from '@mantine/core';

const DynamicTable = ({ headers, data }) => {
  const headerCells = headers.map((header, index) => (
    <Table.Th key={index}>{header.name}</Table.Th>
  ));

  const rows = data.map((row, rowIndex) => (
    <Table.Tr key={rowIndex}>
      {headers.map((header, cellIndex) => (
        <Table.Td key={cellIndex}>{row[header.id]}</Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>{headerCells}</Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};