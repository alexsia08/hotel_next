"use client";
import { CSSBoundingContainer } from "@/src/shared/styles";
import React from "react";
import { useTranslations } from "use-intl";
import Image from "next/image";
import {
  CSSButton,
  CSSTitleOneHomeGroup,
  CSSTextOneHomeGroup,
  CSSTextTwoHomeGroup,
  CSSButtonNumber,
} from "./styles";
import { Flex, DatePicker, Space, InputNumber, Carousel } from "antd";
import type { GetProps } from "antd";
import type { InputNumberProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import fonHotel from "../../../shared/assets/fonHotel.svg";
import Hotel from "../../../shared/assets/Hotel.svg";
import NumberOne from "../../../shared/assets/NumberOne.svg";
import NumberTwo from "../../../shared/assets/NumberTwo.svg";
import NumberThree from "../../../shared/assets/NumberThree.svg";
import NumberFour from "../../../shared/assets/HumberFour.svg";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().endOf("day");
};

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

const DataJSX = () => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        disabledDate={disabledDate}
        size="large"
        style={{
          width: "600px",
          margin: "0px 0px 0px 210px",
          boxShadow: "5px 5px 0px rgba(174, 172, 172, 0.5)",
        }}
      />
    </Space>
  );
};

const GuestJSX = () => {
  return (
    <Space wrap>
      <InputNumber
        size="large"
        min={1}
        max={100000}
        defaultValue={1}
        onChange={onChange}
        style={{
          width: "250px",
          margin: "0px 0px 0px 10px",
          boxShadow: "5px 5px 0px rgba(174, 172, 172, 0.5)",
        }}
      />
    </Space>
  );
};

const contentStyle: React.CSSProperties = {
  margin: "40px 0px 0px 9px",
  height: "265px",
  width: "425px",
  fontFamily: "Didot, serif",
  fontSize: "20px",
  textAlign: "center",
};

const CarouselJSX: React.FC = () => (
  <Carousel
    arrows
    infinite={true}
    autoplay={true}
    slidesToShow={3}
    dots={false}
  >
    <div>
      <h3 style={contentStyle}>
        <Image
          src={NumberOne}
          alt={"NumberOne"}
          style={{
            width: "425px",
            height: "240px",
          }}
        />
        Представительские апартаменты
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src={NumberTwo}
          alt={"NumberTwo"}
          style={{
            width: "425px",
            height: "240px",
          }}
        />
        Апартаменты
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src={NumberThree}
          alt={"NumberThree"}
          style={{
            width: "425px",
            height: "240px",
          }}
        />
        Семейный люкс с двумя спальнями
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src={NumberFour}
          alt={"NumberFour"}
          style={{
            width: "425px",
            height: "240px",
          }}
        />
        Одноместный номер бизнес-класса
      </h3>
    </div>
  </Carousel>
);

export const HomeGroup: React.FC = () => {
  const tHomeGroup = useTranslations(`home-group`);

  return (
    <div style={{ backgroundColor: "#f5f5dc" }}>
      <div style={{ position: "relative", height: "350px" }}>
        <Image
          src={fonHotel}
          alt={"fonHotel"}
          style={{
            position: "absolute",
            filter: "brightness(40%)",
            width: "1550px",
            height: "350px",
            zIndex: "1",
          }}
        />
        <CSSBoundingContainer>
          <Flex
            style={{
              position: "relative",
              zIndex: "2",
              border: "0px solid red",
              height: "350px",
              alignItems: "center",
            }}
          >
            <div>
              <DataJSX />
              <GuestJSX />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "30px 0px 0px 210px",
                }}
              >
                <CSSButton>Найти номер</CSSButton>
              </div>
            </div>
          </Flex>
        </CSSBoundingContainer>
      </div>

      <CSSBoundingContainer>
        <CarouselJSX />
        <CSSButtonNumber>Посмотреть все номера</CSSButtonNumber>
        <CSSTitleOneHomeGroup>{tHomeGroup("titleOne")}</CSSTitleOneHomeGroup>
        <Flex>
          <Image
            src={Hotel}
            alt={"Hotel"}
            style={{
              filter: "brightness(40%)",
              width: "560px",
              height: "300px",
              marginTop: "20px",
              // marginLeft: "20px",
              borderRadius: "40px",
            }}
          />
          <div>
            <CSSTextOneHomeGroup>{tHomeGroup("textOne")}</CSSTextOneHomeGroup>
            <CSSTextTwoHomeGroup>{tHomeGroup("textTwo")}</CSSTextTwoHomeGroup>
          </div>
        </Flex>
      </CSSBoundingContainer>
    </div>
  );
};
