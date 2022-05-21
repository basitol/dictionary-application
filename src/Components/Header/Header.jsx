import {
  TextField,
  // createMuiTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { languages } from "../../data";
import "./Header.css";

const Header = ({ category, setCategory, words, setWords }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
      },
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWords("");
  };

  return (
    <div className="header">
      <h1 className="title">{"Dictionary"}</h1>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={words}
            onChange={(e) => setWords(e.target.value)} // setWords is a function
          />
          <TextField
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {languages.map((language) => (
              <MenuItem key={language.label} value={language.label}>
                {language.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
      <p>{words ? words : "Typed Word"}</p>
    </div>
  );
};

export default Header;
