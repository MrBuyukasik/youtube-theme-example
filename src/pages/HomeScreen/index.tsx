import { useNavigate } from "react-router-dom";
import { ThemeType, useTheme } from "../../theme/ThemeProvider";
import * as S from "./index.styles";
const HomeScreen = () => {
  const navigate = useNavigate();
  const { changeTheme } = useTheme();
  const handleChangeTheme = () => {
    changeTheme();
  };

  return (
    <S.Wrapper>
      <S.ButtonContainer>
        <h2>First Screen</h2>
        <S.PrimaryThemeButton>Dark Theme</S.PrimaryThemeButton>
        <S.SecondaryThemeButton>Light Theme</S.SecondaryThemeButton>
        <S.NavigateButton onClick={handleChangeTheme}>
          Second Screen
        </S.NavigateButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default HomeScreen;
