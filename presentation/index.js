// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Table, TableHeader, TableRow, TableHeaderItem, TableItem, TableBody, Text, Link, Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import slides
import bootstrapSlides from "./bootstrap";
import materialSlides from './materialDesign';
import otherSlides from './other';
import popSlides from './popular';

// Import images
import confused from '../assets/confusedgirl.gif';
import ss1 from '../assets/screenshot1.jpg';
import confusedfez from '../assets/confusedfez.gif';
import bootstrap from '../assets/bootstrap.svg';

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Choosing A React Component Library
          </Heading>
          <Cite>Matthew Holman</Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Component Library?</Heading>
          <img src={confused} />
        </Slide>

        <Slide transition={["fade"]} align="center" bgColor="secondary" textColor="primary">
          <img src={ss1} width="930px" height="540px" />
          <Notes>An organized library of re-usable React components. Usually well documented with examples. Sometimes with test coverage. </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="secondary">But Why?</Heading>
          <List>
            <ListItem>Speed-up UI development</ListItem>
            <ListItem>Minimize decision fatigue</ListItem>
            <ListItem>Ship your product faster</ListItem>
            <ListItem>Help with readable / maintainable code</ListItem>
          </List>
          <Notes>There are many React component libraries that have already been developed, are actively maintained, and are ready to use on your project. Using an existing component library will help keep your code readable and maintainable, speed-up your development and help you ship your product faster. This talk will guide you through some of the available options and help you choose a library that best fits your project!</Notes>
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary" margin="20px">Great! What are my options?</Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>Material UI</TableItem>
                <TableItem>React Toolbox</TableItem>
                <TableItem>React MD</TableItem>
                <TableItem>React Materialize</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Belle</TableItem>
                <TableItem>Onsen UI</TableItem>
                <TableItem>Elemental UI</TableItem>
                <TableItem>React Foundation</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>React Virtualized</TableItem>
                <TableItem>SearchKit</TableItem>
                <TableItem>Admin on REST</TableItem>
                <TableItem>Mulesoft</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>RMCW</TableItem>
                <TableItem>React Bootstrap</TableItem>
                <TableItem>Reactstrap</TableItem>
                <TableItem>Ant Design</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Semantic UI</TableItem>
                <TableItem>Blueprint</TableItem>
                <TableItem>Fabric</TableItem>
                <TableItem>Grommet</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Rebass</TableItem>
                <TableItem>React Toolbox</TableItem>
                <TableItem>React Desktop</TableItem>
                <TableItem>Pivitol UI React</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Prime React</TableItem>
                <TableItem>Design System React</TableItem>
                <TableItem>Khan Academy Components</TableItem>
                <TableItem>Streamlined</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Notes>There are a TON of options out there.</Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="secondary">Uhhhh.....</Heading>
          <img src={confusedfez} />
          <Notes>So, with all those options out there, where can we start? </Notes>
        </Slide>
        {bootstrapSlides}
        {materialSlides}
        {popSlides}
        {otherSlides}
      </Deck>
    );
  }
}
