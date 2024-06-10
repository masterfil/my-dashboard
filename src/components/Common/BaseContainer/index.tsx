import { styled } from "styled-components"

const BaseContainerStyled = styled.div`
    background-color: ${({ theme }) => theme.background};
    padding: 1rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: none; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* color of the scroll thumb when hovered */
  }

`

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.body};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`

export const BaseContainer = ({ ...props }) => {
    return (
        <BaseContainerStyled>
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
        </BaseContainerStyled>
    )
}

