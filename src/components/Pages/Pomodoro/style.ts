import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.p`
  font-size: 5rem;
  font-weight: bold;
`;

export const ButtonTimer = styled.button<{ isBtnActive?: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 3rem;
  background: none;
  box-shadow: none;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0.5rem 2rem;
  margin: 0;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ isBtnActive, theme }) =>
    isBtnActive ? theme.toggleBorder : ""};
`;

export const TomatosContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
