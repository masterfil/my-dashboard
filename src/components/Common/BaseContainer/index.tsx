import { styled } from "styled-components"

const BaseContainerStyled = styled.div`
    background-color: ${({ theme }) => theme.body};
    padding: 1rem;
    overflow-y: auto;

`

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.background};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
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

