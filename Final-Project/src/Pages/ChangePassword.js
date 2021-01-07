import React, { useState, useContext } from "react"
import { UserContext } from "../Context/UserContext"
import axios from "axios"
import {useHistory} from 'react-router-dom'
import { Layout , Button , Input , Form } from 'antd';
const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ChangePassword = () =>{

  let history = useHistory()
  const [user] = useContext(UserContext)
  const [input, setInput] = useState({current_password: "", new_password: "", new_confirm_password: ""})
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post(`https://backendexample.sanbersy.com/api/change-password`, {current_password: input.current_password, new_password: input.new_password, new_confirm_password: input.new_confirm_password}, {headers: {"Authorization" : `Bearer ${user.token}`}})
    .then(res => {
        alert("Success Change Password")
        setInput({current_password: "", new_password: "", new_confirm_password: ""})
        history.push('/home')
      }).catch((err)=>{
        alert("Wrong Input")
        setInput({current_password: "", new_password: "", new_confirm_password: ""})
    })

  }
  
  const handleChange = (event)=>{
    let typeOfInput = event.target.id
    let value = event.target.value
    
    if (typeOfInput === "current_password"){
      setInput({...input, current_password: value})
    }else if (typeOfInput === "new_password"){
      setInput({...input, new_password: value})
    }else if (typeOfInput === "new_confirm_password"){
      setInput({...input, new_confirm_password: value})
    }

    console.log(typeOfInput)
    console.log(value)
  }
  
    return(
      <Content style={{backgroundColor: "#FFB900"}}>
         <p style={{fontSize: "40px",textAlign: "center", marginTop: "40px"}}><strong>Change Password</strong></p>
        <div style={{backgroundColor: "#e9ab08", margin: "52px auto", width: "500px", padding: "30px", border: "5px solid #BC750B"}}>
          <Form
              {...layout}
              onFinish={handleSubmit}
            >
            <Form.Item
              label="Old Password"
              name="current_password"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input.Password onChange={handleChange}/>
            </Form.Item>

            <Form.Item
              label="New Password"
              name="new_password "
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input.Password onChange={handleChange}/>
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="new_confirm_password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password onChange={handleChange}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Save 
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    )
  }
  
  export default ChangePassword