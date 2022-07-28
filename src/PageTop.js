import styled from "styled-components";

export default function PageTop(){
    return(
        <BAR>
            <TITLE>CINEFLEX</TITLE>
        </BAR>
    );
}

const BAR = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 67px;
    width: 100vw;
    background-color: #C3CFD9;
`;
const TITLE = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    color: #E8833A;
`;