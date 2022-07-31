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
    const [selectedseats, setSelectedseats] = useState([]);
    const [personName, setPersonName] = useState("");
    const [cpf, setCpf] = useState("");
    useEffect(()=>{
        const req = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        req.then(res => {setData(res.data); setSeats(res.data.seats)});
    },[]);
    function sendData(){
        console.log("enviou")
        return null;
    }
    return(
        <>
        <PageTop><p>Selecione o(s) assento(s)</p></PageTop>
        <SEATSBOARD>{seats.map( seat => {return <SeatCircle set={setSelectedseats} seats={selectedseats} name={seat.name} isAvailable={seat.isAvailable}></SeatCircle>})}</SEATSBOARD>
        <form onSubmit={sendData}>
            <input type="text" value={personName} required onChange={e => setPersonName(e.target.value)} placeholder="Digite seu nome..."/>
            <input type="text" value={cpf} required onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
            <button type="submit">Reservar assento(s)</button>
        </form>
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