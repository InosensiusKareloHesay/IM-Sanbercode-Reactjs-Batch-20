import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { Layout } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {
    useParams
  } from "react-router-dom";

const { Content } = Layout;

const DetailMovie = () => {

    let { id } = useParams();
    const [currentID, setCurrentID] = useState(null)
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        genre: "",
        rating: 0,
        duration: 0,
        year: 1000,
        review: "",
        image_url: ""
    })

    useEffect( () => {
        if (currentID === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
          .then(res => {
                let data = res.data
                setMovie({
                    title: data.title,
                    description: data.description,
                    genre: data.genre,
                    rating: data.rating,
                    duration: data.duration,
                    year: data.year,
                    review: data.review,
                    image_url: data.image_url
                })
                setCurrentID(id)
          })
        }
      }, [currentID, setCurrentID])

      const handleConvertMinute = (minute) =>{
        const jam = parseInt(minute /60)
        const menit = minute % (jam*60)
        if (jam === 0){
            return menit+" menit"
        }else{
            return jam+" jam "+menit+" menit"
        }
      }

        return(
            <Content style={{backgroundColor: "#FFB900"}}>
                <div className="site-layout-content" style={{padding: "28px 20px"}}>
                    <h1><strong>Detail Movie</strong></h1>
                    <div style={{display: "inline-block"}}>
                    {
                        <>
                        
                                <div style={{float: "left", display: "inline-block",marginRight:"20px"}}>
                                    <img src={movie.image_url} alt="Image" style={{width:"250px",height:"400px", objectFit: "cover"}}/>
                                </div>
                                <div style={{marginLeft: "50px", top: 0}}>
                                    <p style={{fontSize: "30px",marginBottom: "0px"}}><strong>{movie.title}<a style={{color: "#9c6006"}}>&nbsp;({movie.year})</a></strong></p>
                                    <p style={{fontSize: "20px",marginBottom: "0px"}}><strong>Rating : </strong> <a style={{color: "#9c6006"}}>{movie.rating}</a></p>
                                    <p style={{fontSize: "20px",marginBottom: "0px"}}><strong>Genre :</strong> <a style={{color: "#9c6006"}}>{movie.genre}</a></p>
                                    <p style={{fontSize: "20px",marginBottom: "0px",color: "#9c6006"}}><ClockCircleOutlined style={{color: "black"}}/>&nbsp;&nbsp;{handleConvertMinute(movie.duration)}</p>
                                </div>
                                <br />
                                    <p style={{fontSize: "20px",marginBottom: "0px"}}><strong>Description</strong></p>
                                    <p style={{fontSize: "15px",marginBottom: "0px",marginLeft: "20px",color: "#9c6006"}}>{movie.description}</p>
                                    <p style={{fontSize: "20px",marginBottom: "0px"}}><strong>Reviews</strong></p>
                                    <p style={{fontSize: "15px",marginBottom: "0px",marginLeft: "20px",color: "#9c6006"}}>{movie.review}</p>
                        </>
                    }
                    </div>
                </div>
            </Content>
        )

}

export default DetailMovie