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

// export type SkillsStats = {
//   name?: string;
//   target?: string;
// progress: {
//     done: number;
//     total: number;
//     // percentageValue: number;
//   },
//   timeLeft?: number;
//   priority?: 'critical' | 'high' | 'medium' | 'low' | 'unknown'
// }


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


      {/* js content editable for div */}

      {/* <div onClick="this.contentEditable='true';">
        lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor
      </div> */}




      <br /><br /><br />

      <h2>In Progress</h2>

      <hr />
      <SimpleTodo>
        <div className="editable" contentEditable="true">
          Security::checklist
        </div>
      </SimpleTodo>
      <SimpleTodo>Security::Cookies</SimpleTodo>
      <SimpleTodo>Discovery::framwork - new task</SimpleTodo>
      <SimpleTodo>Viz::test - tree js demo</SimpleTodo>
      <SimpleTodo>JS::Roadmap</SimpleTodo>


      <br /><br />
      <h2>TODO</h2>
      <hr />

      <div>

        <SimpleTodo>Framworks::nextjs</SimpleTodo>

        <SimpleTodo>SEO::Meta</SimpleTodo>

        <SimpleTodo>Security::Auth</SimpleTodo>



        <SimpleTodo>JS::listMeta</SimpleTodo>
        <SimpleTodo>JS::featureDiscovery</SimpleTodo>

        <SimpleTodo>TS::Roadmap</SimpleTodo>

        <SimpleTodo>Algoritms::roadmap</SimpleTodo>

        <br /><br />
        <h2>Done</h2>
        <hr />
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