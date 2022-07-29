import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Sessions(){
    let id = useParams().idFilme;
    id = id.slice(0,id.length - 1);
    console.log(id)
    const [sessions, setSessions] = useState({});
    useEffect(()=>{
        const req = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`);
        req.then(res => {setSessions(res.data)});
    },[]);
    console.log(sessions)

    return(null);
}