import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { ReactComponent as InCt } from "../../assets/linkedinCertificate.svg";

export function LinkedinCertificate() {
  const { t } = useTranslation();

  return (
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
  );
}
