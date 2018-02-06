import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text, List, ListItem, Link } from 'spectacle';

import md from '../../assets/materialDesignLogo.png';

export default (
  <div hasSlideChildren>

    <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
      <Heading size={4} textColor="secondary">Material Design</Heading>
      <img src={md} width="400" height="400" />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
      <List>
        <ListItem>Material-UI</ListItem>
        <ListItem>React-Toolbox</ListItem>
        <ListItem>React MD</ListItem>
        <ListItem>React-Materialize</ListItem>
        <ListItem>React Materialize Web Components</ListItem>
        <ListItem>And more...</ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
      <Table textAlign="right">
        <TableHeader>
          <TableRow>
            <TableHeaderItem></TableHeaderItem>
            <TableHeaderItem><Link href="http://www.material-ui.com/#/components/card" target="new">Material UI</Link></TableHeaderItem>
            <TableHeaderItem><Link href="http://www.material-ui.com/#/components/card" target="new">React Toolbox</Link></TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>0.20.0</TableItem>
            <TableItem>2.0.0-beta.12</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>32,572</TableItem>
            <TableItem>7,568</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Components</TableItem>
            <TableItem>29</TableItem>
            <TableItem>28</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Contributors</TableItem>
            <TableItem>636</TableItem>
            <TableItem>218</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>12/138</TableItem>
            <TableItem>12/199</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>MIT</TableItem>
            <TableItem>MIT</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

  </div>
);
