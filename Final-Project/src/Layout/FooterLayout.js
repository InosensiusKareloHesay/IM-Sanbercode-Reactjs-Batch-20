import React from "react"
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout = () =>{
  return (
    <Footer style={{height: "50px",backgroundColor:"black"}}>
      <h5 style={{color: "white", textAlign: "center", marginTop: "-5px"}}><strong>MoviGam</strong> &copy; 2020 Created by <strong>Inosensius Karelo Hesay</strong></h5>
    </Footer>
  )
}

export default FooterLayout