import React, {useContext, useEffect} from "react"
import {BookContext} from "../Context/BookContext"
import axios from 'axios';

const BukuList = () => {
    
    const [buku, setBuku,currentID, setCurrentID] = useContext(BookContext)

    useEffect( () => {
        if (buku.length == 0){
            axios.get(`http://backendexample.sanbercloud.com/api/books`)
            .then(res => {
                let data = res.data
                setBuku(data.map(el=>{
                    return {
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        review: el.review,
                        release: el.release_year,
                        page: el.totalPage,
                        price: el.price,
                        image: el.image_url
                    }
                }))
            })
        }
      },[buku])
      
    const handleEdit = (event) =>{
        let id = parseInt(event.target.value)
        setCurrentID(id)
    }

    const handleDelete = (event) => {
        let id = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/books/${id}`)
        .then(() => {
                let newData = buku.filter(el => {return el.id !== id} )
                setBuku([...newData])
        })
    }
    
    if (buku.length === 0){
        return(
            <section>
                <div id="article-list" style={{marginTop: "5%"}}>
                        <input type="text" placeholder="Search.." />
                        <button type="submit">Submit</button>
                        <h1>Daftar Buku</h1>
                        <table>
                            <thead>
                                <tr style={{border: "solid white"}}>
                                    <td width="50px" bgcolor="gray" style={{textAlign: "center"}}><strong>No</strong></td>
                                    <td width="180px" bgcolor="gray" style={{textAlign: "center"}}><strong>Title</strong></td>
                                    <td width="150px" bgcolor="gray" style={{textAlign: "center"}}><strong>Description</strong></td>
                                    <td width="150px" bgcolor="gray" style={{textAlign: "center"}}><strong>Review</strong></td>
                                    <td width="50px" bgcolor="gray" style={{textAlign: "center"}}><strong>Release Year</strong></td>
                                    <td width="50px" bgcolor="gray" style={{textAlign: "center"}}><strong>Total Page</strong></td>
                                    <td width="80px" bgcolor="gray" style={{textAlign: "center"}}><strong>Price</strong></td>
                                    <td width="80px" bgcolor="gray" style={{textAlign: "center"}}><strong>Action</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                </div>
            </section>
        )
    } else{
        return(
            <section>
                <div id="article-list" style={{marginTop: "5%"}}>
                        <input type="text" placeholder="Search.." />
                        <button type="submit">Submit</button>
                        <h1>Daftar Buku</h1>
                        <table>
                            <thead>
                                <tr style={{border: "solid white"}}>
                                    <td width="50px" bgcolor="gray" style={{textAlign: "center"}}><strong>No</strong></td>
                                    <td width="180px" bgcolor="gray" style={{textAlign: "center"}}><strong>Title</strong></td>
                                    <td width="150px" bgcolor="gray" style={{textAlign: "center"}}><strong>Description</strong></td>
                                    <td width="150px" bgcolor="gray" style={{textAlign: "center"}}><strong>Review</strong></td>
                                    <td width="50px" bgcolor="gray" style={{textAlign: "center"}}><strong>Release Year</strong></td>
                                    <td width="50px" bgcolor="gray" style={{textAlign: "center"}}><strong>Total Page</strong></td>
                                    <td width="80px" bgcolor="gray" style={{textAlign: "center"}}><strong>Price</strong></td>
                                    <td width="80px" bgcolor="gray" style={{textAlign: "center"}}><strong>Action</strong></td>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    buku.map((item,index) => {
                                        return (
                                                <tr>
                                                    <td >{index+1}</td>
                                                    <td >{item.title}</td>
                                                    <td style={{width: "50px", overflow: "hidden", textOverflow: "ellipsis"}}>{item.description}</td>
                                                    <td >{item.review}</td>
                                                    <td >{item.release}</td>
                                                    <td >{item.page}</td>
                                                    <td >{item.price}</td>
                                                    <td >
                                                        <button style={{backgroundColor: "#e6e600",color:"black"}} onClick={handleEdit} value={item.id} >Edit</button>
                                                        <button style={{backgroundColor: "#e60000",color:"white"}} onClick={handleDelete} value={item.id} >Delete</button>
                                                    </td>
                                                </tr>
                                        )
                                    })
                                }                
                                        
                            </tbody>
                        </table>
                 </div>
             </section>
         )
     }
}

export default BukuList;