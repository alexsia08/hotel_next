import type { CSSProperties } from "react";
import styled from "@emotion/styled";

export const CSSHeaderTitle: CSSProperties = {
  margin: "0px",
  textDecoration: "underline",
  textDecorationThickness: "3px",
  fontSize: "70px",
  fontFamily: "Didot, serif",
  letterSpacing: "2px",
  // width: "188px",
};

export const CSSPageLink = styled.div(function () {
  return {
    borderBottom: "2px solid #FFFFFF",
    margin: "0px 0px",
    cursor: "pointer",
    transition: ".25s",

    "&:hover": {
      borderBottom: "2px solid black",
    },
  };
});

export const CSSIconsNetworks = styled.div(function () {
  return {
    margin: "5px 24px",
    width: "35px",

    svg: {
      width: "100%",
      height: "auto",
    },
  };
});

export const CSSTextOffSite = styled.div(function () {
  return {
    fontSize: "20px",
    fontFamily: "Didot, serif",
    marginTop: "-35px",
    letterSpacing: "2px",
  };
});

export const CSSAutarisazia = styled.div(function () {
  return {
    margin: "13px 16px",
    fontFamily: "Didot, serif",
    fontSize: "20px",
    textAlign: "right",
    cursor: "pointer",
    transition: ".25s",

    "&:hover": {
      color: "blue",
    },
  };
});

export const CSSPhone = styled.div(function () {
  return {
    margin: "15px",
    fontFamily: "Didot, serif",
    fontSize: "20px",
    textAlign: "center",
    cursor: "pointer",
    transition: ".25s",

    "&:hover": {
      color: "blue",
    },
  };
});
