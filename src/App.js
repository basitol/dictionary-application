import { Container } from "@mui/material";
import { createTheme } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";

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

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);
  return (
    <div
      className="App"
      style={{ backgroundColor: "#222", height: "100vh", color: "#fff" }}
      theme={darkTheme}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          words={words}
          setWords={setWords}
        />
      </Container>
    </div>
  );
}

export default App;
