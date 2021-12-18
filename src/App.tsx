import { useState } from "react";
import Greet from "./Components/Greet";
import Header from "./Components/Header";
import { Heading } from "./Components/Heading";
import Personel from "./Components/Personel";
import { PersonelList } from "./Components/PersonelList";
import Status from "./Components/Status";

function App() {
  // const [personel, setPersonel] = useState([
  //   {id: 1, firstName: "Armin", lastName: "Bakhshi"},
  //   {id: 2, firstName: "Shahin", lastName: "Samadi"},
  //   {id: 3, firstName: "Ariya", lastName: "Sadeghi"},
  //   {id: 4, firstName: "Matin", lastName: "Keyvan"},
  //   {id: 5, firstName: "Radin", lastName: "Sadraee"},
  // ])
  return (
    <div>
      {/* <Greet name="Armin" age={17} isLoggedIn={false} />
      <PersonelList personel={personel} /> */}
  <Header>
      <Heading>
        Hello world
      </Heading>
  </Header>
  <Greet name="Armin" age={20} />
      <Status status="success" />
    </div>
  );
}

export default App;
