import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PageTop from "./PageTop";
import styled from "styled-components";

export default function SelectMovie(){
    const [items, setItems] = useState([]);
    console.log(items)
    useEffect(()=>{
        const req = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        req.then(res => {setItems(res.data)});
    },[]);
    return(
        <>
            <PageTop/>
            <SELECT>Selecione o Filme</SELECT>
            <CONTENT>
                {items.map((item) => {return <POSTER key={item.id} src={item.posterURL}/>})}
            </CONTENT>
        </>
    );
}

const POSTER = styled.img`
    width: 129px;
    height: 193px;
`;
const CONTENT = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: 100vw;
    column-gap: 46px;
    row-gap: 27px;
    padding: 0 38px 0 38px;
`;
const SELECT = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 24px;
    height: 110px;
    width: 100vw;
    margin-top: 67px;
`;
