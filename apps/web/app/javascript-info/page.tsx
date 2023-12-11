'use client';
import React, { useState, useId } from "react";
// import styles from "./page.module.css";

import clsx from 'clsx';

// mantine comps
import { Accordion, Code } from '@mantine/core';
import { Spoiler } from '@mantine/core';

// custom comps
import { Todo } from "@repo/ui/todo";


export default function TestPerfDashboard() {
  const [a, setA] = React.useState(1)

  return (
    <>
      <h2>Document </h2>
      <SizeValues></SizeValues>

      <br /><br />
      <h2>{'<head> values'}</h2>
      <HeadValues></HeadValues>

      <br /><br />
      <h2>React</h2>
      <ReactValues></ReactValues>
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

function HeadValues() {
  const docType = document.doctype;
  // const metadata = document.getElementsByTagName('meta');

  const docEntries = Object.entries(document);
  const docEntriesLen = docEntries.length;
  console.log(docEntries)

  const winEntries = Object.entries(window);
  const winEntriesLen = winEntries.length;
  console.log(winEntries)
  const entries = printEntries(window)

  const elements = [
    {
      attribute: 'Doc type exists',
      value: booleanEmoji(docType)
    },
    {
      attribute: 'Meta data exists',
      // value: metadata.toString()
      value: ''
    },
    {
      attribute: 'window entries size()',
      value: winEntriesLen
    },
    {
      attribute: 'doc entries size()',
      value: docEntriesLen
    },
    {
      attribute: 'Object ()',
      value: Object.entries(Object).length
    }
  ]

  //TODO test if header exists
  // TODO Scrollable Spoiler comp

  return (
    <>
      <SimpleTable elements={elements}></SimpleTable>


      <h2>entries</h2>
      <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
        
        
        <table>{entries}</table>
      </Spoiler>
    </>
  )
}



function SizeValues() {
  // More 
  // https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window

  const documentElement = document.documentElement
  const windowInnerWidth = window.innerWidth;
  const windowOuterWidth = window.outerWidth;

  const screen = window.screen;
  const elements = [
    {
      attribute: 'Client size',
      value: `${documentElement.clientWidth} x ${documentElement.clientHeight}`
    },

    {
      attribute: 'Screen size',
      value: `${screen.width} x ${screen.height}`
    }

  ]

  return (
    <>
      <SimpleTable elements={elements}></SimpleTable>

      <p> Window inner width: {windowInnerWidth}px</p>
      <p> Window outer width: {windowOuterWidth}px</p>
      <p> Window inner + outer width: {windowInnerWidth + windowOuterWidth}px</p>
    </>
  )
}

import { Table } from '@mantine/core';
import { log } from "console";

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