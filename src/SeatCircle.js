import { useState } from "react";
import styled from "styled-components";

export default function SeatCircle(props){
    const [sel, setSel] = useState(false);
    return(
        <CIRCLE available={props.isAvailable} selected={sel} onClick={() => {setSel(!sel)}}>{props.name}</CIRCLE>
    );
}
const colornotaval = "#FBE192";
const colornotsel = "#C3CFD9";
const colorsel = "#8DD7CF";
const CIRCLE = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${props => {
        if(props.available){
            if(props.selected){
                return colorsel;
            }
            return colornotsel;
        }
        return colornotaval;
    }};
`;