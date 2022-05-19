import GridItem from "../GridItem"
import "./Grid.css"

export default function Grid({itens, setItens}){

    const onDelete = (ID) =>{
        const newArray = itens.filter((transaction) => transaction.id !== ID)
        setItens(newArray)
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }
    return(
        <table className="Table">
            <thead className="Thead">
                <tr className="tes">
                    <th className="GridTH W40">Descricao</th>
                    <th className="GridTH W40">Valor</th>
                    <th className="GridTH W10 Center">Tipo</th>
                </tr>
            </thead>
            <tbody>
                    {itens?.map((item, index)=>(
                            <GridItem key={index} item={item} onDelete={onDelete}/>
                        ))}
            </tbody>
        </table>
    )
}