import styled from "styled-components";

export const PrimaryThemeButton = styled.button`
  background-color: ${({ theme }) => theme?.colors.primary.default};

  border-width: 0;
  color: white;
`;

export const SecondaryThemeButton = styled.button`
  background-color: ${({ theme }) => theme?.colors.secondary.default};
  border-width: 0;
  color: white;
`;

export const NavigateButton = styled.button`
  background-color: grey;
  border-width: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme?.colors.primary.dark};
  width: 100vh;
  height: 100vh;
`;
