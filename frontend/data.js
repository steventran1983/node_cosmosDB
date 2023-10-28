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

// export const api = "https://dii-portfolio.azurewebsites.net/api";
export const api = "http://localhost:4000/api";

export const avaratMap = {
  Vikas: "https://thangtranweek5.blob.core.windows.net/teamphoto/Vikas.png",
  Jai: "https://thangtranweek5.blob.core.windows.net/teamphoto/Jai.png",
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
  Diglio: "https://thangtranweek5.blob.core.windows.net/teamphoto/other.png",
  Arun: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_3.png",
  Arman: "https://thangtranweek5.blob.core.windows.net/teamphoto/other.png",
  Jason: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_1.png",
  Gavin: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_2.png",
  Aditi: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_2.png",
  Julio: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_3.png",
  Peter: "https://thangtranweek5.blob.core.windows.net/teamphoto/Peter.png",
  Lance: "https://thangtranweek5.blob.core.windows.net/teamphoto/other.png",
  Diglio: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_2.png",
  Stratos: "https://thangtranweek5.blob.core.windows.net/teamphoto/Stratos.png",
  Sri: "https://thangtranweek5.blob.core.windows.net/teamphoto/Srid.png",
  Kiran: "https://thangtranweek5.blob.core.windows.net/teamphoto/other_3.png",
  Bhavin: "https://thangtranweek5.blob.core.windows.net/teamphoto/other.png",
};

export const commuTest = [
  {
    id: 1,
    title: "LSR Insights In Quantum Snowflake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    impact: [
      "lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    detail: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    table: {
      head: ["table name", "description"],
      body: [
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
      ],
    },
    nextstep: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    diagram: "https://www.w3schools.com/w3css/img_lights.jpg",
    contact: {
      engineers: ["Thang Tran", "Darren Husting", "Stratos Koutrulis"],
      managers: "Vikas Ranjas",
      director: "Peter Huang",
      team: "Quantum LSR Mission Team",
    },
  },
  {
    id: 2,
    title: "LSR Insights In Quantum Snowflake Number 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    impact: [
      "lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    detail: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    table: {
      head: ["table name", "description"],
      body: [
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
      ],
    },
    nextstep: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    diagram: "https://www.w3schools.com/w3css/img_lights.jpg",
    contact: {
      engineers: ["Thang Tran", "Darren Husting", "Stratos Koutrulis"],
      managers: "Vikas Ranjas",
      director: "Peter Huang",
      team: "Quantum LSR Mission Team",
    },
  },
  {
    id: 3,
    title: "LSR Insights In Quantum Snowflake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    impact: [
      "lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    detail: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    table: {
      head: ["table name", "description"],
      body: [
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
      ],
    },
    nextstep: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    diagram: "https://www.w3schools.com/w3css/img_lights.jpg",
    contact: {
      engineers: ["Thang Tran", "Darren Husting", "Stratos Koutrulis"],
      managers: "Vikas Ranjas",
      director: "Peter Huang",
      team: "Quantum LSR Mission Team",
    },
  },
  {
    id: 4,
    title: "LSR Insights In Quantum Snowflake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    impact: [
      "lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    detail: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    table: {
      head: ["table name", "description"],
      body: [
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        ["LSR_ENDC", "lorem ipsum dolor sit amet, consectetur adipiscing elit"],
      ],
    },
    nextstep: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
    diagram: "https://www.w3schools.com/w3css/img_lights.jpg",
    contact: {
      engineers: ["Thang Tran", "Darren Husting", "Stratos Koutrulis"],
      managers: "Vikas Ranjas",
      director: "Peter Huang",
      team: "Quantum LSR Mission Team",
    },
  },
];
