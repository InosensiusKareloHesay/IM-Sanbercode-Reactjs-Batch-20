import React, {useContext, useState, useEffect} from "react"
import {BuahContext} from "./BuahContext"
import axios from 'axios';

const BuahForm = () => {
    const [input, setInput] = useState({name:"", price:0, weight:0})
    const [dataHargaBuah, setDataHargaBuah, currentID, setCurrentID] = useContext(BuahContext)
    
    useEffect( () => {
        if (currentID !== null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits/${currentID}`)
            .then(res => {
                let data = res.data
                setInput({...input,name: data.name, price: data.price, weight: data.weight})
            })
        }
      },[currentID])

    const handleSubmit = (event) =>{
        event.preventDefault()

        if (currentID === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
            .then(res => {
                let data = res.data
                setDataHargaBuah([...dataHargaBuah,{id: data.id, name: data.name, price: data.price, weight: data.weight}])
            })
        } else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${currentID}`, {name: input.name, price: input.price, weight: input.weight})
            .then(() => {
                let buah = dataHargaBuah.find(el=> el.id === currentID)
                buah.name = input.name
                buah.price = input.price
                buah.weight = input.weight
                setDataHargaBuah([...dataHargaBuah])
            })
        }
        setCurrentID(null)
        setInput({name:"", price:0, weight:0})
    }

    const handleChange = (event) =>{
        let value = event.target.value;

        if (event.target.name === "nama"){
            setInput({...input,name:value});
        }else if(event.target.name === "harga"){
            setInput({...input,price:value});
        }else if(event.target.name === "berat"){
            setInput({...input,weight:value});
        }
    }

    if (dataHargaBuah.length == 0){
        return(
            <>
            </>
        )
    } else{
        return(
            <>
                <h1 style={{textAlign: "center"}}><strong>Form Daftar Buah</strong></h1>
                    <form onSubmit={handleSubmit}>
                        <div style={{margin: "2% 20% 2% 20%", padding: "20px",border: "1px solid black"}}>
                            <label>
                                <strong>Nama Buah:</strong>
                            </label>      
                            <input style={{float: "right"}}
                                required
                                name="nama"
                                type="text"
                                value={input.name} 
                                onChange={handleChange}/>
                            <br />
                            <br />
                            <label>
                                <strong>Harga Buah:</strong>
                            </label> 
                            <input style={{float: "right"}}
                                required
                                name="harga"
                                type="number"
                                value={input.price} 
                                onChange={handleChange}/>
                            <br />
                            <br />
                            <label>
                                <strong>Berat Buah (dalam gram):</strong>
                            </label>      
                            <input style={{float: "right"}}
                                required
                                name="berat"
                                type="number"
                                value={input.weight} 
                                onChange={handleChange}/>
                            <br />
                            <br />
                            <button style={{padding: "5px", float: "right",backgroundColor: "green",color:"white"}}><strong>Submit</strong></button>
                            <br></br>
                        </div>
                    </form>
            </>
        )
    }
}

export default BuahForm