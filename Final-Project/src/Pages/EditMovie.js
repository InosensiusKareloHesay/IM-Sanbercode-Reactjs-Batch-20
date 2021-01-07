import React, { useState , useEffect , useContext } from 'react';
import axios from 'axios'
import { Layout , Button , Input , Form , InputNumber , Rate , Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import {
    useParams,
    useHistory
  } from "react-router-dom";
import {UserContext} from '../Context/UserContext'

const { Option } = Select;
const { Content } = Layout;
const { TextArea } = Input;

const EditMovie = () => {

    const [user] = useContext(UserContext)
    const [form] = Form.useForm();
    let { id } = useParams();
    let history = useHistory();
    const [currentID, setCurrentID] = useState(null)
    const [input,setInput] = useState({
        title: "",
        description: "",
        genre: "",
        rating: 0,
        duration: 0,
        year: 1000,
        review: "",
        image_url: ""
    })

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      };
    
      const tailLayout = {
        wrapperCol: { offset: 4, span: 16 },
      };
    
      const allGenre = ['Action','Adventure','Animation','Anime','Comedy','Drama','Horror','Inspiration','Romance','Sci-Fi','Thriller'];
      const menuGenre =[]
      for (let i = 0; i < allGenre.length; i++) {
        menuGenre.push(<Option key={allGenre[i]}>{allGenre[i]}</Option>);
      }
    
    useEffect( () => {
        if (currentID === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
          .then(res => {
                let data = res.data
                setInput({
                    title: data.title,
                    description: data.description,
                    genre: data.genre,
                    rating: data.rating,
                    duration: data.duration,
                    year: data.year,
                    review: data.review,
                    image_url: data.image_url
                })
                setCurrentID(id)
                form.setFieldsValue({
                    title: data.title,
                    description: data.description,
                    genre: data.genre,
                    rating: data.rating,
                    duration: data.duration,
                    year: data.year,
                    review: data.review,
                    image_url: data.image_url
              })
          })
        }
      }, [currentID, setCurrentID])
      
    const handleSubmit = (event) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${currentID}`, {
            title: input.title,description: input.description,genre: input.genre.join(", "),rating: input.rating,duration: input.duration,year: input.year,review: input.review,image_url: input.image_url
            },{headers: {"Authorization" : `Bearer ${user.token}`}})
            .then(() => {
                setCurrentID(null)
                setInput({title: "",
                description: "",
                genre: "",
                rating: 0,
                duration: 0,
                year: 1000,
                review: "",
                image_url: ""})
                history.push('/movie-crud')
            })
            setCurrentID(null)
    }

    const handleChange = (event) => {
        let value = event.target.value

        if (event.target.id === "title"){
            setInput({...input,title:value});
        }else if(event.target.id === "description"){
            setInput({...input,description:value});
        }else if(event.target.id === "review"){
            setInput({...input,review:value});
        }else if(event.target.id === "image_url"){
            setInput({...input,image_url:value});
        }
    }

    const handleChangeGenre = (event) => {
        setInput({...input,genre:event});
    }

    const handleChangeRating = (event) => {
        setInput({...input,rating:event});
    }
    
    const handleChangeDuration = (event) => {
        setInput({...input,duration:event});
    }

    const handleChangeYear = (event) => {
        setInput({...input,year:event});
    }

    return(
        
        <Content style={{backgroundColor: "#FFB900"}}>
            <div style={{padding: "20px"}}>
                <p style={{fontSize: "20px", float:"left"}}><PlusSquareOutlined />&nbsp;&nbsp;<strong>Edit Movie</strong></p>
                <div style={{backgroundColor: "#e9ab08",margin: "50px auto", width: "1200px",height: "650px", padding: "38px", border: "5px solid #BC750B"}}>
                    <Form
                        form={form}
                        {...layout}
                        onFinish={handleSubmit}
                        >
                        <Form.Item
                        label="Movie Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input movie title!' }]}
                        >
                        <Input placeholder="Input movie title..." onChange={handleChange}/>
                            
                        </Form.Item>

                        <Form.Item
                        label="Description"
                        name="description"
                        
                        rules={[{ required: true, message: 'Please input a description!' }]}
                        >
                        <TextArea placeholder="Description..." rows={3} onChange={handleChange}/>
                        </Form.Item>

                        <Form.Item
                        label="Genre"
                        name="genre"
                        rules={[{ required: true, message: 'Please input a genre!' }]}
                        >
                        <Select
                            mode="multiple"
                            name="genre"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Select movie genre..."
                            onChange={handleChangeGenre}
                            >
                            {menuGenre}
                        </Select>
                        </Form.Item>

                        <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input a rating!' }]}
                        >
                        <Rate name="rating" style={{color: "#BC750B"}} count="10" onChange={handleChangeRating}/>
                        </Form.Item>

                        <Form.Item
                        label="Duration (In Minutes)"
                        name="duration"
                        rules={[{ required: true, message: 'Please input a movie duration!' }]}
                        >
                        <InputNumber name="duration" min={0} max={1000000} defaultValue={1} onChange={handleChangeDuration}/>
                        </Form.Item>

                        <Form.Item
                        label="Release Year"
                        name="year"
                        rules={[{ required: true, message: 'Please input a release year!' }]}
                        >
                        <InputNumber name="year" min={1000} max={2100} defaultValue={1000} onChange={handleChangeYear}/>
                        </Form.Item>

                        <Form.Item
                        label="Review"
                        name="review"
                        rules={[{ required: true, message: 'Please input a review!' }]}
                        >
                        <TextArea placeholder="Review..." rows={3} onChange={handleChange}/>
                        </Form.Item>

                        <Form.Item
                        label="Image Url"
                        name="image_url"
                        rules={[{ required: true, message: 'Please input an image url!' }]}
                        >
                        <Input placeholder="Image Url..." onChange={handleChange}/>
                        </Form.Item>
                        
                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </Content>
    )
}

export default EditMovie