import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
    useParams
  } from "react-router-dom";

const { Content } = Layout;

const DetailGames = () => {

    let { id } = useParams();
    const [currentID, setCurrentID] = useState(null)
    const [games, setGames] = useState({
        name: "",
        genre: "",
        release: 1000,
        platform: "",
        singlePlayer: false,
        multiplayer: true,
        image_url: ""
    })

    useEffect( () => {
        if (currentID === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
          .then(res => {
                let data = res.data
                setGames({
                    name: data.name,
                    genre: data.genre,
                    release: data.release,
                    platform: data.platform,
                    singlePlayer: data.singlePlayer,
                    multiplayer: data.multiplayer,
                    image_url: data.image_url
                })
                setCurrentID(id)
          })
        }
      }, [currentID, setCurrentID])

    const handleCekPlayer = (kondisi,cek) => {
        if(kondisi){
            if(cek==="single"){
                return <li >SinglePlayer</li>
            }else {
                return <li >MultiPlayer</li>
            }
        }
    }

    return(
        <Content style={{backgroundColor: "#FFB900"}}>
            <div className="site-layout-content" style={{padding: "28px 20px"}}>
                <h1><strong>Detail Games</strong></h1>
                <div >
                {
                    <>
                            <div style={{paddingBottom: "25px", float: "left", display: "inline-block",marginRight:"20px"}}>
                                <img src={games.image_url} alt="Image" style={{width:"250px",height:"400px", objectFit: "cover"}}/>
                            </div>
                            <div style={{marginLeft: "50px", top: 0}}>
                                <p style={{fontSize: "30px",marginBottom: "0px"}}><strong>{games.name}<a style={{color: "#9c6006"}}>&nbsp;({games.release})</a></strong></p>
                                <p style={{fontSize: "20px",marginBottom: "0px"}}><strong>Genre :</strong> <a style={{color: "#9c6006"}}>{games.genre}</a></p>
                                <br/>
                                <p style={{fontSize: "20px",marginBottom: "0px",color: "black"}}><UserOutlined style={{color: "black"}}/>&nbsp;&nbsp;Player</p>
                                <ul style={{listStylePosition: "inside",fontSize: "12px",marginBottom: "0px",color: "#9c6006"}}>
                                    {handleCekPlayer(games.singlePlayer,"single")}
                                    {handleCekPlayer(games.multiplayer,"multi")}
                                </ul>
                                <br/>
                                <p style={{fontSize: "20px",marginBottom: "0px"}}><strong>Platform</strong></p>
                                <p style={{fontSize: "12px",marginBottom: "0px",marginLeft: "20px",color: "#9c6006"}}>{games.platform}</p>
                            </div>
                    </>
                }
                </div>
            </div>
        </Content>
    )
}

export default DetailGames