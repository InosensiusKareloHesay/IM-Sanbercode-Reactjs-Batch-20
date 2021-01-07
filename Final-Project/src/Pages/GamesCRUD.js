import React, { useState , useEffect , useContext} from 'react'
import axios from "axios"
import { Form, Input, Layout, Table , Button, Space } from 'antd';
import{EditOutlined,DeleteOutlined,AudioOutlined } from '@ant-design/icons'
import {UserContext} from '../Context/UserContext'

const { Content } = Layout;
const { Search } = Input;

const GamesCRUD = () => {

  const [user] = useContext(UserContext)
  const [state, setState] =  useState({
    filteredInfo: null,
    sortedInfo: null
  })

  const [games, setGames] =  useState(null)
  const [nameSearch, setNameSearch] = useState("")

  useEffect( () => {
    if (games === null){
      axios.get(`https://backendexample.sanbersy.com/api/data-game`)
      .then(res => {
            let data = res.data
            const arrSementara = []
            for (let i = 0; i < data.length;i++){
              let index = i+1;
              const objSementara = {
                  no: index,
                  id: data[i].id,
                  name: data[i].name,
                  genre: data[i].genre,
                  release: data[i].release,
                  platform: data[i].platform,
                  singlePlayer: data[i].singlePlayer,
                  multiplayer: data[i].multiplayer,
                  image_url: data[i].image_url
              }
              arrSementara.push(objSementara)
            }
            setGames(arrSementara)
      })
    }
  }, [games])

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
    axios.get(`https://backendexample.sanbersy.com/api/data-game`)
    .then(res => {
        let data = res.data
        const arrSementara = []
        for (let i = 0; i < data.length;i++){
          let index = i+1;
          const objSementara = {
            no: index,
            id: data[i].id,
            name: data[i].name,
            genre: data[i].genre,
            release: data[i].release,
            platform: data[i].platform,
            singlePlayer: data[i].singlePlayer,
            multiplayer: data[i].multiplayer,
            image_url: data[i].image_url
          }
          arrSementara.push(objSementara)
        }
      
      let filGam = arrSementara.filter(x=> x.name.toLowerCase().indexOf(nameSearch.toString().toLowerCase()) !== -1)
      setGames([...filGam])
      setNameSearch("")
    })
  }

  const onSearch = (value) =>{
    setNameSearch([value])
  }

  const handleDelete = (itemId) => {
    axios.delete(`https://backendexample.sanbersy.com/api/data-game/${itemId}`
    ,{headers: {"Authorization" : `Bearer ${user.token}`}})
    .then(res => {
        let newGames = games.filter(el => {
          return el.id !== itemId})
      setGames([...newGames])
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
              <img src={record} style={{width: "100%", height: "150", objectFit: "cover"}}/>
              </>
            )
          }
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 130,
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: state.sortedInfo.columnKey === 'name' && state.sortedInfo.order,
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
            { text: 'Horor', value: 'Horor' },
            { text: 'Third-person shooter', value: 'Third-person shooter' },
            { text: 'Battle Royale', value: 'Battle Royale' },
            { text: 'Sport', value: 'Sport' },
          ],
          filteredValue: state.filteredInfo.genre || null,
          onFilter: (value, record) => record.genre.toString().toLowerCase() === value.toString().toLowerCase(),
          sorter: (a, b) => a.genre.length - b.genre.length,
          sortOrder: state.sortedInfo.columnKey === 'genre' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Release',
          dataIndex: 'release',
          key: 'release',
          width: 130,
          filters: [
            { text: '2020', value: 2020 },
            { text: '2019', value: 2019 },
            { text: '2018', value: 2018 },
            { text: '2017', value: 2017 },
            { text: '2016', value: 2016 },
            { text: '2015', value: 2015 },
          ],
          filteredValue: state.filteredInfo.release || null,
          onFilter: (value, record) => record.release == value,
          sorter: (a, b) => a.release - b.release,
          sortOrder: state.sortedInfo.columnKey === 'release' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Platform',
          dataIndex: 'platform',
          key: 'platform',
          width: 130,
          filters: [
            { text: 'Nintendo', value: 'Nintendo' },
            { text: 'Sega', value: 'Sega' },
            { text: 'PC', value: 'PC' },
            { text: 'Xbox', value: 'Xbox' },
            { text: 'Xbox One', value: 'Xbox One' },
            { text: 'Xbox 360', value: 'Xbox 360' },
            { text: 'Xbox Series X', value: 'Xbox Series X' },
            { text: 'Playstation 4', value: 'Playstation 4' },
            { text: 'Playstation 3', value: 'Playstation 3' },
            { text: 'Playstation', value: 'Playstation' },
            { text: 'Windows', value: 'Windows' },
            { text: 'Linus', value: 'Linus' },
            { text: 'IOS', value: 'IOS' },
          ],
          filteredValue: state.filteredInfo.platform || null,
          onFilter: (value, record) => record.platform.toString().toLowerCase() === value.toString().toLowerCase(),
          sorter: (a, b) => a.platform.length - b.platform.length,
          sortOrder: state.sortedInfo.columnKey === 'platform' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'SP',
          dataIndex: 'singlePlayer',
          key: 'singlePlayer',
          width: 80,
          filters: [
            { text: 'Bisa Singleplayer', value: true },
            { text: 'Tidak Bisa', value: false },
          ],
          filteredValue: state.filteredInfo.singlePlayer || null,
          onFilter: (value, record) => record.singlePlayer == value,
          sorter: (a, b) => a.singlePlayer - b.singlePlayer,
          sortOrder: state.sortedInfo.columnKey === 'singlePlayer' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'MP',
          dataIndex: 'multiplayer',
          key: 'multiplayer',
          width: 80,
          filters: [
            { text: 'Bisa Multiplayer', value: true },
            { text: 'Tidak Bisa', value: false },
          ],
          filteredValue: state.filteredInfo.multiplayer || null,
          onFilter: (value, record) => record.multiplayer == value,
          sorter: (a, b) => a.multiplayer - b.multiplayer,
          sortOrder: state.sortedInfo.columnKey === 'multiplayer' && state.sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Action',
          dataIndex: 'id',
          key: 'id',
          width: 100,
          render: (record) => {
            let url = '/games-edit/'+record
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
            <h1><strong>Games Editor</strong></h1>
            <Space style={{ marginBottom: 16 }}>
              <Button onClick={clearFilters}>Clear filters</Button>
              <Button onClick={clearAll}>Clear filters and sorters</Button>
              <Form onFinish={submitSearch}>
                <Search 
                placeholder="Input search name.." 
                allowClear
                enterButton="Press the ENTER key to search"
                size="medium"
                onSearch={onSearch} />
              </Form>
              <Button type="primary button" href={'/games-create'}>ADD NEW GAMES</Button>
            </Space>
            <Table columns={columns} dataSource={games} onChange={handleSortingFilter}/>
          </div>
        </Content>
    )
}

export default GamesCRUD;