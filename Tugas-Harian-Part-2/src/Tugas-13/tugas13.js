import React, { useState , useEffect } from 'react';
import axios from 'axios';

const Lists = () =>{
    const [dataHargaBuah, setDataHargaBuah] =  useState(null)
    const [InNama, setInputNama]  =  useState("")
    const [InHarga, setInputHarga]  =  useState(0)
    const [InBerat, setInputBerat]  =  useState(0)
    const [currentID, setCurrentID] =  useState(null)

    useEffect( () => {
        if (dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                let data = res.data
                setDataHargaBuah(data.map(el=>{
                    return {id: el.id, name: el.name, price: el.price, weight: el.weight}
                }))
            })
        }
      },[dataHargaBuah])
    
    const handleSubmit = (event) =>{
        console.log(event)
        event.preventDefault()
        
        if (currentID === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: InNama, price: InHarga, weight: InBerat})
            .then(res => {
                let data = res.data
                setDataHargaBuah([...dataHargaBuah,{id: data.id, name: data.name, price: data.price, weight: data.weight}])
            })
        } else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${currentID}`, {name: InNama, price: InHarga, weight: InBerat})
            .then(() => {
                let buah = dataHargaBuah.find(el=> el.id === currentID)
                buah.name = InNama
                buah.price = InHarga
                buah.weight = InBerat
                setDataHargaBuah([...dataHargaBuah])
            })
        }
        setCurrentID(null)
        setInputNama("")
        setInputHarga(0)
        setInputBerat(0)
    }

    const handleChange = (event) =>{
        if (event.target.name === "nama"){
            setInputNama(event.target.value);
        }else if(event.target.name === "harga"){
            setInputHarga(event.target.value);
        }else if(event.target.name === "berat"){
            setInputBerat(event.target.value);
        }
    }

    const handleEdit = (event) =>{
        let id = parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                let data = res.data
                setInputNama(data.name)
                setInputHarga(data.price)
                setInputBerat(data.weight)
                setCurrentID(data.id)
        })
    }

    const handleDelete = (event) => {
        let id = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
        .then(() => {
                let newData = dataHargaBuah.filter(el => {return el.id !== id} )
                setDataHargaBuah([...newData])
        })
    }

    return(
        <div style={{marginTop: "10%"}}>
            { dataHargaBuah !== null &&
                (<>
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
                            dataHargaBuah.map((item, index)=>{
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
                    {/* Form */}
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
                                        value={InNama} 
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
                                        value={InHarga} 
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
                                        value={InBerat} 
                                        onChange={handleChange}/>
                                    <br />
                                    <br />
                                    <button style={{padding: "5px", float: "right",backgroundColor: "green",color:"white"}}><strong>Submit</strong></button>
                                    <br></br>
                                </div>
                            </form>
                </>)
            }
        </div>
    )
}

export default Lists;