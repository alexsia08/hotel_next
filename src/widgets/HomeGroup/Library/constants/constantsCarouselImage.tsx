import type { ReactNode } from "react";
import { Carousel } from "antd";
import Image from "next/image";

import NumberOne from "../../../../shared/assets/NumberOne.svg";
import NumberTwo from "../../../../shared/assets/NumberTwo.svg";
import NumberThree from "../../../../shared/assets/NumberThree.svg";
import NumberFour from "../../../../shared/assets/HumberFour.svg";

import { useTranslations } from "use-intl";

const contentStyle: React.CSSProperties = {
  margin: "40px 0px -23px 10px",
  height: "265px",
  width: "425px",
  fontFamily: "Comic Sans MS, Comic Sans, cursive",
  fontSize: "20px",
  textAlign: "center",
};

const CSSImageNumber = {
  width: "425px",
  height: "240px",
  borderRadius: "25px",
};

const CSSNameNumber = {
  fontSize: "20px",
  fontFamily: "Comic Sans MS, Comic Sans, cursive",
  margin: "0px",
  textAlign: "center",
};

export enum ECarouselImage {
  NumberOne = "NumberOne",
  NumberTwo = "NumberTwo",
  NumberThree = "NumberThree",
  NumberFour = "NumberFour",
}

export const constantsImageNumber: Record<ECarouselImage, ReactNode> = {
  [ECarouselImage.NumberOne]: (
    <Image src={NumberOne} alt={"Number One"} style={CSSImageNumber} />
  ),
  [ECarouselImage.NumberTwo]: (
    <Image src={NumberTwo} alt={"Number Two"} style={CSSImageNumber} />
  ),
  [ECarouselImage.NumberThree]: (
    <Image src={NumberThree} alt={"Number Three"} style={CSSImageNumber} />
  ),
  [ECarouselImage.NumberFour]: (
    <Image src={NumberFour} alt={"Number Four"} style={CSSImageNumber} />
  ),
};

export const CarouselIMG = () => {
  const tHomeGroup = useTranslations("home-group");

  return (
    <Carousel
      arrows
      infinite={true}
      autoplay={true}
      slidesToShow={3}
      dots={false}
    >
      {Object.values(ECarouselImage).map((image, index) => (
        <div key={index}>
          <div style={contentStyle}>{constantsImageNumber[image]}</div>
          <h3 style={CSSNameNumber}>{tHomeGroup(`list.${index + 1}`)}</h3>
        </div>
      ))}
    </Carousel>
  );
};
