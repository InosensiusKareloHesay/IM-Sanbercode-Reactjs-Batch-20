import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Layout, Menu , Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import {UserContext} from '../Context/UserContext'

const { Header } = Layout;

const HeaderNav =() =>{
  
  const [user] = useContext(UserContext)

  const menu = (
    <Menu style={{backgroundColor: "#000000", fontSize: "15px", color: "white"}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="2"><Link to="/login"><strong>Login</strong></Link></Menu.Item>
      <Menu.Item key="1"><Link to="/register"><strong>Register</strong></Link></Menu.Item>
    </Menu>
  );

  return(
      <Header style={{backgroundColor: "#000000"}}>
        <Menu style={{backgroundColor: "#000000", fontSize: "15px", color: "white"}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item><Link to="/home"><strong>Home</strong></Link></Menu.Item>
              <Menu.Item><Link to="/movie-list"><strong>Movie List</strong></Link></Menu.Item>
              <Menu.Item><Link to="/games-list"><strong>Games List</strong></Link></Menu.Item>
              {user === null && (
                <>
                    <Dropdown overlay={menu}>
                        <Link style={{marginLeft: "20px", marginRight: "20px", color: "#A77822"}}className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          <strong>Menu</strong>
                          <CaretDownOutlined style={{marginLeft: "5px"}}/>
                        </Link>
                    </Dropdown>
                </>
              )}
        </Menu>
      </Header>
  )
}

export default HeaderNav