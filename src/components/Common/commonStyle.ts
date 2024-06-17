import styled from "styled-components";

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Timer = styled.div`
    font-size: 5rem;
    font-weight: bold;
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Button = styled.button<{isBtnActive?: boolean}>`
  font-size: 1rem;
  padding: 1rem 3rem;
  background: none;
  box-shadow: none;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  padding: .5rem 2rem;
  margin: 0;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ isBtnActive, theme  }) => isBtnActive ? theme.toggleBorder : ''};
`;
