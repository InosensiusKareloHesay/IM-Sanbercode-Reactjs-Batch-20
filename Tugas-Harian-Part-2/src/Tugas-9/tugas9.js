// Soal 1
import React, {Component} from 'react';

class Tugas9 extends Component{
    render(){
        return (
        <div style={{margin: "2% 30% 2% 30%", padding: "20px",border: "1px solid black",borderRadius: "15px"}} className="App">
            <h1 style={{textAlign: "center"}}> Form Pembelian Buah</h1>
            <form method="" action="#" >
                <label style={{marginLeft: "10px"}} for="nama"><strong>Nama Pelanggan</strong></label>
                <input style={{marginLeft: "60px"}} type="text" name="nama" id="nama" required/><br /><br />
                <input style={{marginLeft: "200px"}} type="checkbox" name="semangka" value="semangka" /> Semangka<br />
                <input style={{marginLeft: "200px"}} type="checkbox" name="jeruk" value="jeruk" /> Jeruk<br />
                <input style={{marginLeft: "200px"}} type="checkbox" name="nanas" value="nanas" /> Nanas<br />
                <input style={{marginLeft: "200px"}} type="checkbox" name="salak" value="salak" /> Salak<br />
                <label style={{marginLeft: "10px"}} for="jenisKelamin" ><strong>Daftar Item</strong></label>
                <input style={{marginLeft: "103px"}} type="checkbox" name="anggur" value="anggur" /> Anggur<br /><br />
                <input style={{marginLeft: "10px", borderRadius: "15px", fontSize: "15px"}} type="submit" value="Kirim" />
            </form>
        </div>
        )
    }
}

export default Tugas9;