import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageTop from "./PageTop";
import SeatCircle from "./SeatCircle";
import styled from "styled-components";

export default function Seats(){
    const params = useParams();
    console.log(params)
    const [data, setData] = useState({});
    const [seats, setSeats] = useState([]);
    useEffect(()=>{
        const req = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        req.then(res => {setData(res.data); setSeats(res.data.seats)});
    },[]);
    console.log(seats)
    return(
        <>
        <PageTop><p>Selecione o(s) assento(s)</p></PageTop>
        <SEATSBOARD>{seats.map( seat => {return <SeatCircle name={seat.name} isAvailable={seat.isAvailable}></SeatCircle>})}</SEATSBOARD>
        </>
    );
}

const SEATSBOARD = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    row-gap: 18px;
    column-gap: 9px;
    margin: 0 24px 0 24px;
`;