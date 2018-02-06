import React from 'react';
import { Slide, Heading, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text, List, ListItem, BlockQuote, Quote, Cite, Link, Notes } from 'spectacle';

import special from '../../assets/special.gif';
import blueprint from '../../assets/blueprint.png';
import microsoft from '../../assets/microsoft.png';
import reactDesktop from '../../assets/reactDesktop.png';
import onsen from '../../assets/onsen.png';
import virtualized from '../../assets/virtualized.png';
import questions from '../../assets/questions.gif';

export default (
  <div hasSlideChildren>

    <Slide bgColor="primary">
      <img src={special} />
      <Heading textColor="black" margin="20px">Specialized</Heading>
    </Slide>

    <Slide bgColor="primary">
      <img src={blueprint} height="200px" width="200px" />
      <Heading textColor="black">Blueprint</Heading>
      <Notes>Blueprint is a component library with a primary focus on building data-heavy interfaces for desktop screens. Being essentially desktop-first, it doesn’t offer much in the way of mobile UIs, which is an important thing to consider.</Notes>
    </Slide>

    <Slide>
      <Link href="http://blueprintjs.com/docs/v1/#table-js" target="new">Table Example</Link>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>1.35.2</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>8,228</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>30</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>84</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>70 / 291</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>Apache 2.0</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide bgColor="primary">
      <img src={microsoft} />
      <Heading textColor="black">Fabric</Heading>
      <Notes>The official React components library from Microsoft, Fabric brings the aesthetic of MS Office to third-party web apps. Much like Material Design, Fabric is a complete design language rather than a collection of “starter-pack” styles that you will heavily modify. The licensing of the fonts and brand icons are not under the same MIT license as the components, which means they might be out of reach if you’re working on an independent project.</Notes>
    </Slide>

    <Slide>
      <Link href="https://developer.microsoft.com/en-us/fabric#/components/teachingbubble" target="new">Teaching Bubble Example</Link>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>5.45.3</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>2,232</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>52</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>209</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>110 / 406</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>MIT & Fabric Assets License</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide bgColor="primary">
      <img src={reactDesktop} height="200px" width="200px" />
      <Heading textColor="black">React Desktop</Heading>
      <Notes>React Desktop is different from other libraries on this list because it’s essentially a small collection of Windows and macOS UI elements. There are 19 macOS and 12 windows components that mimick native UI elements of the two operational systems.</Notes>
    </Slide>

    <Slide>
      <Link href="http://reactdesktop.js.org/demo/" target="new">Demo</Link>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>0.3.3</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>7,076</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>31</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>14</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>7 / 21</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>MIT</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide bgColor="primary">
      <img src={onsen} height="200px" width="200px" />
      <Heading textColor="black">Onsen UI</Heading>
      <Notes>Create beautiful and performant cross-platform mobile apps with the Onsen UI mobile app development framework. Onsen is based around web components and provides bindings for Angular 1, 2, React and Vue.js. Great docs!</Notes>
    </Slide>

    <Slide>
      <Link href="https://onsen.io/v2/api/react/List.html" target="new">List Example</Link>
      <Table>
        <TableBody>
          <TableRow>
            <TableItem>Version</TableItem>
            <TableItem>2.9.1</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>GitHub Stars</TableItem>
            <TableItem>5,953</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Components</TableItem>
            <TableItem>47</TableItem>
          </TableRow>
          <TableRow>
            <TableItem># Contributors</TableItem>
            <TableItem>86</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Open Bugs / Issues</TableItem>
            <TableItem>7 / 47</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>License</TableItem>
            <TableItem>Apache 2.0</TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide bgColor="primary">
      <img src={virtualized} height="200px" width="200px" />
      <Heading textColor="black"><Link href="https://bvaughn.github.io/react-virtualized/#/components/Masonry" target="new">React Virtualized</Link></Heading>
      <Notes>A set of components and wrappers for efficiently rendering large lists and tabular data. Masonry Example in link.</Notes>
    </Slide>

    <Slide bgColor="primary">
      <Heading textColor="black"><Link href="http://demo.searchkit.co/" target="new">SearchKit</Link></Heading>
      <Notes>SearchKit is a suite of UI components built in react. The aim is rapidly create beautiful search applications using declarative components, and without being an ElasticSearch expert.</Notes>
    </Slide>

    <Slide bgColor="primary">
      <Heading textColor="black"><Link href="https://marmelab.com/admin-on-rest-demo/#/customers" taget="new">Admin on REST</Link></Heading>
      <Notes>A frontend Framework for building admin applications running in the browser on top of REST services.</Notes>
    </Slide>

    <Slide>
      <Heading textColor="black"><Link href="../../assets/comparisonTable.html" target="new">Comparison Table</Link></Heading>
    </Slide>

    <Slide>
      <img src={questions} />
      <Heading textColor="black" size={6}>Questions, Answers, Thoughts, Musings?</Heading>
    </Slide>

  </div>
);
