import React, { useState , useEffect , useContext} from 'react'
import axios from "axios"
import { Form, Input, Layout, Table , Button, Space } from 'antd';
import{EditOutlined,DeleteOutlined,AudioOutlined } from '@ant-design/icons'
import {UserContext} from '../Context/UserContext'

const { Content } = Layout;
const { Search } = Input;

const MovieCRUD = () => {

    const [user] = useContext(UserContext)

    const [state, setState] =  useState({
      filteredInfo: null,
      sortedInfo: null,
    })
    const [movie, setMovie] =  useState(null)
    const [titleSearch, setTitleSearch] = useState("")
    
    useEffect( () => {
      if (movie === null){
        axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then(res => {
              let data = res.data
              const arrSementara = []
              for (let i = 0; i < data.length;i++){
                let index = i+1;
                const objSementara = {
                    no: index,
                    id: data[i].id,
                    title: data[i].title,
                    description: data[i].description,
                    genre: data[i].genre,
                    rating: data[i].rating,
                    duration: data[i].duration,
                    year: data[i].year,
                    review: data[i].review,
                    image_url: data[i].image_url
                }
                arrSementara.push(objSementara)
              }
              setMovie(arrSementara)
        })
      }
    }, [movie])

    const handleSortingFilter = (pagination, filters, sorter) => {
      setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    };

    const clearFilters = () => {
      setState({ filteredInfo: null });
    };

    const clearAll = () => {
      setState({
        filteredInfo: null,
        sortedInfo: null,
      });
    };

    const submitSearch = (e) => {
      axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then(res => {
          let data = res.data
          const arrSementara = []
          for (let i = 0; i < data.length;i++){
            let index = i+1;
            const objSementara = {
                no: index,
                id: data[i].id,
                title: data[i].title,
                description: data[i].description,
                genre: data[i].genre,
                rating: data[i].rating,
                duration: data[i].duration,
                year: data[i].year,
                review: data[i].review,
                image_url: data[i].image_url
            }
            arrSementara.push(objSementara)
          }
        
        let filMov = arrSementara.filter(x=> x.title.toLowerCase().indexOf(titleSearch.toString().toLowerCase()) !== -1)
        setMovie([...filMov])
        setTitleSearch("")
      })
    }

    const onSearch = (value) =>{
      setTitleSearch([value])
    }

    const handleDelete = (itemId) => {
      axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${itemId}`,
      {headers: {"Authorization" : `Bearer ${user.token}`}})
      .then(res => {
          let newMovie = movie.filter(el => {
            return el.id !== itemId})
        setMovie([...newMovie])
        alert("Delete Success")
      }).catch((err)=>{
        alert(JSON.stringify(err.response.data))
      })
    }

    const { sortedInfo, filteredInfo } = state;
    state.sortedInfo = sortedInfo || {};
    state.filteredInfo = filteredInfo || {};
    const columns = [
        {
          title: "No.",
          dataIndex: 'no',
          key: 'no',
          width: 60,
          sorter: (a, b) => a.no - b.no,
          sortOrder: state.sortedInfo.columnKey === 'no' && state.sortedInfo.order
        },
        {
          title: 'Image',
          dataIndex: 'image_url',
          key: 'image_url',
          width: 120,
          render: (record) => {
            return(
              <>
              <img src={record} style={{width: "80%", height: "150px", objectFit: "cover"}}/>
              </>
            )
          }
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          width: 130,
          sorter: (a, b) => a.title.length - b.title.length,
          sortOrder: state.sortedInfo.columnKey === 'title' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Genre',
          dataIndex: 'genre',
          key: 'genre',
          width: 130,
          filters: [
            { text: 'Action', value: 'Action' },
            { text: 'Adventure', value: 'Adventure' },
            { text: 'Animation', value: 'Animation' },
            { text: 'Anime', value: 'Anime' },
            { text: 'Comedy', value: 'Comedy' },
            { text: 'Drama', value: 'Drama' },
            { text: 'Horror', value: 'Horror' },
            { text: 'Inspiration', value: 'Inspiration' },
            { text: 'Romance', value: 'Romance' },
            { text: 'Sci-Fi', value: 'Sci-Fi' },
            { text: 'Thriller', value: 'Thriller' },
          ],
          filteredValue: state.filteredInfo.genre || null,
          onFilter: (value, record) => record.genre.toString().toLowerCase() === value.toString().toLowerCase(),
          sorter: (a, b) => a.genre.length - b.genre.length,
          sortOrder: state.sortedInfo.columnKey === 'genre' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          sorter: (a, b) => a.description.length - b.description.length,
          sortOrder: state.sortedInfo.columnKey === 'description' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
          width: 110,
          filters: [
            { text: '10', value: 10 },
            { text: '9', value: 9 },
            { text: '8', value: 8 },
            { text: '7', value: 7 },
            { text: '6', value: 6 },
            { text: '5', value: 5 },
            { text: '4', value: 4 },
            { text: '3', value: 3 },
            { text: '2', value: 2 },
            { text: '1', value: 1 },
            { text: '0', value: 0 },
          ],
          filteredValue: state.filteredInfo.rating || null,
          onFilter: (value, record) => record.rating === value,
          sorter: (a, b) => a.rating - b.rating,
          sortOrder: state.sortedInfo.columnKey === 'rating' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
          key: 'duration',
          width: 120,
          filters: [
            { text: '0 - 60 minute', value: 0 },
            { text: '60 - 120', value: 60 },
            { text: '120 - 180 minute', value: 120 },
            { text: '180 - 240 minute', value: 180 },
            { text: '240 - 300 minute', value: 240 },
          ],
          filteredValue: state.filteredInfo.duration || null,
          onFilter: (value, record) => record.duration >= value && record.duration <= (value+60),
          sorter: (a, b) => a.duration - b.duration,
          sortOrder: state.sortedInfo.columnKey === 'duration' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
          width: 100,
          filters: [
            { text: '2020', value: 2020 },
            { text: '2019', value: 2019 },
            { text: '2018', value: 2018 },
            { text: '2017', value: 2017 },
            { text: '2016', value: 2016 },
            { text: '2015', value: 2015 },
          ],
          filteredValue: state.filteredInfo.year || null,
          onFilter: (value, record) => record.year === value,
          sorter: (a, b) => a.year - b.year,
          sortOrder: state.sortedInfo.columnKey === 'year' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Action',
          dataIndex: 'id',
          key: 'id',
          width: 100,
          render: (record) => {
            let url = '/movie-edit/'+record
            return(
              <>
                  <Button href={url}><EditOutlined /></Button>
                  <Button onClick={()=>handleDelete(record)}><DeleteOutlined /></Button>
              </>
            )
          }
        }
      ]

    return(
        <Content style={{backgroundColor: "#FFB900"}}>
          <div style={{padding: "20px 20px 10px 20px"}}>
            <h1><strong>Movie Editor</strong></h1>
            <Space style={{ marginBottom: 16 }}>
              <Button onClick={clearFilters}>Clear filters</Button>
              <Button onClick={clearAll}>Clear filters and sorters</Button>
              <Form onFinish={submitSearch}>
                <Search 
                placeholder="Input search title.." 
                allowClear
                enterButton="Press the ENTER key to search"
                size="medium"
                onSearch={onSearch} />
              </Form>
              <Button type="primary button" href={'/movie-create'}>ADD NEW MOVIE</Button>
            </Space>
            <Table columns={columns} dataSource={movie} onChange={handleSortingFilter}/>
          </div>
        </Content>
    )
}

export default MovieCRUD;