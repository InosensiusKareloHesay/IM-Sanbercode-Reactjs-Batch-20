import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{margin: "10% 30% 0px 30%", padding: "20px",border: "1px solid black",borderRadius: "15px"}} className="App">
      <h1 style={{textAlign: "center"}}> Form Pembelian Buah</h1>
      {/* <a style={{textAlign: "right",margin: "10px"}}><strong>Nama Pelanggan</strong></a> */}
      <form method="post" action="#" >
          <label style={{marginLeft: "10px"}} for="nama"><strong>Nama Pelanggan</strong></label>
          <input style={{marginLeft: "60px"}} type="text" name="nama" id="nama" /><br /><br />
          <input style={{marginLeft: "200px"}} type="checkbox" name="semangka" value="semangka" required /> Semangka<br />
          <input style={{marginLeft: "200px"}} type="checkbox" name="jeruk" value="jeruk" required /> Jeruk<br />
          <input style={{marginLeft: "200px"}} type="checkbox" name="nanas" value="nanas" required /> Nanas<br />
          <input style={{marginLeft: "200px"}} type="checkbox" name="salak" value="salak" required /> Salak<br />
          <label style={{marginLeft: "10px"}} for="jenisKelamin" ><strong>Daftar Item</strong></label>
          <input style={{marginLeft: "103px"}} type="checkbox" name="anggur" value="anggur" required /> Anggur<br /><br />
          <input style={{marginLeft: "10px", borderRadius: "15px", fontSize: "15px"}} type="submit" value="Kirim" />
      </form>
    </div>
  );
}

export default App;
