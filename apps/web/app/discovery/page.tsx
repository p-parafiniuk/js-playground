'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";
import { CSVLink } from 'react-csv';

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
  // const [a, setA] = React.useState(1)

  const headers = ['header1', 'header2', 'header3'];
  const data = [
    { header1: 'Row 1 Cell 1', header2: 'Row 1 Cell 2', header3: 'Row 1 Cell 3' },
    { header1: 'Row 2 Cell 1', header2: 'Row 2 Cell 2', header3: 'Row 2 Cell 3' },
    // more rows...
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
    <Table.Th key={index}>{header}</Table.Th>
  ));

  const rows = data.map((row, rowIndex) => (
    <Table.Tr key={rowIndex}>
      {headers.map((header, cellIndex) => (
        <Table.Td key={cellIndex}>{row[header]}</Table.Td>
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