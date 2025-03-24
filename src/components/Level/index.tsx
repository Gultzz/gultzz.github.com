import React from "react";
import * as S from "./styles";

function Level({
  value = 0,
  onlyProgress,
}: {
  value?: number;
  onlyProgress?: boolean;
}) {
  if (onlyProgress) {
    return (
      <S.ContainerOnlyProgress>
        <S.ProgressOnly />
        <S.LinesContainer>
          {Array.from({ length: 5 }).map(() => (
            <S.Line />
          ))}
        </S.LinesContainer>
      </S.ContainerOnlyProgress>
    );
  }
  return (
    <S.Container>
      <S.Progress value={value} />
      <S.LinesContainer>
        {Array.from({ length: 9 }).map(() => (
          <S.Line />
        ))}
      </S.LinesContainer>
    </S.Container>
  );
}

export default Level;
