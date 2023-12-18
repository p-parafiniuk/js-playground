'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";
import { CSVLink } from 'react-csv';
import clsx from 'clsx';

// mantine comps
import { Accordion, Code, Card, Badge, Button } from '@mantine/core';
import { Spoiler } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

// custom comps
import { StatsCard } from "@repo/ui/stats-card";

import { TextInput, rem } from '@mantine/core';

export default function DiscoveryDashboard() {

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

  const dataInit: EstimationRow[] = [
    {
      reviewed: false,
      status: 'wip',
      storyType: 'setup',
      storyName: 'Setup',
      tasks: 'task 1, task 2',
      optimisticTime: 1.5,
      pessimisticTime: 2.5,
      confidenceLevel: 50,
      complexity: 5,
      effort: 8,
    },
    {
      reviewed: false,
      status: 'wip',
      storyType: 'feat',
      storyName: 'Feat - Login',
      tasks: 'task 1, task 2',
      optimisticTime: 2,
      pessimisticTime: 6,
      confidenceLevel: 50,
      complexity: 5,
      effort: 8,
    },
    {
      reviewed: false,
      status: 'wip',
      storyType: 'NFR',
      storyName: 'NFR- Security',
      tasks: 'task 1, task 2',
      optimisticTime: 10,
      pessimisticTime: 15,
      confidenceLevel: 50,
      complexity: 5,
      effort: 8,
    },
  ];

  const transformedData = dataTransformation(dataInit);


  const [oppData, setOppData] = React.useState(transformedData)

  const oppStatsInit = {
    totalCost: {
      optimistic: oppData.map((elem: EstimationRow) => elem.optimisticTime).reduce((a, b) => a + b, 0),
      pessimistic: oppData.map((elem: EstimationRow) => elem.pessimisticTime).reduce((a, b) => a + b, 0),
    }
  }
  const [oppStats, setOppStats] = React.useState(oppStatsInit)


  function addEpic() {
    // TODO - read data

    setOppData(
      [
        ...oppData,
        {
          reviewed: false,
          status: 'wip',
          storyType: 'NFR',
          storyName: 'NFR- Security',
          tasks: 'task 1, task 2',
          optimisticTime: 10,
          pessimisticTime: 15,
          confidenceLevel: 50,
          complexity: 5,
          effort: 8,
        }
      ]
    );
    setOppStats(oppStatsInit);
    // calcProgressByType();
  }




  function calcProgressByType(data: EstimationRow[]) {
    const total = data.length;
    const types = [...new Set(data.map((elem: EstimationRow) => elem.storyType))];
    const progressByType = types.reduce((progress, type) => {
      const count = data.filter((elem: EstimationRow) => elem.storyType === type).length;
      progress[type] = Math.round(count / total * 100);

      return progress;
    }, {});
    // debugger
    return progressByType;
  }




  const progressSectionsInitial: ProgressWithTooltipsProp[] = [
    {
      value: 10,
      color: 'grey',
      label: 'Setup',
      tooltipLabel: 'Setup',
    },
    {
      value: 60,
      color: 'blue',
      label: 'Features',
      tooltipLabel: 'Features',
    },
    {
      value: 30,
      color: 'purple',
      label: 'NFR Buffers',
      tooltipLabel: 'NFR Buffers',
    }
  ]
  const [progressSections, setProgressSections] = React.useState(progressSectionsInitial)
  // const progressGroups = calcProgressByType(oppData);



  return (
    <>
      <h2>Discovery tools - Opp card</h2>

      <StatsCard name="Opp #1" progress={{ done: 2, total: oppData.length }}></StatsCard>

      <br />
      <h3>Glossary</h3>
      <SimpleCard>
        <p>TBD</p>
      </SimpleCard>

      <br />
      <h3>Tasks (TODO)</h3>
      <SimpleCard>
        <p>grouped totals -  TBD</p>
        <p>cone of uncertainty - TBD</p>
      </SimpleCard>

      <br />
      <h3>Stats (Viz)</h3>
      <SimpleCard>
        <p>TBD</p>
      </SimpleCard>

      <br />
      <h3>Estimation</h3>

      <SimpleCard>
        <h2>Cost & Confidence</h2> 
      <div style={{'display': 'inline-block'}}>
        <StandardBadge selectedGradient={okGradient} value={oppStats.totalCost.optimistic}></StandardBadge>
        <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
        <StandardBadge selectedGradient={errorGradient} value={oppStats.totalCost.pessimistic}></StandardBadge>

        (<GradientBadge value={80}></GradientBadge>)
      </div>
    </SimpleCard >
      <br />

      <SimpleCard>
        <h2>Add new task</h2>
        <InputValidation></InputValidation>

        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
          rightSection={<IconArrowRight size={14} />}
          onClick={() => addEpic()}
        >
          Add
        </Button>
      </SimpleCard>

      <br />
      <SimpleCard>
        Total items: {oppData.length}
        <br />
        <ProgressWithTooltips progressSections={progressSections}></ProgressWithTooltips>
        <br />

        <DynamicTable headers={headers} data={oppData} />

        {/* <DiscoveryInit ></DiscoveryInit> */}
      </SimpleCard>
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
  storyType: 'setup' | 'feat' | 'NFR';
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

function Median(nominator: number, denominator: number): number {
  return Math.abs(Math.round(nominator / denominator * 100));
}

function dataTransformation(data: EstimationRow[]) {
  return data.map((elem: EstimationRow) => {
    const nominator = elem.pessimisticTime - elem.optimisticTime;

    return {
      ...elem,
      // confidenceLevel: Math.round(nominator / elem.pessimisticTime * 100)
      confidenceLevel: Median(nominator, elem.pessimisticTime)
    }
  });
}


/**
 * Custom components
 */
type ProgressWithTooltipsProp = {
  label: string;
  tooltipLabel: string;
  color: string;
  value: number;
}

import { Progress, Tooltip } from '@mantine/core';

type ProgressWithTooltipsProps = {
  progressSections: ProgressWithTooltipsProp[];
}

function ProgressWithTooltips({ progressSections }: ProgressWithTooltipsProps) {
  const progressSectionsTransform = progressSections.map((element: ProgressWithTooltipsProp) => {
    return (
      <Tooltip label={element.tooltipLabel}>
        <Progress.Section value={element.value} color={element.color}>
          <Progress.Label>{element.label}</Progress.Label>
        </Progress.Section>
      </Tooltip>
    );
  });

  return (
    <Progress.Root size={30}>
      {progressSectionsTransform}
    </Progress.Root>
  );
}

export function SimpleCard({ children }) {
  return <>
    <Card shadow="md" radius="md" className={classes.card} padding="xl">
      {children}
    </Card>
  </>
}

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


import { Table } from '@mantine/core';


export const DynamicTable = ({ headers, data }) => {
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

// TODO extract to separate file and extract business logic
export function StandardBadge({ selectedGradient, value, valueSuffix }: any) {

  return <>
    <Badge
      size="xl"
      variant="gradient"
      gradient={selectedGradient}
    >
      {value}{valueSuffix && '%'}
    </Badge>
  </>
}


export const errorGradient = { from: 'red', to: 'pink', deg: 90 };
export const warningGradient = { from: 'yellow', to: 'orange', deg: 90 };
export const okGradient = { from: 'lime', to: 'green', deg: 90 };

export function GradientBadge({ value }: { value: number }) {

  const selectedGradient = value < 50 ? errorGradient : value < 80 ? warningGradient : okGradient;

  return <>
    <StandardBadge selectedGradient={selectedGradient} value={value}></StandardBadge>
  </>
}



/**
 * Scratch pad
 */

// function DiscoveryInit() {
//   const headers = [
//     { name: 'Story', id: 'storyName' },
//     { name: 'Tasks', id: 'tasks' },
//     { name: 'Opt.', id: 'optimisticTime' },
//     { name: 'Pess.', id: 'pessimisticTime' },
//     {
//       name: 'Conf lvl.',
//       id: 'confidenceLevel',
//       customRenderer: (value: number) => <GradientBadge value={value}></GradientBadge>
//     },
//   ];

//   const data: EstimationRow[] = [
//     {
//       reviewed: false,
//       status: 'wip',
//       storyType: 'setup',
//       storyName: 'Setup',
//       tasks: 'task 1, task 2',
//       optimisticTime: 1.5,
//       pessimisticTime: 2.5,
//       confidenceLevel: 50,
//       complexity: 5,
//       effort: 8,
//     },
//     {
//       reviewed: false,
//       status: 'wip',
//       storyType: 'feat',
//       storyName: 'Feat - Login',
//       tasks: 'task 1, task 2',
//       optimisticTime: 2,
//       pessimisticTime: 6,
//       confidenceLevel: 50,
//       complexity: 5,
//       effort: 8,
//     },
//     {
//       reviewed: false,
//       status: 'wip',
//       storyType: 'NFR',
//       storyName: 'NFR- Security',
//       tasks: 'task 1, task 2',
//       optimisticTime: 10,
//       pessimisticTime: 15,
//       confidenceLevel: 50,
//       complexity: 5,
//       effort: 8,
//     },
//   ];

//   const transformedData = dataTransformation(data);

//   return (
//     <>
//       {/* <CSVLink data={data} headers={headers} filename={"my-data.csv"}>
//         Export to CSV
//       </CSVLink> */}
//       <DynamicTable headers={headers} data={transformedData} />
//     </>
//   )
// }
