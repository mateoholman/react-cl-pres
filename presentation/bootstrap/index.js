import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text } from 'spectacle';

import bootstrap from '../../assets/bootstrap.svg';

export default (
  <div hasSlideChildren>
    <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
      <Heading size={4} textColor="secondary">Bootstrap!</Heading>
      <img src={bootstrap} height="200px" width="200px" />
    </Slide>
    <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem></TableHeaderItem>
            <TableHeaderItem bold>react-bootstrap</TableHeaderItem>
            <TableHeaderItem textAlign="right">reactstrap</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>0.32.1</TableItem>
            <TableItem>4.8.0</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>12,110</TableItem>
            <TableItem>3,346</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>26</TableItem>
            <TableItem>26</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>198</TableItem>
            <TableItem>79</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>4 / 43</TableItem>
            <TableItem>5 / 70</TableItem>
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
