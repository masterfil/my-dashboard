// TODO: Create a typography component
import styled from "styled-components";

export const Heading1 = styled.h1`
    color: ${({ theme }) => theme.text};
`

export const Text = styled.p`
    color: ${({ theme }) => theme.text};
    font-size: 0.875rem;
`

export const TitlePage = styled.h1`
    margin-bottom: 1rem;
`

export const DisabledText = styled.p`   
    color: gray;
`
