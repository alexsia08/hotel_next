"use client";
import { HeaderLine } from "../widgets/HeaderLine";
import { HomeGroup } from "../widgets/HomeGroup";
import { FooterLine } from "../widgets/FooterLine";

export default function HomePage() {
  return (
    <div>
      <HeaderLine />
      <HomeGroup />
      <FooterLine />
    </div>
  );
}
