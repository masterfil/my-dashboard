import { styled } from "styled-components"

const BaseContainerStyled = styled.div`
    background-color: ${({ theme }) => theme.background};
    padding: .8rem;
    overflow-y: auto;
`

const ContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.body};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.1);
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

