import React from 'react'
import {Link} from "react-router-dom";
import '../Assets/css/style.css'
import bgLanding from '../Assets/img/bg-landing.jpg'
import { Layout, Button } from 'antd';
import {
    CaretDownOutlined
  } from '@ant-design/icons';

const { Content } = Layout;

function LandingPage(){
    return(
        <>
        <Content>
            <div className="site-layout-content">
                <img className="imgLanding" src={bgLanding} />
                    <div className="textLanding">
                        <p style={{marginTop: "60px",marginBottom: "0px", paddingLeft: "50px", fontSize: "80px", color: "white"}}>Enjoy your time</p>
                        <p style={{paddingLeft: "50px", marginBottom: "20px", fontSize: "80px", color: "white"}}>with latest <strong style={{color: "#FFB900"}}><u>MOVIE</u></strong> and <strong style={{color: "#FFB900"}}><u>GAMES</u></strong></p>
                        <Link to='/home'>
                            <Button size="large" className="btn-center" style={{color: "white", marginTop: "5%", backgroundColor: "black"}}>
                                <CaretDownOutlined/> <strong style={{marginLeft: "10px",marginRight: "10px"}}>GET STARTED</strong> <CaretDownOutlined/>
                            </Button>
                        </Link>
                    </div>
            </div>
        </Content>  
        </>
    )
}

export default LandingPage;