// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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
            Choosing a React Component Library
          </Heading>
          <Cite>Matthew Holman</Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Component Library?</Heading>
          <img src={confused} />
        </Slide>

        <Slide transition={["fade"]} align="center" bgColor="secondary" textColor="primary">
          <img src={ss1} width="930px" height="540px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="secondary">But Why?</Heading>
          <List>
            <ListItem>Speed-up UI development</ListItem>
            <ListItem>Minimize decision fatigue</ListItem>
            <ListItem>Ship your product faster</ListItem>
            <ListItem>Help with readable / maintainable code</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="secondary">Where do we start?</Heading>
          <img src={confusedfez} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="secondary">Bootstrap!</Heading>
          <img src={bootstrap} height="200px" width="200px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>react-bootstrap</TableHeaderItem>
                <TableHeaderItem>reactstrap</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>None</TableItem>
                <TableItem>61.8%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>jQuery</TableItem>
                <TableItem>28.3%</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

      </Deck>
    );
  }
}
