"use client";
import React from "react";
import { Flex, Typography } from "antd";
import Image from "next/image";
import { CSSBoundingContainer } from "@/src/shared/styles";
import { useTranslations } from "use-intl";
import {
  CSSHeaderTitle,
  CSSPageLink,
  CSSIconsNetworks,
  CSSTextOffSite,
  CSSAutarisazia,
  CSSPhone,
} from "./styles";
import {
  ESocialNetwork,
  constantSocialNetworkIcons,
} from "../Library/constants/constantsSocialNetworksIcons";

const { Title, Paragraph } = Typography;

import LogoImage from "../../../shared/assets/LogoImage.jpg";

export const HeaderLine: React.FC = () => {
  const tHeaderLine = useTranslations(`header-line`);

  const listPageLinksJSX = Array(Number(tHeaderLine("list-length")))
    .fill(null)
    .map((_, index: number) => (
      <CSSPageLink key={index}>
        <Paragraph
          style={{
            margin: "0px 10px",
            fontSize: "25px",
            fontFamily: "Didot, serif",
          }}
        >
          {tHeaderLine(`list.${index + 1}`)}
        </Paragraph>
      </CSSPageLink>
    ));

  const socialNetworksIconsJSX = Object.values(ESocialNetwork).map(
    (enumValue: string, index: number) => (
      <CSSIconsNetworks key={index}>
        {constantSocialNetworkIcons[enumValue as ESocialNetwork]}
      </CSSIconsNetworks>
    )
  );

  return (
    <div
      style={{ borderBottom: "1px solid #CFCFCF", backgroundColor: "#FFFFFF" }}
    >
      <CSSBoundingContainer>
        <Flex justify="space-between" align="start" style={{ margin: "0px" }}>
          <Flex align="flex-end">
            <Image
              src={LogoImage}
              alt={"LogoImage"}
              style={{ width: "150px", height: "auto" }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                width: "940px",
              }}
            >
              <Title level={2} style={CSSHeaderTitle}>
                {tHeaderLine("title")}
              </Title>

              <CSSTextOffSite>
                <p>{tHeaderLine("ofsite")}</p>
              </CSSTextOffSite>

              <Flex
                justify="space-between"
                align="center"
                style={{ marginTop: "0px" }}
              >
                {listPageLinksJSX}
              </Flex>
            </div>
          </Flex>

          <Flex justify="space-between" style={{ flexDirection: "column" }}>
            <div>
              <CSSAutarisazia>{tHeaderLine("autoris")}</CSSAutarisazia>
              <CSSPhone>{tHeaderLine("number")}</CSSPhone>
            </div>

            <Flex justify="center">{socialNetworksIconsJSX}</Flex>
          </Flex>
        </Flex>
      </CSSBoundingContainer>
    </div>
  );
};
