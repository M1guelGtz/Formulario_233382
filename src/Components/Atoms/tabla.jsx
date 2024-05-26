import styled from "styled-components";

const styledTable = styled.tr`
    width: 90px;
    height: 90px;
    border: 1px solid green;
`

function Tabla({text}){
    return (
        <styledTable>{text}</styledTable>
    )
}

export default Tabla