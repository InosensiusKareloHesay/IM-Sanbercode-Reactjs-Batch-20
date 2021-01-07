import React, { useContext, useState } from "react"
import {UserContext} from "../Context/UserContext"
import {useHistory} from 'react-router-dom'
import axios from "axios"
import { Layout , Button , Input , Form } from 'antd';
const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () =>{

    let history = useHistory()
    const [, setUser] = useContext(UserContext)
    const [input, setInput] = useState({name: "", email: "" , password: ""})

    const handleSubmit = (event) =>{
      axios.post("https://backendexample.sanbersy.com/api/register", {
        name: input.name, 
        email: input.email, 
        password: input.password
      }).then(
        (res)=>{
          var user = res.data.user
          var token = res.data.token
          var currentUser = {name: user.name, email: user.email, token }
          setUser(currentUser)
          localStorage.setItem("user", JSON.stringify(currentUser))
          history.push('/home')
        }
      ).catch((err)=>{
        alert(err)
      })
    }

    const handleChange = (event) =>{
      let value = event.target.value
      let name = event.target.id
      switch (name){
        case "name":{
          setInput({...input, name: value})
          break;
        }
        case "email":{
          setInput({...input, email: value})
          break;
        }
        case "password":{
          setInput({...input, password: value})
          break;
        }
        default:{break;}
      }
    }
    
    return(
      <Content style={{backgroundColor: "#FFB900"}}>
         <p style={{fontSize: "40px",textAlign: "center", marginTop: "40px"}}><strong>Register</strong></p>
        <div style={{backgroundColor: "#e9ab08", margin: "52px auto", width: "400px", padding: "30px", border: "5px solid #BC750B"}}>
          <Form
              {...layout}
              onFinish={handleSubmit}
            >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input onChange={handleChange}/>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input onChange={handleChange}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password onChange={handleChange}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    )
  }
  
  export default Register