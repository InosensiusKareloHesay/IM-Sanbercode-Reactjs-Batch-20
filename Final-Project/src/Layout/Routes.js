import React , {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import {UserContext} from '../Context/UserContext'
import { Layout } from 'antd';
import HeaderNav from './HeaderNav'
import Footer from './FooterLayout'
import Home from '../Pages/Home';
import MovieCRUD from '../Pages/MovieCRUD';
import GamesCRUD from '../Pages/GamesCRUD';
import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ChangePassword from '../Pages/ChangePassword';
import DetailMovie from '../Pages/DetailMovie';
import DetailGames from '../Pages/DetailGames';
import GamesList from '../Pages/GamesList';
import MovieList from '../Pages/MovieList';
import CreateMovie from '../Pages/CreateMovie';
import CreateGames from '../Pages/CreateGames';
import EditMovie from '../Pages/EditMovie';
import EditGames from '../Pages/EditGames';
import SiderPage from '../Layout/SiderPage';


const Routes = () => {

    const [user] = useContext(UserContext);

    const PrivateRoute = ({...props }) => {
        if (user) {
        return <Route {...props} />;
        } else {
        return <Redirect to="/login" />;
        }
    };

    const LoginRoute = ({...props }) =>
    user ? <Redirect to="/home" /> : <Route {...props} />;

    return(
        <Layout >
            <Router>
            <HeaderNav />
                <Layout>
                    {user && (
                    <>
                        <SiderPage/>
                    </>
                    )}
                        <Layout>
                            <Switch>
                                <Route exact path ='/'>
                                    <LandingPage />
                                </Route>
                                <Route exact path ='/home'>
                                    <Home />
                                </Route>
                                <Route exact path ='/detail-movie/:id'>
                                    <DetailMovie />
                                </Route>
                                <Route exact path ='/detail-games/:id'>
                                    <DetailGames />
                                </Route>
                                <Route exact path ='/movie-list'>
                                    <MovieList />
                                </Route>
                                <Route exact path ='/games-list'>
                                    <GamesList />
                                </Route>

                                <LoginRoute exact path ='/login'>
                                
                                    <Login />
                                </LoginRoute>
                                <LoginRoute exact path ='/register'>
                                    <Register />
                                </LoginRoute>

                                <PrivateRoute exact path ='/movie-create'>
                                    <CreateMovie />
                                </PrivateRoute>
                                <PrivateRoute exact path ='/games-create'>
                                    <CreateGames />
                                </PrivateRoute>
                                <PrivateRoute exact path ='/movie-crud'>
                                    <MovieCRUD />
                                </PrivateRoute>
                                <PrivateRoute exact path ='/games-crud'>
                                    <GamesCRUD />
                                </PrivateRoute>
                                <PrivateRoute exact path ='/movie-edit/:id'>
                                    <EditMovie />
                                </PrivateRoute>
                                <PrivateRoute exact path ='/games-edit/:id'>
                                    <EditGames />
                                </PrivateRoute> 
                                <PrivateRoute exact path ='/change-password'>
                                    <ChangePassword />
                                </PrivateRoute>

                            </Switch>
                        </Layout>
                </Layout>
            <Footer />
            </Router>
        </Layout>
    )
}

export default Routes