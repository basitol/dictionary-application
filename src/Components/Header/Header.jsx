import {
  TextField,
  createMuiTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import { languages } from "../../data";
import "./Header.css";

const Header = ({ category, setCategory, words, setWords }) => {
  const darkTheme = createMuiTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
      },
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWords("");
  };

  return (
    <div className="header">
      <h1 className="title">{words ? words : "Dictionary"}</h1>
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
            onChange={(e) => handleChange(e.target.value)}
          >
            {languages.map((language) => (
              <MenuItem key={language.label} value={language.label}>
                {language.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
