import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  padding: 48px 0 26px 0;

  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 22px 0 26px 0;
  }
`;

export const ContainerCenter = styled.div`
  width: 100%;
  max-width: 632px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 26px;
  @media screen and (max-width: 1354px) {
    margin: 0px;
    margin-right: 26px;
    margin-left: 360px;
  }
  @media screen and (max-width: 900px) {
    margin: 0 26px;
  }
`;

export const InfoGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const InfoTitle = styled.p`
  font-size: 20px;
  position: relative;

  &::before {
    background-color: #fff;
    content: "";
    color: #fff;
    display: inline-block;
    height: 2px;
    position: absolute;
    vertical-align: middle;
    width: 63px;
    bottom: -6px;
  }
`;

export const InfoText = styled.div<
  HTMLAttributes<HTMLDivElement> & { link?: boolean }
>`
  color: #fff;
  line-height: ${({ link }) => (link ? 26 : 21)}px;
  font-size: 14px;
`;

export const InfoTextLevel = styled.p<any>`
  line-height: ${({ link }) => (link ? 26 : 21)}px;
  font-size: 14px;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoLink = styled.a<any>`
  font-size: 14px;
  gap: 4px;
  display: inline-flex;
  align-items: center;
`;

export const InfoExperiencesText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PositionData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CompanyLogo = styled.img`
  height: 14px;
`;

export const HowWorksLevels = styled.div`
  margin-left: -12px;
  width: 283px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #1c1c1c;
  border-radius: 8px;
`;

export const HowItWorksTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonCVA = styled.a`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const ButtonCVDownload = styled.button<any>`
  cursor: pointer;
  margin-top: 48px;
  position: relative;
  background-color: #1c1c1c;
  width: 100%;
  border-radius: 8px;
  height: 42px;
  min-height: 42px;
  border: none;
  display: block;
  @media screen and (max-width: 900px) {
    margin-top: 0px;
  }
`;

export const ButtonCVText = styled.p<any>`
  position: absolute;
  line-height: 26px;
  top: 50%;
  font-size: 26px;
  font-family: "Bebas Neue", "Poppins", sans-serif;
  left: 50%;
  letter-spacing: 3px;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  color: #fff;
`;

export const ButtonText = styled.p`
  position: absolute;
  line-height: 25px;
  top: 50%;
  font-size: 18px;
  font-family: "Bebas Neue", "Bayon", "Poppins", sans-serif;
  letter-spacing: 2px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;
