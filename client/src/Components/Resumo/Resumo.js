import "./Resumo.css"
import ResumeItem from "../ResumeItem/ResumeItem"
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from "react-icons/fa"

export default function Resumo({income, expense, total}){
    return(
        <div className="Container">
            <ResumeItem 
                title="Entrada" 
                Icon={FaRegArrowAltCircleUp} 
                value={income}
            />
            <ResumeItem 
                title="Saidas" 
                Icon={FaRegArrowAltCircleDown}
                value={expense}
            />
            <ResumeItem 
                title="Total" 
                Icon={FaDollarSign} 
                value={total}
            />
        </div>
    )
}