import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageTop from "./PageTop";
import SessionDay from "./SessionDay";
import PageBottom from "./PageBottom";
export default function Sessions(){
    const id = useParams().idFilme;
    const [sessions, setSessions] = useState({});
    const [days, setDays] = useState([]);
    useEffect(()=>{
        const req = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`);
        req.then(res => {setSessions(res.data);setDays(res.data.days)});
    },{});
    console.log(sessions)
    return(
        <>
        <PageTop><p>Selecione o Horário</p></PageTop>
        {days.map(day => {return <SessionDay weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>})}
        <PageBottom image={sessions.posterURL}><p>{sessions.title}</p></PageBottom>
        </>
    );
}