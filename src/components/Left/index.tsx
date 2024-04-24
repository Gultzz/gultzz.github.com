import {useTranslation} from "react-i18next";
import Foto from "../../assets/foto.svg";
import Mycven from "../../assets/mycurriculoen.pdf";
import Mycvpt from "../../assets/mycurriculopt.pdf";
import * as S from "./styles";

function Left() {
  const {t, i18n} = useTranslation();
  return (
    <S.Container>
      <S.ContainerCenter>
        <S.DetailsContainer>
          <S.ApresentationContainer>
            <S.Foto
              style={{
                backgroundImage: `url(${Foto})`,
              }}
            ></S.Foto>
            <S.Name>
              <S.BackgroundName>GUSTAVO SCHULTZ</S.BackgroundName>
              GUSTAVO SCHULTZ
            </S.Name>
            <S.LanguageButtonsContainer>
              <S.LanguageButton
                active={i18n.language === "en-US"}
                onClick={() => i18n.changeLanguage("en-US")}
              >
                <S.ButtonText>English</S.ButtonText>
              </S.LanguageButton>
              <S.LanguageButton
                active={i18n.language === "pt-BR"}
                onClick={() => i18n.changeLanguage("pt-BR")}
              >
                <S.ButtonText>Português</S.ButtonText>
              </S.LanguageButton>
            </S.LanguageButtonsContainer>
            <S.PositionTitle>{t("position")}</S.PositionTitle>
            <S.PositionSkills>
              ReactJS | React Native | NextJS | JavaScript | TypeScript | NodeJS
              | NestJS | ExpressJS
            </S.PositionSkills>
          </S.ApresentationContainer>
          <S.InfoGroupContainer>
            <S.InfoTitle>{t("aboutMe")}</S.InfoTitle>
            <S.InfoText>
              {t("aboutMeText1")}
              <br />
              <br />
              {t("aboutMeText2")}
              <br />
              <br />
              {t("aboutMeText3")}
              <br />
              <br />
              {t("personality")}:{" "}
              <a
                href={
                  i18n.language === "pt-BR"
                    ? "https://www.16personalities.com/br/personalidade-istj"
                    : "https://www.16personalities.com/istj-personality"
                }
                target="_blank"
                rel="noreferrer"
              >
                ISTJ-A
              </a>
            </S.InfoText>
          </S.InfoGroupContainer>
          <S.InfoGroupContainer>
            <S.InfoTitle>{t("contact")}</S.InfoTitle>
            <S.InfoText link>
              Github:{" "}
              <a
                href="https://github.com/Gultzz"
                target="_blank"
                rel="noreferrer"
              >
                Gultzz
              </a>
              <br />
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/gustavo-schultz-cruz/"
                target="_blank"
                rel="noreferrer"
              >
                Gustavo Schultz
              </a>
              <br />
              {t("phone")}:{" "}
              <a href="tel:+5541996843725" target="_blank" rel="noreferrer">
                +55 (41) 9 9684-3725
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:gustavo.schulr@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                gustavo.schulr@gmail.com
              </a>
            </S.InfoText>
          </S.InfoGroupContainer>
        </S.DetailsContainer>
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

export default Left;
