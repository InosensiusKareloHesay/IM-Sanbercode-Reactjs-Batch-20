import '../Assets/css/style.css'
import React, {Component} from 'react'
import axios from 'axios';
// import "https://fonts.googleapis.com/css?family=Slabo+27px"

class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            buku: []
        }
    }

    componentDidMount(){
        axios.get(`http://backendexample.sanbercloud.com/api/books`)
        .then(res => {
            let buku = res.data.map(el => {
                return{
                    id: el.id,
                    title: el.title,
                    description: el.description,
                    review: el.review,
                    release: el.release_year,
                    page: el.totalPage,
                    price: el.price,
                    image: el.image_url
                }})
            this.setState({buku})
        })
    }

    render() {
      return (
            <section>
            <h1>Daftar Buku - Buku Pilihan</h1>
               {
                    this.state.buku.map((item)=>{
                      return(                    
                        <div id="article-list">
                                    <div className="article">
                                            <h3>{item.title}</h3>
                                            <div style={{float: "left", marginLeft:"50px",marginRight:"50px"}}>
                                                <img src={item.image} alt="Image" style={{width:"300px",height:"150px",marginRight: "5px", objectFit: "cover"}}/>
                                            </div>
                                                    <strong><p>Tahun Terbit: {item.release}</p></strong>
                                                    <strong><p>Harga: {item.price}</p></strong>
                                                    <strong><p>Jumlah Halaman: {item.page}</p></strong>
                                                <br />
                                                <br />
                                                <br />
                                                <p style={{textAlign:"justify"}}>
                                                    <strong>Deskripsi: </strong>{item.description}
                                                </p>
                                                <p><strong>Ulasan: </strong>{item.review}</p>
                                    </div>
                        </div>
                      )
                    })
                  }
        </section>
      )
    }
  }

export default Home;