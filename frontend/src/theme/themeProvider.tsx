import { createMuiTheme, createTheme } from "@mui/material";
import { blue, green, purple, red } from "@mui/material/colors";
import React from "react";


declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      error?: React.CSSProperties["color"];
      orange?: React.CSSProperties["color"];
      blue1?: React.CSSProperties["color"];
      gray1?: React.CSSProperties["color"];
      gray2?: React.CSSProperties["color"];
      gray3?: React.CSSProperties["color"];
      gray4?: React.CSSProperties["color"];
      gray5?: React.CSSProperties["color"];
      gray6?: React.CSSProperties["color"];
      borderColor?: React.CSSProperties["color"];
      approvedColor?: React.CSSProperties["color"];
      doneColor?: React.CSSProperties["color"];
      rejectedColor?: React.CSSProperties["color"];
      mainTextColor?: React.CSSProperties["color"];
    };
    fontSize: {
      large: number;
      meduim: number;
      small: number;
    };
  }
  interface ThemeOptions {
    colors: {
      primary: React.CSSProperties["color"];
      secondary?: React.CSSProperties["color"];
      error?: React.CSSProperties["color"];
      orange?: React.CSSProperties["color"];
      blue1?: React.CSSProperties["color"];
      gray1?: React.CSSProperties["color"];
      gray2?: React.CSSProperties["color"];
      gray3?: React.CSSProperties["color"];
      gray4?: React.CSSProperties["color"];
      gray5?: React.CSSProperties["color"];
      gray6?: React.CSSProperties["color"];
      borderColor?: React.CSSProperties["color"];
      approvedColor?: React.CSSProperties["color"];
      doneColor?: React.CSSProperties["color"];
      rejectedColor?: React.CSSProperties["color"];
      mainTextColor?: React.CSSProperties["color"];
    };
    fontSize: {
      large: number;
      meduim: number;
      small: number;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  colors: {
    primary: "#1890ff",
    secondary: "white",
    error:"#d32f2f",
    orange:"#faad14",
    blue1:"#e6f7ff",
    gray1: "#fafafb",
    gray2: "#f0f0f0",
    gray3: "gray",
    gray4: "#ddd",
    gray5: "#d0d0d0",
    gray6:"#979797",
    approvedColor:"gray",
    doneColor:"green",
    rejectedColor:"red",
    borderColor:"rgb(240, 240, 240)",
    mainTextColor:"#5a5a5a",

  },
  fontSize: {
    large: 25,
    meduim: 12,
    small: 10,
  },
});


