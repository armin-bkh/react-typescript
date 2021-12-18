import { useState } from "react";
import { Button } from "./Components/Button";
import { Form } from "./Components/Form";
import Greet from "./Components/Greet";
import Header from "./Components/Header";
import { Heading } from "./Components/Heading";
import Personel from "./Components/Personel";
import { PersonelList } from "./Components/PersonelList";
import { User } from "./Components/State/User";
import Status from "./Components/Status";
import { Text } from "./Components/Text";

function App() {
  const [personel, setPersonel] = useState([
    {id: 1, firstName: "Armin", lastName: "Bakhshi"},
    {id: 2, firstName: "Shahin", lastName: "Samadi"},
    {id: 3, firstName: "Ariya", lastName: "Sadeghi"},
    {id: 4, firstName: "Matin", lastName: "Keyvan"},
    {id: 5, firstName: "Radin", lastName: "Sadraee"},
  ])

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, value: string) =>{
    console.log(e, value);
  }

  return (
    <div>
      {/* <Greet name="Armin" age={17} isLoggedIn={true} /> */}
      {/* <Personel firstName="Armin" lastName="Bakhshi" /> */}
      {/* <PersonelList personel={personel} /> */}
  {/* <Header>
      <Heading>
        Hello world
      </Heading>
  </Header>
  <Greet name="Armin" age={20} />
      <Status status="success" /> */}

      {/* <Button value="click on me" onClick={clickHandler} /> */}
      {/* <Form /> */}
      {/* <Text styles={{padding: '1rem', color: "#ccc"}}>Hello world</Text> */}
      <User />
    </div>
  );
}

export default App;
