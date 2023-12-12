'use client';
import React from "react";
import styles from "./page.module.css";
import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";
import { StatsCard } from "@repo/ui/stats-card";
import { SkillsStats } from "@repo/types";


export default function WebDashboard() {
  const [a, setA] = React.useState(1)

  return (
    <>
      <Home></Home>
    </>
  )
}

function Home() {

  const skillsStats: SkillsStats[] = [
    {

    }
  ]
  // const mainSkillsStats = 
  return (
    <>
      <p> Idea: Learn by creating micro-examples</p>

      <StatsCard name="JS" progress={{ done: 2, total: 20 }}></StatsCard>

      <br /><br /><br />

      <h2>In Progress</h2>

      <SimpleTodo>

        {/* js content editable for div */}
        <div className="editable" contentEditable="true">
          Security::checklist
        </div>
      </SimpleTodo>
      <SimpleTodo>Security::Cookies</SimpleTodo>
      <SimpleTodo>Discovery::framwork - new task</SimpleTodo>
      <SimpleTodo>Viz::test - tree js demo</SimpleTodo>


      <br /><br />
      <h2>TODO</h2>

      <div>

        <SimpleTodo>Framworks::nextjs</SimpleTodo>

        <SimpleTodo>SEO::Meta</SimpleTodo>

        <SimpleTodo>Security::Auth</SimpleTodo>



        <SimpleTodo>JS::listMeta</SimpleTodo>
        <SimpleTodo>JS::featureDiscovery</SimpleTodo>



        <SimpleTodo>Algoritms::roadmap</SimpleTodo>

        <br /><br />
        <h2>Done</h2>
        <SimpleTodo>TS::Roadmap</SimpleTodo>

        <SimpleTodo>JS::Roadmap</SimpleTodo>
      </div>
    </>
  )
}

function SimpleTodo({ children }) {
  return <>
    <div className={styles.SimpleTodo}>
      {/* TODO add progress and priority & est. time */}
      {/* TODO add drag&drop  */}
      {children}
    </div>
  </>
}

// function CodeWithAnswer({ title, code, answer }) {
//   const itemId = useId();

//   return (
//     <>
//       <Todo ></Todo>

//       <Code>{code}</Code>;

//       <Accordion variant="separated" radius="md" defaultValue="Apples">
//         <Accordion.Item key={itemId} value={title}>
//           <Accordion.Control>{title}</Accordion.Control>
//           <Accordion.Panel>{answer}</Accordion.Panel>
//         </Accordion.Item>
//       </Accordion>

//     </>
//   )
// }