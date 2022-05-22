import { Container } from "@mui/material";
import { createTheme } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./Components/Definitions/Definitions";
import Header from "./Components/Header/Header";
import SwitchToggle from "./Components/Switch/Switch";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#fff",
    },
  },
});

function App() {
  const [meanings, setMeanings] = useState([]);
  const [words, setWords] = useState(""); // words is an array of objects
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${words}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [words, category]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: lightMode ? "#F3F6F9" : "#222",
        height: "100vh",
        color: lightMode ? "#778693" : "#fff",
        transition: "all 0.5s ease-in-out",
      }}
      theme={darkTheme}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          words={words}
          setWords={setWords}
          checked={lightMode}
          onChange={handleChange}
        />

        <Definitions
          words={words}
          meanings={meanings}
          category={category}
          lightMode={lightMode}
        />
      </Container>
    </div>
  );
}

export default App;
