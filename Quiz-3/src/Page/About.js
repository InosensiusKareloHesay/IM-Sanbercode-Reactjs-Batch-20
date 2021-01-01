import '../Assets/css/style.css'
import React, {Component} from 'react';
// import "https://fonts.googleapis.com/css?family=Slabo+27px"

function About() {
    return (
        <section>
            <div style={{padding: "10px", border: "1px solid #ccc", marginTop: "5%"}}>
                <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong style={{width: "100px"}}>Nama:</strong> Inosensius Karelo Hesay</li> 
                    <li><strong style={{width: "100px"}}>Email:</strong> kineasimmortal1@gmail.com</li> 
                    <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows 10</li>
                    <li><strong style={{width: "100px"}}>Akun Gitlab:</strong> InosensiusKareloHesay</li> 
                    <li><strong style={{width: "100px"}}>Akun Telegram:</strong> Inosensius Karelo Hesay</li> 
                </ol>
                </div>
        </section>
    )
} 
export default About;