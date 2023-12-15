'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";
import { CSVLink } from 'react-csv';

import clsx from 'clsx';

// mantine comps
import { Accordion, Code, Card, Badge } from '@mantine/core';
import { Spoiler } from '@mantine/core';

// custom comps
import { StatsCard } from "@repo/ui/stats-card";

import { TextInput, rem } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import classes from './InputValidation.module.css';

export function InputValidation() {
  return (
    <TextInput
      label="Custom validation styles"
      error="Invalid email"
      defaultValue=""
      classNames={{ input: classes.invalid }}
      rightSection={
        <IconAlertTriangle
          stroke={1.5}
          style={{ width: rem(18), height: rem(18) }}
          className={classes.icon}
        />
      }
    />
  );
}
export default function DiscoveryDashboard() {

  return (
    <>
      <h2>Discovery helpers </h2>

      <StatsCard name="Opp #1" progress={{ done: 2, total: 8 }}></StatsCard>

      <InputValidation></InputValidation>
      <br /><br />
      <h3>Estimation</h3>


      {/* key={} */}
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        Total confidence level: <GradientBadge value={80}></GradientBadge>
      </Card>
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
  storyType: 'setup' | "feat" | "NFR";
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

  sys?: {
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

    return {
      ...elem,
      confidenceLevel: Math.round(nominator / elem.pessimisticTime * 100)
    }
  });
}

function GradientBadge({ value }: { value: number }) {
  const errorGradient = { from: 'red', to: 'pink', deg: 90 };
  const warningGradient = { from: 'yellow', to: 'orange', deg: 90 };
  const okGradient = { from: 'lime', to: 'green', deg: 90 };

  const selectedGradient = value < 50 ? errorGradient : value < 80 ? warningGradient : okGradient;

  return <>
    <Badge
      size="xl"
      variant="gradient"
      gradient={selectedGradient}
    >
      {value}%
    </Badge>
  </>
}

function DiscoveryInit() {
  // const [a, setA] = React.useState(1)

  const headers = [
    { name: 'Story', id: 'storyName' },
    { name: 'Tasks', id: 'tasks' },
    { name: 'Opt.', id: 'optimisticTime' },
    { name: 'Pess.', id: 'pessimisticTime' },
    {
      name: 'Conf lvl.',
      id: 'confidenceLevel',
      customRenderer: (value: number) => <GradientBadge value={value}></GradientBadge>
    },
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
      <DynamicTable headers={headers} data={transformedData} />
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
        <Table.Td key={cellIndex}>
          {header.customRenderer && header.customRenderer(row[header.id])}
          {!header.customRenderer && row[header.id]}
        </Table.Td>
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