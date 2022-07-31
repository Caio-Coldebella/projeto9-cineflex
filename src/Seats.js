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
        <PAGE>
        <SEATSBOARD>{seats.map( seat => {return <SeatCircle set={setSelectedseats} seats={selectedseats} name={seat.name} isAvailable={seat.isAvailable}/>})}</SEATSBOARD>
        <SEATSEXAMPLE>
            <EXAMPLE>
                <CIRCLE color={"#8DD7CF"}></CIRCLE>
                Selecionado
            </EXAMPLE>
            <EXAMPLE>
                <CIRCLE color={"#C3CFD9"}></CIRCLE>
                Disponível
            </EXAMPLE>
            <EXAMPLE>
                <CIRCLE color={"#FBE192"}></CIRCLE>
                Indisponível
            </EXAMPLE>
        </SEATSEXAMPLE>
        <FORM onSubmit={sendData}>
            Nome do comprador:
            <INPUTFORM type="text" value={personName} required onChange={e => setPersonName(e.target.value)} placeholder="Digite seu nome..."/>
            CPF do comprador:
            <INPUTFORM type="text" value={cpf} required onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
            <BUTTONFORM type="submit">Reservar assento(s)</BUTTONFORM>
        </FORM>
        </PAGE>
        </>
    );
}
const PAGE = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    padding: 0 24px 0 24px;
`;

const SEATSBOARD = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    row-gap: 18px;
    column-gap: 9px;
`;
const SEATSEXAMPLE = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin: 15px 0 50px 0;
    column-gap: 30px;
`;
const EXAMPLE = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    color: #4E5A65;
    font-size: 13px;
`;
const CIRCLE = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${props => props.color};
`;
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    height: auto;
    width: 100%;
`;
const INPUTFORM = styled.input`
    height: 50px;
    width: 100%;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    margin: 3px 0 10px 0;
    ::placeholder{
        color: #AFAFAF;
        font-size: 18px;
        font-style: italic;
    }
`;
const BUTTONFORM = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 225px;
    border: none;
    border-radius: 3px;
    background-color: #E8833A;
    margin: 60px auto 0 auto;
    color: #FFFFFF;
    font-size: 18px;
`;