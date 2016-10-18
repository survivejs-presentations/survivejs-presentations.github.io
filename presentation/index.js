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
  Text
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
const images = mapValues({
  survivejs: require("../images/survivejs.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
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
            <Heading size={1}>
              Presentations
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://presentations.survivejs.com/javascript-in-2016/">JavaScript in 2016</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://presentations.survivejs.com/react-in-2016/">React in 2016</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://presentations.survivejs.com/state-management-in-react/">State management in React</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://presentations.survivejs.com/react-api-design/">React API Design - Case Reactabular</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://presentations.survivejs.com/how-to-write-a-book-and-survivejs-it/">How to write a book and SurviveJS it</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Presentations (legacy)
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://presentations.survivejs.com/frontend-in-2015/">Frontend in 2015</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              About Author
            </Heading>
            <List>
              <Appear><ListItem>Juho Vepsäläinen</ListItem></Appear>
              <Appear><ListItem>Subcontractor gone author (est. 2015)</ListItem></Appear>
              <Appear><ListItem>Thousands of books sold, growing community</ListItem></Appear>
              <Appear><ListItem>Academic background (C, Python, JavaScript)</ListItem></Appear>
              <Appear><ListItem><Link href="http://www.nixtu.info/">nixtu.info</Link>, <Link href="http://survivejs.com/">SurviveJS</Link>, <Link href="http://jster.net/">JSter</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://twitter.com/bebraw"><b>@bebraw</b></Link>, <Link href="https://twitter.com/survivejs"><b>@survivejs</b></Link>, <Link href="https://twitter.com/jsterlibs"><b>@jsterlibs</b></Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
