import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PageTop from "./PageTop";
import styled from "styled-components";

export default function SelectMovie(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const req = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        req.then(res => {setMovies(res.data)});
    },[]);
    return(
        <>
            <PageTop/>
            <SELECT>Selecione o Filme</SELECT>
            <CONTENT>
                {movies.map((item) => {return <Link key={item.id} to={`/sessoes/${item.id}}`}><POSTER src={item.posterURL}/></Link>})}
            </CONTENT>
        </>
    );
}

const POSTER = styled.img`
    width: 129px;
    height: 193px;
    margin-bottom: 27px;
`;
const CONTENT = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: 100vw;
    column-gap: 46px;
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
