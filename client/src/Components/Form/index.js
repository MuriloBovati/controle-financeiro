import { useState } from "react"
import "./Forms.css"
import React from "react"
import Grid from "../Grid"

export default function Form({handleAdd, transactionList,setTransactionsList}){

    const [desc, setDesc] = useState("")
    const [amount, setAmout] = useState("")
    const [isExpense, setExpense] = useState(false)

    const generateID = () => Math.random(Math.random() * 1000)

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descricao e o valor")
            return
        } else if (amount < 1){
            alert("O valor tem que ser positivo!")
            return
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        console.log(transaction)
        handleAdd(transaction)

        setAmout("")
        setDesc("")
    }


    return(
        <>
            <div className="ContainerForm">
                <div className="InputContent">
                    <label>Descrição</label>
                    <input 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="InputContent">
                    <label>Valor</label>
                    <input 
                        value={amount} 
                        type="number"
                        onChange={(e) => setAmout(e.target.value)}
                    />
                </div>
                <div className="RadioGroup">
                    <input 
                        type="radio" 
                        id="rIncome" 
                        defaultChecked
                        name="group1"
                        onChange={()=> setExpense(false)}
                    />
                    <label htmlFor="rIcome">Entrada</label>
                    <input 
                        type="radio" 
                        id="rExpenses" 
                        name="group1"
                        onChange={()=> setExpense(true)}
                    />
                    <label htmlFor="rExpenses">Saida</label>
                </div>
                <button 
                    className="Button" 
                    onClick={handleSave}>ADICIONAR</button>
            </div>
            <Grid itens={transactionList} setItens={setTransactionsList}/>
        </>
    )
}