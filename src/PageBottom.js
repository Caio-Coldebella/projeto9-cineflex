import styled from "styled-components";

export default function PageBottom(props){
    return(
        <CONTENT>
            <IMAGE src={props.image}/>
            <WORDS>
                {props.children}
            </WORDS>
        </CONTENT>
    );
}
const CONTENT = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 117px;
    width: 100vw;
    background-color: blue;
`;
const IMAGE = styled.img`
    width: 50px;
    height: 100px;
`;
const WORDS = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;