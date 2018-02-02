import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text, List, ListItem, BlockQuote, Quote, Cite } from 'spectacle';

import popular from '../../assets/popular.gif';
import sLogo from '../../assets/semanticLogo.png';

export default (
  <div hasSlideChildren>
    <Slide bgColor="primary">
      <Heading textColor="black">Popular</Heading>
      <img src={popular} />
    </Slide>

    <Slide bgColor="primary">
      <img src={sLogo} height="200px" width="200px"/>
      <Heading textColor="black">Semantic UI</Heading>
      <Heading size={6} textColor="secondary">Semantic UI is a well polished development framework that helps create beautiful, responsive layouts using human-friendly code.</Heading>
    </Slide>

    <Slide>
      <List>
        <ListItem>Used in-house by Netflix & Amazon.</ListItem>
        <ListItem>No jQuery dependency</ListItem>
        <ListItem>No animation dependencies</ListItem>
        <ListItem>Simple declarative component APIs</ListItem>
        <ListItem>Well documented</ListItem>
        <ListItem>"Complete" test coverage</ListItem>
      </List>
    </Slide>

    <Slide>
      <Text>**Insert a link to an example here**</Text>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>0.77.2</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>5,719</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>51</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>163</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>19 / 76</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>MIT</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
  </div>
);
