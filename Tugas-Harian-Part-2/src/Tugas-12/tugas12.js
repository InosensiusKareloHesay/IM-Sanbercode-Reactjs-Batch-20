import React, {Component} from 'react'

class Lists extends Component{

    constructor(props){
      super(props)
      this.state ={
        dataHargaBuah: [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
        ],
        nama: "",
        harga: 0,
        berat: 0,
        currentIndex: -1
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let target = event.target
        let name = target.name
        this.setState({
            [name]: event.target.value
        });
      }
    
    handleSubmit(event){
        event.preventDefault()
        let indexSkrg = this.state.currentIndex
        let buah = this.state.dataHargaBuah
        let baru = {
            nama: this.state.nama, 
            harga: this.state.harga, 
            berat: this.state.berat
        }

        if(indexSkrg === -1){
            this.setState({
                dataHargaBuah: [...buah, baru],
                nama: "",
                harga: 0,
                berat: 0,
            })
        }else{
            buah[indexSkrg] = baru
            this.setState({
                dataHargaBuah: [...buah],
                nama: "",
                harga: 0,
                berat: 0,
                currentIndex: -1
            })
        }
    }

    handleEdit = (event) =>{
        let index = event.target.value
        let buah = this.state.dataHargaBuah[index]
        this.setState({
            nama: buah.nama,
            harga: buah.harga,
            berat: buah.berat,
            currentIndex: index
        })
      }
  
    handleDelete = (event) =>{
        let index = parseInt(event.target.value)
        let newBuah = this.state.dataHargaBuah.filter((val,idx) =>{
            return idx !== index
        })
        this.setState({
            dataHargaBuah: [...newBuah]
        })
    }

    render(){
        return(
          <>
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
                    this.state.dataHargaBuah.map((item,index)=>{
                      return(                    
                        <tr style={{border: "solid white"}}>
                            <td bgcolor="#db482e">{item.nama}</td>
                            <td bgcolor="#db482e">{item.harga}</td>
                            <td bgcolor="#db482e">{item.berat/1000} kg</td>
                            <td >
                                <button style={{float: "left", backgroundColor: "#e6e600",color:"black"}} onClick={this.handleEdit} value={index}>Edit</button>
                                <button style={{float: "right",backgroundColor: "#e60000",color:"white"}} onClick={this.handleDelete} value={index}>Delete</button>
                            </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
            {/* Form */}
            <h1 style={{textAlign: "center"}}><strong>Form Daftar Buah</strong></h1>
                <form onSubmit={this.handleSubmit}>
                    <div style={{margin: "2% 20% 2% 20%", padding: "20px",border: "1px solid black"}}>
                        <label>
                            <strong>Nama Buah:</strong>
                        </label>      
                        <input style={{float: "right"}}
                            required
                            name="nama"
                            type="text"
                            value={this.state.nama} 
                            onChange={this.handleChange}/>
                        <br />
                        <br />
                        <label>
                            <strong>Harga Buah:</strong>
                        </label> 
                        <input style={{float: "right"}}
                            required
                            name="harga"
                            type="number"
                            value={this.state.harga} 
                            onChange={this.handleChange}/>
                        <br />
                        <br />
                        <label>
                            <strong>Berat Buah (dalam gram):</strong>
                        </label>      
                        <input style={{float: "right"}}
                            required
                            name="berat"
                            type="number"
                            value={this.state.berat} 
                            onChange={this.handleChange}/>
                        <br />
                        <br />
                        <button style={{padding: "5px", float: "right",backgroundColor: "green",color:"white"}}><strong>Submit</strong></button>
                        <br></br>
                    </div>
                </form>
          </>
        )
    }
}

export default Lists;