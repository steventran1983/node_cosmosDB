//image
import { Description } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FB0087",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
    white: {
      main: "#FFFFF",
      light: "#FFFFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

// make a array for team contact with id

export const api = "https://dii-portfolio-deploy.azurewebsites.net/api";
// export const api = "http://localhost:4000/api";

export const avaratMap = {
  Vikas: "https://thangtranweek5.blob.core.windows.net/teamphoto/Vikas.png",
  Srid: "https://thangtranweek5.blob.core.windows.net/teamphoto/Srid.png",
  Thang: "https://thangtranweek5.blob.core.windows.net/teamphoto/Thang.png",
  Sonali: "https://thangtranweek5.blob.core.windows.net/teamphoto/Sonali.png",
  Tom: "https://thangtranweek5.blob.core.windows.net/teamphoto/Tom.png",
  Raymond: "https://thangtranweek5.blob.core.windows.net/teamphoto/Raymond.png",
  Manjith: "https://thangtranweek5.blob.core.windows.net/teamphoto/Manjith.png",
  Darren: "https://thangtranweek5.blob.core.windows.net/teamphoto/Darren.png",
  Statos: "https://thangtranweek5.blob.core.windows.net/teamphoto/Statos.png",
  Anand: "https://thangtranweek5.blob.core.windows.net/teamphoto/Anand.png",
  Rod: "https://thangtranweek5.blob.core.windows.net/teamphoto/Rod.png",
  Shalini: "https://thangtranweek5.blob.core.windows.net/teamphoto/Shalini.png",
  Rich: "https://thangtranweek5.blob.core.windows.net/teamphoto/Rich.png",
  Monte: "https://thangtranweek5.blob.core.windows.net/teamphoto/Monte.png",
  Stephen: "https://thangtranweek5.blob.core.windows.net/teamphoto/Stephen.png",
  Other: "https://thangtranweek5.blob.core.windows.net/teamphoto/Other.png",
};
