import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text } from 'spectacle';

import md from '../../assets/materialDesignLogo.png';

export default (
  <div hasSlideChildren>

    <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
      <Heading size={4} textColor="secondary">Material Design</Heading>
      <img src={md} width="400" height="400" />
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem></TableHeaderItem>
            <TableHeaderItem bold>Material-UI</TableHeaderItem>
            <TableHeaderItem textAlign="right">React-Toolbox</TableHeaderItem>
            <TableHeaderItem textAlign="right">React MD</TableHeaderItem>
            <TableHeaderItem textAlign="right">React-Materialize</TableHeaderItem>
            <TableHeaderItem textAlign="right">R.M.C.W.</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>0.20.0</TableItem>
            <TableItem>2.0.0-beta.12</TableItem>
            <TableItem>1.2.11</TableItem>
            <TableItem>1.1.2</TableItem>
            <TableItem>1.1.1</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>32,572</TableItem>
            <TableItem>7,568</TableItem>
            <TableItem>1,566</TableItem>
            <TableItem>768</TableItem>
            <TableItem>290</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Components</TableItem>
            <TableItem>29</TableItem>
            <TableItem>28</TableItem>
            <TableItem>34</TableItem>
            <TableItem>21</TableItem>
            <TableItem>18</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Contributors</TableItem>
            <TableItem>636</TableItem>
            <TableItem>218</TableItem>
            <TableItem>41</TableItem>
            <TableItem>43</TableItem>
            <TableItem>9</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>12/138</TableItem>
            <TableItem>12/199</TableItem>
            <TableItem>47/122</TableItem>
            <TableItem>2/47</TableItem>
            <TableItem>1/12</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>MIT</TableItem>
            <TableItem>MIT</TableItem>
            <TableItem>MIT</TableItem>
            <TableItem>MIT</TableItem>
            <TableItem>MIT</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
      <Heading size={4} textColor="secondary">**Add some examples or something**</Heading>
    </Slide>

  </div>
);
