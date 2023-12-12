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

      <br /><br />
      <h3>Estimation</h3>
      <DiscoveryInit></DiscoveryInit>
    </>
  )
}

type IdLabelPair = {
  id?: string;
  label: string;
}

type EstimationRow = {
  reviewed: boolean;
  status: 'wip' | 'ready';
  storyType: "feat" | "NFR";
  storyName?: string;
  tasks?: string;
  optimisticTime: number;
  pessimisticTime: number;
  confidenceLevel?: number | null;
  complexity?: number;
  effort?: number;

  knows?: IdLabelPair[];
  unknows?: IdLabelPair[];
  asumptions?: IdLabelPair[];
  risks?: IdLabelPair[];

  sys: {
    // healthScore: number;
    warnings?: IdLabelPair[];
  }
}

type Opp = {
  name?: string;
  estimation: EstimationRow[]
}
function dataTransformation(data: EstimationRow[]) {
  return data.map((elem: EstimationRow) => {
    const nominator = elem.pessimisticTime - elem.optimisticTime;

    return elem.confidenceLevel = Math.round(nominator / elem.pessimisticTime * 100)
  })
}

function DiscoveryInit() {
  // const [a, setA] = React.useState(1)

  const headers = [
    { name: 'Story', id: 'storyName' },
    { name: 'Tasks', id: 'tasks' },
    { name: 'Opt.', id: 'optimisticTime' },
    { name: 'Pess.', id: 'pessimisticTime' },
    { name: 'Conf lvl.', id: 'confidenceLevel' },
  ];

  const data: EstimationRow[] = [
    {
      reviewed: false,
      status: 'wip',
      storyType: 'NFR',
      storyName: 'NFR- Security',
      tasks: 'task 1, task 2',
      optimisticTime: 2,
      pessimisticTime: 4,
      confidenceLevel: 50,
      complexity: 5,
      effort: 8,
    },
  ];

  const transformedData = dataTransformation(data);

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