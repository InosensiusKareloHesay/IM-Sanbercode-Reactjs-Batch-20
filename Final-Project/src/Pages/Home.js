import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import cthImg from '../Assets/img/tes.jpg'
import { Layout , Card, Col, Row, Carousel , Tabs } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;

const contentStyle = {
    height: '300px',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Home = () => {

    const [movie, setMovie] =  useState(null)
    const [games, setGames] =  useState(null)
    const [topReleaseMovie, setTopReleaseMovie] =  useState(null)
    const [topReleaseGames, setTopReleaseGames] =  useState(null)

    useEffect( () => {
        if (movie === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
          .then(res => {
                const dataMovieAll = res.data
                const topFourMovie = dataMovieAll.sort(handleCompareMovie).slice(0,4)
                setTopReleaseMovie(topFourMovie.length)
                setMovie(topFourMovie.map(el=>{ return {
                    id: el.id,
                    title: el.title,
                    description: el.description,
                    genre: el.genre,
                    rating: el.rating,
                    duration: el.duration,
                    year: el.year,
                    review: el.review,
                    image_url: el.image_url
                }
                }))
          })
        }
      }, [movie])

    useEffect( () => {
        if (games === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-game`)
          .then(res => {
                const dataGamesAll = res.data
                const topFourGames = dataGamesAll.sort(handleCompareGames).slice(0,4)
                setTopReleaseGames(topFourGames.length)
                setGames(topFourGames.map(el=>{ return {
                    id: el.id,
                    name: el.name,
                    genre: el.genre,
                    release: el.release,
                    platform: el.platform,
                    singlePlayer: el.singlePlayer,
                    multiplayer: el.multiplayer,
                    image_url: el.image_url
                }
                }))
          })
        }
      }, [games])

      const handleCompareMovie = (a, b) => {
        const bandA = a.year;
        const bandB = b.year;
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison * -1;
      }

      const handleCompareGames = (a, b) => {
        const bandA = a.release;
        const bandB = b.release;
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison * -1;
      }

      const handleTruncateString = (str, num) => {
        if (str === null){
          return ""
        }else{
          if (str.length <= num) {
            return str
          }
          return str.slice(0, num) + '...'
        }
      }

        return(
            <Content style={{backgroundColor: "#FFB900"}}>
                <div className="site-layout-content" style={{padding: "20px 50px"}}>
                    <Tabs type="card" defaultActiveKey="1" tabBarStyle={{color: 'black'}}>
                        <TabPane tab="Movie" key="1">
                            <Carousel autoplay>
                                {
                                    movie !== null && movie.map((item)=>{
                                        return(
                                            <>
                                                <div>
                                                    <img alt="example" src={item.image_url} style={{width: "100%", height: "300px", objectFit: "cover"}}/>
                                                    <p style={{fontSize:"20px",height:"50px",paddingTop: "5px",textAlign:"center", backgroundColor:"#BC750B"}}><strong>{item.title}</strong></p>
                                                </div>
                                                </>
                                        )})
                                }
                            </Carousel>
                                <h1>Top {topReleaseMovie} Latest Release Movie</h1>
                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    {movie !== null && movie.map((item)=>{
                                        let url = '/detail-movie/'+item.id
                                        return(
                                            <Col span={6}>
                                                <Card
                                                    href="/detail-movie"
                                                    // onClick='/detail-movie'
                                                    hoverable
                                                    style={{ width: 200 }}
                                                    cover={
                                                        <img alt="Movie Image" src={item.image_url} style={{margin: "10px auto", width: "180px" , height: "200px"}}/>
                                                        
                                                    }
                                                >
                                                    
                                                    <Meta title={"("+item.year+") "+item.title} description={handleTruncateString(item.description,15)} />
                                                    <br />
                                                    <Link to={url} style={{color: "#A77822"}}>
                                                        <strong>More Info...</strong>
                                                    </Link>
                                                </Card>
                                            </Col>
                                        )})
                                    }
                                </Row>
                            </div>
                        </TabPane>
                        <TabPane tab="Games" key="2">
                            <Carousel autoplay>
                                {
                                    games !== null && games.map((item)=>{
                                        return(
                                            <>
                                                <div>
                                                    <img alt="example" src={item.image_url} style={{width: "100%", height: "300px", objectFit: "cover"}}/>
                                                    <p style={{fontSize:"20px",height:"50px",paddingTop: "5px",textAlign:"center", backgroundColor:"#BC750B"}}><strong>{item.name}</strong></p>
                                                </div>
                                                </>
                                        )})
                                }
                            </Carousel>
                            
                            <h1>Top {topReleaseGames} Latest Release Games</h1>
                            
                            <div className="site-card-wrapper">
                            <Row gutter={16}>
                                    {games !== null && games.map((item)=>{
                                        let url = '/detail-games/'+item.id
                                        return(
                                            <Col span={6}>
                                                <Card
                                                    hoverable
                                                    style={{ width: 200 }}
                                                    cover={
                                                        <img alt="Movie Image" src={item.image_url} style={{margin: "10px auto", width: "180px" , height: "200px"}}/>
                                                    }
                                                >
                                                    <Meta title={"("+item.release+") "+item.name} description={handleTruncateString(item.platform,15)} />
                                                    <br />
                                                    <Link to={url} style={{color: "#A77822"}}>
                                                        <strong>More Info...</strong>
                                                    </Link>
                                                </Card>
                                            </Col>
                                        )})
                                    }
                                </Row>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        )
}

export default Home;