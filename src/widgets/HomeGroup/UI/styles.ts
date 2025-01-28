import styled from "@emotion/styled";

export const CSSButton = styled.button(function () {
  return {
    width: "200px",
    height: "40px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f5deb3",
    fontSize: "17px",
    fontFamily: "Didot, serif",
    transition: ".25s",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",

    "&:active": {
      backgroundColor: "#FFFFFF",
    },
  };
});

export const CSSTitleOneHomeGroup = styled.div(function () {
  return {
    fontSize: "40px",
    fontFamily: "Apple Chancery, cursive",
    marginTop: "18px",
    // textAlign: "center",
  };
});

export const CSSTextOneHomeGroup = styled.div(function () {
  return {
    margin: "50px 0px 0px 30px",
    fontFamily: "Didot, serif",
    fontSize: "22px",
    textAlign: "justify",
    lineHeight: "30px",
    width: "730px",
  };
});

export const CSSTextTwoHomeGroup = styled.div(function () {
  return {
    margin: "0px 0px 0px 30px",
    fontFamily: "Didot, serif",
    fontSize: "22px",
    textAlign: "justify",
    lineHeight: "30px",
    width: "730px",
  };
});

export const CSSButtonNumber = styled.button(function () {
  return {
    margin: "30px 0px 0px",
    width: "200px",
    height: "40px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#f5deb3",
    fontSize: "17px",
    fontFamily: "Didot, serif",
    transition: ".25s",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",

    "&:active": {
      backgroundColor: "#FFFFFF",
    },
  };
});
