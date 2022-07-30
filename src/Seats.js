import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageTop from "./PageTop";

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
        </>
    );
}