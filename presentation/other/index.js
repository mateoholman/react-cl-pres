import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text } from 'spectacle';

export default (
  <Slide bgColor="primary">
    <img src={antLogo} height="200px" width="200px"/>
    <Heading textColor="black">Blueprint</Heading>
    <Heading size={6} textColor="secondary">Blah blah.</Heading>
  </Slide>

  <Slide>
    <List>
      <ListItem>1</ListItem>
      <ListItem>Color combinations and keyboard interactions have been carefully crafted to be accessible.</ListItem>
      <ListItem>TypeScript makes developing with Blueprint faster and more predictable with static types.</ListItem>
      <ListItem>Styles are built with Sass and designed to be flexible and customizable.</ListItem>
      <ListItem>5</ListItem>
    </List>
  </Slide>

  <Slide>
    <Link href="#" target="new">Example</Link>
    <Table>
      <TableBody>
        <TableRow>
          <TableItem>Version</TableItem>
          <TableItem>1.35.2</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>GitHub Stars</TableItem>
          <TableItem>8,189</TableItem>
        </TableRow>
        <TableRow>
          <TableItem># Components</TableItem>
          <TableItem>30</TableItem>
        </TableRow>
        <TableRow>
          <TableItem># Contributors</TableItem>
          <TableItem>82</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>Open Bugs / Issues</TableItem>
          <TableItem>73 / 302</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>License</TableItem>
          <TableItem>Apache 2.0</TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);
