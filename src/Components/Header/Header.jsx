import {
  TextField,
  createMuiTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import { languages } from "../../data";
import "./Header.css";

const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
      },
    },
  });

  return (
    <div className="header">
      <h1 className="title">Dictionary</h1>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Language"
            // value={currency}
            // onChange={handleChange}
            helperText="Please select your language"
          >
            {languages.map((language) => (
              <MenuItem key={language.value} value={language.value}>
                {language.label}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
