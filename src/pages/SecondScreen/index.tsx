import { useNavigate } from "react-router-dom";
import * as S from "../HomeScreen/index.styles";
const SecondScreen = () => {
  const navigate = useNavigate();

  const handleGoSecondScreen = () => {
    navigate("/");
  };
  return (
    <S.Wrapper>
      <S.ButtonContainer>
        <h2>Second Screen</h2>
        <S.PrimaryThemeButton>Dark Theme</S.PrimaryThemeButton>
        <S.SecondaryThemeButton>Light Theme</S.SecondaryThemeButton>
        <S.NavigateButton onClick={handleGoSecondScreen}>
          First Screen
        </S.NavigateButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SecondScreen;
