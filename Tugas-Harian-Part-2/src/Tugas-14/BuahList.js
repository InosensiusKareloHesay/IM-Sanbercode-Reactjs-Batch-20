import React, {useContext, useEffect, useState} from "react"
import {BuahContext} from "./BuahContext"
import axios from 'axios';

const BuahList = () =>{
  const [buah, setBuah, currentID, setCurrentID] = useContext(BuahContext)

  useEffect( () => {
    if (buah.length == 0){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
            let data = res.data
            setBuah(data.map(el=>{
                return {id: el.id, name: el.name, price: el.price, weight: el.weight}
            }))
        })
    }
  },[buah])

    const handleEdit = (event) =>{
        let id = parseInt(event.target.value)
        setCurrentID(id)
    }

    const handleDelete = (event) => {
        let id = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
        .then(() => {
                let newData = buah.filter(el => {return el.id !== id} )
                setBuah([...newData])
        })
    }

    if (buah.length === 0){
        return(
            <>
            </>
        )
    } else{
        return(
            <div style={{marginTop: "10%"}}>
            <h1 style={{textAlign: "center"}}><strong>Tabel Harga Buah</strong></h1>
                <table style={{marginLeft: "auto",marginRight: "auto",marginBottom: "5%",border: "solid black"}} border="3" cellpadding="5" width="1000px">
                    <thead>
                        <tr style={{border: "solid white"}}>
                            <td width="350px" bgcolor="gray" style={{textAlign: "center"}}><strong>Nama</strong></td>
                            <td width="250px" bgcolor="gray" style={{textAlign: "center"}}><strong>Harga</strong></td>
                            <td width="250px" bgcolor="gray" style={{textAlign: "center"}}><strong>Berat</strong></td>
                            <td width="100px" bgcolor="gray" style={{textAlign: "center"}}><strong>Action</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        buah.map((item)=>{
                            return(                    
                                <tr style={{border: "solid white"}}>
                                    <td bgcolor="#db482e">{item.name}</td>
                                    <td bgcolor="#db482e">{item.price}</td>
                                    <td bgcolor="#db482e">{item.weight/1000} kg</td>
                                    <td >
                                        <button style={{float: "left", backgroundColor: "#e6e600",color:"black"}} onClick={handleEdit} value={item.id}>Edit</button>
                                        <button style={{float: "right",backgroundColor: "#e60000",color:"white"}} onClick={handleDelete} value={item.id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BuahList