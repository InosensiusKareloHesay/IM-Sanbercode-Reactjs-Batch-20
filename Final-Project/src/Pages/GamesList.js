import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Layout , Card , Row , Col } from 'antd';
import axios from 'axios';

const { Content } = Layout;
const { Meta } = Card;

class GamesList extends Component {
    constructor(props){
        super(props)
        this.state ={
            games: []
        }
    }

    componentDidMount(){
        axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        .then(res => {
            let games = res.data.map(el => {
                return{
                    id: el.id,
                    name: el.name,
                    genre: el.genre,
                    release: el.release,
                    platform: el.platform,
                    singlePlayer: el.singlePlayer,
                    multiplayer: el.multiplayer,
                    image_url: el.image_url
                }})
            this.setState({games})
        })
    }

    truncateString(str, num){
        if (str === null){
          return ""
        }else{
          if (str.length <= num) {
            return str
          }
          return str.slice(0, num) + '...'
        }
    }

    render(){
        return(
            <Content style={{backgroundColor: "#FFB900"}}>
                <div className="site-layout-content" style={{padding: "20px 50px"}}>
                    <Row gutter={16}>
                        {this.state.games.map((item)=>{
                            let url = '/detail-games/'+item.id
                            return(
                                    <Col span={6} style={{marginTop:"20px"}}>
                                        <Card
                                            hoverable
                                            style={{ width: 200 ,backgroundColor:"#BC750B"}}
                                            cover={
                                            <img alt="Games Image" src={item.image_url} style={{margin: "10px auto", width: "180px" , height: "200px"}}/>
                                            }
                                        >
                                            <Meta title={item.name} description={this.truncateString(item.platform, 20)} />
                                            <br />
                                            <Link to={url} style={{color: "white"}}>
                                                <strong>More Info...</strong>
                                            </Link>
                                        </Card>
                                    </Col>
                            )
                        })}
                    </Row>
                </div>
            </Content>
        )
    }
}

export default GamesList;