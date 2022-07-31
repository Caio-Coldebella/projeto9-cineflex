import styled from "styled-components";

export default function PageTop(props){
    return(
        <>
        <BAR>
            <TITLE>CINEFLEX</TITLE>
        </BAR>
        <SELECT>{props.children}</SELECT>
        </>
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
    width: 100%;
    background-color: #C3CFD9;
`;
const TITLE = styled.p`
    font-size: 34px;
    color: #E8833A;
`;
const SELECT = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #293845;
    font-size: 24px;
    height: 110px;
    width: 100vw;
    margin-top: 67px;
`;