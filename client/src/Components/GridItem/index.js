import "./GridItem.css"
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash} from "react-icons/fa"

export default function GridItem({item, onDelete}){
    return(
        <tr className="ItemTable">
            <td className="nomeItem">{item.desc}</td>
            <td className="valorItem">{item.amount}</td>
            <td className="tipoItem">
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="green"/>
                )}
            </td>
            <td className="center">
                <FaTrash onClick={() => onDelete(item.id)}/>
            </td>
        </tr>
    )
}