// Soal 2
import React, {Component} from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class Buah extends Component{
    render() {
        return <td bgcolor="#db482e">{this.props.nama}</td>
    }
}

class Harga extends Component{
    render() {
        return <td bgcolor="#db482e">{this.props.harga}</td>
    }
}

class Berat extends Component{
    render() {
        return <td bgcolor="#db482e">{this.props.berat/1000} kg</td>
    }
}

class Tugas10 extends Component{
    render(){
        return (
            <div>
                <h1 style={{textAlign: "center"}}><strong>Tabel Harga Buah</strong></h1>
                <table style={{marginLeft: "auto",marginRight: "auto",marginBottom: "10%",border: "solid black"}} border="3" cellpadding="5" width="1000px">
                    <tr style={{border: "solid white"}}>
                        <td width="500px" bgcolor="gray" style={{textAlign: "center"}}><strong>Nama</strong></td>
                        <td width="250px" bgcolor="gray" style={{textAlign: "center"}}><strong>Harga</strong></td>
                        <td width="250px" bgcolor="gray" style={{textAlign: "center"}}><strong>Berat</strong></td>
                    </tr>
                    {dataHargaBuah.map(item=> {
                        return (
                            <tr style={{border: "solid white"}}>
                                <Buah nama={item.nama}/> 
                                <Harga harga={item.harga}/>
                                <Berat berat={item.berat}/>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default Tugas10;