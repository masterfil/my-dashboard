import { styled } from "styled-components"

const BaseContainerStyled = styled.div`
    background-color: ${({ theme }) => theme.background};
    padding: 1rem;
    overflow-y: auto;
`

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.body};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    padding: 2rem;
    box-sizing: border-box;
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

