"use client";
import { CSSBoundingContainer } from "@/src/shared/styles";
import React from "react";
import Image from "next/image";
import { CSSButton } from "./styles";
import { Flex, DatePicker, Space, InputNumber } from "antd";
import type { GetProps } from "antd";
import type { InputNumberProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import fonHotel from "../../../shared/assets/fonHotel.svg";

// import { useTranslations } from "next-intl";

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
        style={{ width: "600px", margin: "0px 0px 0px 195px" }}
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
        defaultValue={3}
        onChange={onChange}
        style={{ width: "250px", margin: "0px 0px 0px 10px" }}
      />
    </Space>
  );
};

export const HomeGroup: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f5deb3" }}>
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
                  margin: "30px 0px 0px 150px",
                }}
              >
                <CSSButton>Моя кнопка</CSSButton>
              </div>
            </div>
          </Flex>
          {/* <Flex>123</Flex> */}
        </CSSBoundingContainer>
      </div>
      <CSSBoundingContainer>123</CSSBoundingContainer>
    </div>
  );
};
