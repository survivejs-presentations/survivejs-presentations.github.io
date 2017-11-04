// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    survivejs: require("../images/survivejs.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              SurviveJS Presentations
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>React Presentations I</Heading>
            <List>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-components/">
                  React Components
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-and-redux/">
                  React and Redux
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-architecture/">
                  React Architecture
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/forms-in-react/">
                  Forms in React
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-performance/">
                  React Performance
                </Link>
              </ListItem>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>React Presentations II</Heading>
            <List>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-api-design/">
                  React API Design - Case Reactabular
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-compatible-alternatives/">
                  React Compatible Alternatives
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-quo-vadis/">
                  React - Quo Vadis
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/antwar-site-generator/">
                  Antwar - Site Generator with Webpack and React
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>Webpack Presentations</Heading>
            <List>
              <ListItem>
                <Link href="https://presentations.survivejs.com/re-imagining-webpack/">
                  Re-imagining Webpack
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/webpack-from-apprentice-to-journeyman/">
                  Webpack - From Apprentice to Journeyman
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/webpack-from-journeyman-to-master/">
                  Webpack - From Journeyman to Master
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/webpack-the-good-parts/">
                  Webpack - The Good Parts
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/webpack-the-react-parts/">
                  Webpack - The React Parts
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>Other Presentations</Heading>
            <List>
              <ListItem>
                <Link href="https://presentations.survivejs.com/javascript-in-2016/">
                  JavaScript in 2016
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/bootstrapping-a-personal-lifestyle-business/">
                  Case SurviveJS - Bootstrapping a personal lifestyle business
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>Legacy Presentations</Heading>
            <List>
              <ListItem>
                <Link href="https://presentations.survivejs.com/state-management-in-react/">
                  State Management in React
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/structuring-react-projects/">
                  Structuring React Projects
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/advanced-webpack/">
                  Advanced Webpack
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/how-to-write-a-book-and-survivejs-it/">
                  How to write a book and SurviveJS it
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>Legacy Presentations</Heading>
            <List>
              <ListItem>
                <Link href="https://presentations.survivejs.com/javascript-quo-vadis/">
                  JavaScript - Quo Vadis?
                </Link>{" "}
                - A look at the state of JavaScript ecosystem from early 2016
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/frontend-in-2015/">
                  Frontend in 2015
                </Link>{" "}
                - A look at the state of frontend in 2015
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/training/">
                  SurviveJS React Training
                </Link>{" "}
                - Split up to smaller presentations earlier. Still interesting,
                though
              </ListItem>
              <ListItem>
                <Link href="https://presentations.survivejs.com/react-in-2016/">
                  React in 2016
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>About Author</Heading>
            <List>
              <Appear>
                <ListItem>Juho Vepsäläinen</ListItem>
              </Appear>
              <Appear>
                <ListItem>Subcontractor gone author (est. 2015)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Thousands of books sold, growing community</ListItem>
              </Appear>
              <Appear>
                <ListItem>Academic background (C, Python, JavaScript)</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="http://www.nixtu.info/">nixtu.info</Link>,{" "}
                  <Link href="http://survivejs.com/">SurviveJS</Link>,{" "}
                  <Link href="http://jster.net/">JSter</Link>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://twitter.com/bebraw">
                    <b>@bebraw</b>
                  </Link>,{" "}
                  <Link href="https://twitter.com/survivejs">
                    <b>@survivejs</b>
                  </Link>,{" "}
                  <Link href="https://twitter.com/jsterlibs">
                    <b>@jsterlibs</b>
                  </Link>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>SurviveJS</Heading>
            </Link>
            <Image
              src={images.survivejs}
              margin="0px auto 40px"
              height="524px"
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
