import type { ReactNode } from "react";
import Image from "next/image";

import yslugiOne from "../../../../shared/assets/yslugiOne.svg";
import yslugiTwo from "../../../../shared/assets/yslugiTwo.svg";
import yslugiThree from "../../../../shared/assets/yslugiThree.svg";

import { useTranslations } from "use-intl";
import { Flex } from "antd";

const CSSUslugiHotel = {
  borderRadius: "25px",
  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
  backgroundColor: "white",
  width: "400",
  height: "350px",
  margin: "20px 20px 0px 20px",
};

const CSSUslugiText = {
  fontFamily: "Comic Sans MS, Comic Sans, cursive",
  fontSize: "16px",
  margin: "0px 30px",
  textAlign: "center",
};

const CSSUslugiTitle = {
  fontFamily: "Comic Sans MS, Comic Sans, cursive",
  fontSize: "20px",
  margin: "5px",
  textAlign: "center",
};

const CSSImageUslugi = {
  width: "400px",
  height: "200px",
  borderTopLeftRadius: "25px",
  borderTopRightRadius: "25px",
};

export enum EUslugiHotel {
  UslugiOne = "UslugiOne",
  UslugiTwo = "UslugiTwo",
  UslugiThree = "UslugiThree",
}

export const constantsUslugi: Record<EUslugiHotel, ReactNode> = {
  [EUslugiHotel.UslugiOne]: (
    <Image src={yslugiOne} alt={"yslugiOne"} style={CSSImageUslugi} />
  ),
  [EUslugiHotel.UslugiTwo]: (
    <Image src={yslugiTwo} alt={"yslugiTwo"} style={CSSImageUslugi} />
  ),
  [EUslugiHotel.UslugiThree]: (
    <Image src={yslugiThree} alt={"yslugiOne"} style={CSSImageUslugi} />
  ),
};

export const UslugiHotel = () => {
  const tHomeGroup = useTranslations("home-group");

  return (
    <Flex>
      {Object.entries(constantsUslugi).map(([key, image], index) => (
        <div key={index} style={CSSUslugiHotel}>
          <div>
            <div>{image}</div>
            <h3 style={CSSUslugiTitle}>{tHomeGroup(`uslugi.${index + 1}`)}</h3>
            <p style={CSSUslugiText}>{tHomeGroup(`text.${index + 1}`)}</p>
          </div>
        </div>
      ))}
    </Flex>
  );
};
