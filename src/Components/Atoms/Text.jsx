import styled from "styled-components";

const TextStyled = styled.text`
    width: 50%;
`


function Text ({text}) {
    return <TextStyled>{text}</TextStyled>
}

export default Text