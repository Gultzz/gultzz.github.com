import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as CompanyLogo } from "../../assets/companyLogo.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as InCt } from "../../assets/linkedinCertificate.svg";
import { ReactComponent as EgsWhiteLogo } from "../../assets/logo-egs-white.svg";
import Mycven from "../../assets/mycurriculoen.pdf";
import Mycvpt from "../../assets/mycurriculopt.pdf";
import Level from "../Level";
import * as S from "./styles";
import { LinkedinCertificate } from "./LinkedinCertificate.component";

function Right() {
  const { t, i18n } = useTranslation();
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
              <p>{t("firedevPosition")}</p> <p>|</p>{" "}
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
            <S.InfoText
              dangerouslySetInnerHTML={{ __html: t("firedevResume") }}
            ></S.InfoText>
          </S.InfoExperiencesText>
          <S.InfoExperiencesText>
            <S.PositionData>
              <p>{t("egsPosition")}</p> <p>|</p>{" "}
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
              <p>|</p> <p>10/2023 - 05/2025</p>
            </S.PositionData>
            <S.InfoText
              dangerouslySetInnerHTML={{ __html: t("egsResume") }}
            ></S.InfoText>
          </S.InfoExperiencesText>
        </S.InfoGroupContainer>
        <S.InfoGroupContainer>
          <S.InfoTitle>{t("languages")}</S.InfoTitle>
          <S.InfoText link>
            {t("ptLanguage")}
            <br />
            {t("enLanguage")}:{" "}
            <a
              href="https://cert.efset.org/5JSjLm"
              target="_blank"
              rel="noreferrer"
            >
              B2 {i18n.language === "pt-BR" ? "(CERTIFICADO)" : "(CERTIFICATE)"}
            </a>
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
            <div style={{ maxWidth: 200 }}>
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
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Level onlyProgress value={50} />
              <S.InfoText style={{ whiteSpace: "nowrap" }}>
                = {t("experienceLevel")}
              </S.InfoText>
            </div>
          </S.HowWorksLevels>

          <S.LevelContainer>
            <S.InfoTextLevel>
              {t("programmingLogic")} - 5.5 {t("years")}
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              ReactJS - 5 {t("years")}
              <LinkedinCertificate />
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>React Native - 5 {t("years")}</S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              Javascript - 5 {t("years")}
              <LinkedinCertificate />
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Typescript - 5 {t("years")}</S.InfoTextLevel>
            <Level value={90} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Node - 3 {t("years")}</S.InfoTextLevel>
            <Level value={70} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Nest - 2 {t("years")}</S.InfoTextLevel>
            <Level value={70} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>C# - 2 {t("years")}</S.InfoTextLevel>
            <Level value={60} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>AngularJS - 1.5 {t("years")}</S.InfoTextLevel>
            <Level value={80} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Angular - 1 {t("year")}</S.InfoTextLevel>
            <Level value={80} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Express - 2 {t("years")}</S.InfoTextLevel>
            <Level value={70} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Web Design - 5 {t("years")}</S.InfoTextLevel>
            <Level value={80} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>Git - 5 {t("years")}</S.InfoTextLevel>
            <Level value={80} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>HTML - 5.5 {t("years")}</S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              CSS - 5.5 {t("years")}
              <LinkedinCertificate />
            </S.InfoTextLevel>
            <Level value={100} />
          </S.LevelContainer>
          <S.LevelContainer>
            <S.InfoTextLevel>
              {t("frontendDevelopment")} - 5 {t("years")}
              <LinkedinCertificate />
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
