import React, {useState} from "react";
import * as S from "./styles";
import {ReactComponent as CompanyLogo} from "../../assets/companyLogo.svg";
import {ReactComponent as EgsWhiteLogo} from "../../assets/logo-egs-white.svg";
import {ReactComponent as Info} from "../../assets/info.svg";
import Mycvpt from "../../assets/mycurriculopt.pdf";
import Mycven from "../../assets/mycurriculoen.pdf";
import {ReactComponent as InCt} from "../../assets/linkedinCertificate.svg";
import Level from "../Level";
import {useTranslation} from "react-i18next";

function Right() {
  const {t, i18n} = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  function onOverInfo() {
    setShowTooltip(true);
  }

  function onOutInfo() {
    setShowTooltip(false);
  }

  return (
    <S.Container>
      <S.ContainerCenter>
        <S.InfoGroupContainer>
          <S.InfoTitle>{t("experiences")}</S.InfoTitle>
          <S.InfoExperiencesText>
            <S.PositionData>
              <p>{t("position")}</p> <p>|</p>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {React.createElement(CompanyLogo)}
                <p>Firedev IT</p>
              </div>{" "}
              <p>|</p> <p>11/2021 - 07/2023</p>
            </S.PositionData>
            <S.InfoText>
              {t("firedevResume1")}
              <br />
              <br />
              {t("firedevResume2")}
              <br />
              <br />
              {t("firedevResume3")}
            </S.InfoText>
          </S.InfoExperiencesText>
          <S.InfoExperiencesText>
            <S.PositionData>
              <p>{t("position")}</p> <p>|</p>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {React.createElement(EgsWhiteLogo)}
                <p>EGS Sistemas</p>
              </div>{" "}
              <p>|</p> <p>10/2023 - {t("egsFinalDate")}</p>
            </S.PositionData>
            <S.InfoText>
              {t("egsResume1")}
              <br />
              <br />
              {t("egsResume2")}
              <br />
              <br />
              {t("egsResume3")}
            </S.InfoText>
          </S.InfoExperiencesText>
        </S.InfoGroupContainer>
        <S.InfoGroupContainer>
          <S.InfoTitle>{t("languages")}</S.InfoTitle>
          <S.InfoText link>
            {t("ptLanguage")}
            <br />
            {t("enLanguage")}:{" "}
            <a
              href="https://www.efset.org/cefr/b2/"
              target="_blank"
              rel="noreferrer"
            >
              B2 (CEFR)
            </a>{" "}
            - {t("enLanguageText")}
          </S.InfoText>
        </S.InfoGroupContainer>
        <S.InfoGroupContainer>
          <S.InfoTitle>{t("mainCompetences")}</S.InfoTitle>
          <S.HowWorksLevels>
            <S.HowItWorksTitleContainer>
              <S.InfoText>{t("howItWorks")}</S.InfoText>
              <div
                style={{
                  background: "#1c1c1c",
                  height: 18,
                }}
                onMouseOver={onOverInfo}
                onMouseOut={onOutInfo}
                id="info"
              >
                <div
                  id="tooltip"
                  style={{
                    display: showTooltip ? "block" : "none",
                    position: "absolute",
                    zIndex: 11,
                    margin: 0,
                    transform: `translate(-25%, ${
                      document.getElementById("info")?.offsetTop -
                        window.scrollY >
                      (window.innerWidth > 410 ? 90 : 112)
                        ? window.innerWidth > 410
                          ? "-65px"
                          : "-107px"
                        : "33px"
                    })`,
                    backgroundColor: "#3c3c3c",
                    padding: "4px 10px",
                    borderRadius: 8,
                    maxWidth: "100%",
                  }}
                >
                  <S.InfoText>
                    {t("veryBadText")}
                    <br />
                    {t("veryGoodText")}
                  </S.InfoText>
                </div>
                {React.createElement(Info, {
                  style: {
                    width: 18,
                    height: 18,
                  },
                })}
              </div>
            </S.HowItWorksTitleContainer>
            <div style={{maxWidth: 200}}>
              <S.InfoText
                style={{
                  fontSize: 12,
                  color: "#737373",
                }}
              >
                {t("veryBad")}
              </S.InfoText>
              <Level value={50} />
              <S.InfoText
                style={{
                  textAlign: "end",
                  fontSize: 12,
                  color: "#737373",
                }}
              >
                {t("veryGood")}
              </S.InfoText>
            </div>
            <div style={{display: "flex", gap: 6, alignItems: "center"}}>
              <Level onlyProgress value={50} />
              <S.InfoText style={{whiteSpace: "nowrap"}}>
                = {t("experienceLevel")}
              </S.InfoText>
            </div>
          </S.HowWorksLevels>
          <S.LevelContainer>
            <S.InfoTextLevel>
              {t("programmingLogic")} - 3.5 {t("years")}
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              ReactJS - 3 {t("years")}
              <S.InfoLink
                href="https://www.linkedin.com/in/gustavo-schultz-cruz/"
                target="_blank"
                style={{
                  height: 18,
                }}
              >
                {React.createElement(InCt, {
                  style: {
                    height: 18,
                    cursor: "pointer",
                  },
                })}
                {t("linkedinCertificate")}
              </S.InfoLink>
            </S.InfoTextLevel>
            <Level value={90} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>React Native - 3 {t("years")}</S.InfoTextLevel>
            <Level value={90} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              Javascript - 3.5 {t("years")}{" "}
              <S.InfoLink
                href="https://www.linkedin.com/in/gustavo-schultz-cruz/"
                target="_blank"
                style={{
                  height: 18,
                }}
              >
                {React.createElement(InCt, {
                  style: {
                    height: 18,
                    cursor: "pointer",
                  },
                })}
                {t("linkedinCertificate")}
              </S.InfoLink>
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Typescript - 3 {t("years")}</S.InfoTextLevel>
            <Level value={90} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>NodeJS - 1 {t("year")}</S.InfoTextLevel>
            <Level value={70} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Web Design - 3.5 {t("years")}</S.InfoTextLevel>
            <Level value={80} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Git - 3 {t("years")}</S.InfoTextLevel>
            <Level value={80} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>HTML - 3.5 {t("years")}</S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              CSS - 3.5 {t("years")}
              <S.InfoLink
                href="https://www.linkedin.com/in/gustavo-schultz-cruz/"
                target="_blank"
                style={{
                  height: 18,
                }}
              >
                {React.createElement(InCt, {
                  style: {
                    height: 18,
                    cursor: "pointer",
                  },
                })}
                {t("linkedinCertificate")}
              </S.InfoLink>
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              {t("frontendDevelopment")} - 3.5 {t("years")}
              <S.InfoLink
                href="https://www.linkedin.com/in/gustavo-schultz-cruz/"
                target="_blank"
                style={{
                  height: 18,
                }}
              >
                {React.createElement(InCt, {
                  style: {
                    height: 18,
                    cursor: "pointer",
                  },
                })}
                {t("linkedinCertificate")}
              </S.InfoLink>
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
        </S.InfoGroupContainer>
        <S.ButtonCVA
          href={i18n.language === "pt-BR" ? Mycvpt : Mycven}
          target="_blank"
        >
          <S.ButtonCVDownload>
            <S.ButtonCVText>{t("resume")}</S.ButtonCVText>
          </S.ButtonCVDownload>
        </S.ButtonCVA>
      </S.ContainerCenter>
    </S.Container>
  );
}

export default Right;
