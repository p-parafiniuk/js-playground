'use client';
import React from "react";
import styles from "./page.module.css";
import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";


export default function WebDashboard() {
  const [a, setA] = React.useState(1)

  return (
    <>
      <Home></Home>
    </>
  )
}

function Home() {
  return (
    <>
      <p> Idea: Learn by creating micro-examples</p>

      <div>
        <SimpleTodo>Security::Cookies</SimpleTodo>
        <SimpleTodo>Security::Auth</SimpleTodo>
        <SimpleTodo>Security::checklist</SimpleTodo>

        <SimpleTodo>Viz::test - tree js demo</SimpleTodo>
        <SimpleTodo>Discovery::framwork - new task</SimpleTodo>

        <SimpleTodo>JS::Roadmap</SimpleTodo>
        <SimpleTodo>JS::listMeta</SimpleTodo>
        <SimpleTodo>JS::featureDiscovery</SimpleTodo>

        <SimpleTodo>TS::Roadmap</SimpleTodo>

        <SimpleTodo>Algoritms::roadmap</SimpleTodo>

      </div>
    </>
  )
}

function SimpleTodo({ children }) {
  return <>
    <div className={styles.SimpleTodo}>
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