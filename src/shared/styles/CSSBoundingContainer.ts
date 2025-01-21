// import { useContext } from "react";
import styled from "@emotion/styled";
// import { EViewPort, ViewPortContext } from "@/app/providers/ViewPortProvider";

export const CSSBoundingContainer = styled.div(function () {
  //   const viewPort = useContext(ViewPortContext);

  return {
    // width: viewPort === EViewPort.mobile ? "100%" : "1280px",
    width: "1320px",
    margin: "0px auto",
  };
});
