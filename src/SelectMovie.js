import axios from "axios";
import {useState, useEffect} from "react";

export default function SelectMovie(){
    const [items, setItems] = useState([]);
    console.log(items)
    useEffect(()=>{
        const req = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        req.then(res => {setItems(res.data)});
    },[]);
    return(
        <ul>
            {items.map((item,index) => <li key={index}>{item.title}</li>)}
        </ul>
    );
}