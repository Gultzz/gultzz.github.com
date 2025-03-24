import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  width: 334px;
  overflow-y: scroll;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  border-right: 1px solid #464646;
  @media screen and (max-width: 900px) {
    position: initial;
    left: none;
    top: none;
    border-right: none;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 632px;
  @media screen and (max-width: 900px) {
    margin: 0 26px;
  }
`;

export const ApresentationContainer = styled.div``;

export const Foto = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 179px;
  max-width: 244px;
`;

export const Name = styled.h1`
  position: relative;
  margin-top: 38px;
  font-size: 40px;
  line-height: 36px;
  font-family: "Bayon", "Bebas Neue", "Poppins", sans-serif;
  color: #0000;
  -webkit-text-stroke: 1px #fff;
  letter-spacing: 8.5%;
  z-index: 1;
`;
export const BackgroundName = styled.h1`
  position: absolute;
  font-size: 40px;
  line-height: 36px;
  font-family: "Bayon", "Bebas Neue", "Poppins", sans-serif;
  color: #0000;
  -webkit-text-stroke: 1px #fff;
  letter-spacing: 8.5%;
  opacity: 50%;
  filter: blur(4px);
`;

export const LanguageButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

export const LanguageButton = styled.button<any>`
  cursor: pointer;
  position: relative;
  background-color: ${({ active }) => (active ? "#121212" : "#383838")};
  width: 132px;
  border-radius: 999px;
  height: 28px;
  border: 2px solid ${({ active }) => (active ? "#fff" : "#383838")};
`;

export const ButtonCVA = styled.a`
  display: block;
  @media screen and (max-width: 900px) {
    display: none;
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

export const PositionTitle = styled.p`
  margin-top: 30px;
  font-family: "Bayon", "Poppins", sans-serif;
  font-size: 28px;
  line-height: 33px;
`;

export const PositionSkills = styled.h2`
  margin-top: 10px;
  font-family: "Bayon", "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 16.5px;
`;

export const SeparatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const InfoGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
