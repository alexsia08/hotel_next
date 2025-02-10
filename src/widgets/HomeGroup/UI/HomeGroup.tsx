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
  CSSTitleTwoHomeGroup,
  CSSButtonUslugi,
} from "./styles";
import { Flex, DatePicker, Space, InputNumber } from "antd";
import type { GetProps } from "antd";
import type { InputNumberProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import fonHotel from "../../../shared/assets/fonHotel.svg";
import Hotel from "../../../shared/assets/Hotel.svg";
import { CarouselIMG } from "../Library/constants/constantsCarouselImage";
import { UslugiHotel } from "../Library/constants/constantsUslugi";

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
                <CSSButton>{tHomeGroup("buttonSearch")}</CSSButton>
              </div>
            </div>
          </Flex>
        </CSSBoundingContainer>
      </div>

      <CSSBoundingContainer>
        <CarouselIMG />
        <CSSButtonNumber>{tHomeGroup("buttonNumber")}</CSSButtonNumber>
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
        <CSSTitleTwoHomeGroup>{tHomeGroup("titleTwo")}</CSSTitleTwoHomeGroup>

        <UslugiHotel />

        <CSSButtonUslugi>{tHomeGroup("buttonUslugi")}</CSSButtonUslugi>
      </CSSBoundingContainer>
    </div>
  );
};
