import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text, List, ListItem, BlockQuote, Quote, Cite, Link } from 'spectacle';

import popular from '../../assets/atparty.gif';
import sLogo from '../../assets/semanticLogo.png';
import antLogo from '../../assets/antDesignLogo.svg';

export default (
  <div hasSlideChildren>
    <Slide bgColor="primary">
      <Heading textColor="black">Popular Libraries</Heading>
      <img src={popular} />
    </Slide>

    <Slide bgColor="primary">
      <img src={antLogo} height="200px" width="200px"/>
      <Heading textColor="black">Ant Design</Heading>
      <Heading size={6} textColor="secondary">Ant Design is way more that just a React library or framework. It’s a massive ecosystem with a proprietary style guide, custom Webpack-based build tool and custom CLI applications.</Heading>
    </Slide>

    <Slide>
      <List>
        <ListItem>Enterprise-class UI</ListItem>
        <ListItem>Used by Alibaba and Baidu</ListItem>
        <ListItem>In-depth design principals</ListItem>
        <ListItem>Complete defined types in TypeScript</ListItem>
        <ListItem>Some confusing translations</ListItem>
      </List>
    </Slide>

    <Slide>
      <Link href="https://ant.design/components/form/" target="new">Form Example</Link>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>3.1.6</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>23,571</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>52</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>426</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>20 / 174</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>MIT</TableItem>
          </TableRow>
        </TableBody>
      </Table>
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
      <Link href="https://react.semantic-ui.com/views/card#card-example-card" target="new">Card Example</Link>
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

    <Slide bgColor="primary">
      <img src={antLogo} height="200px" width="200px"/>
      <Heading textColor="black">Grommet</Heading>
      <Heading size={6} textColor="secondary">Grommet makes a great first impression thanks to its neat documentation, style guide, and its huge number of available UI components. Furthermore, it offers a solid enterprise-grade solution complete with a full-fledged design language.

      Being a project of Hewlett Packard, Grommet reflects the company’s vision of UX best practices, which might feel a little too specific. In fact, developers claim the framework’s component structuring is somewhat restrictive, with certain components only accepting certain children, nested in a certain way.</Heading>
    </Slide>

    <Slide>
      <List>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
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
  </div>
);
