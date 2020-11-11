import React, {useEffect, useState} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Routes from './screens/Routes';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './App.scss';
import Loader from "./components/loader/Loader";

const App = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <div className="demo-big-content">
            <Layout className="layoutBg ">
                <Router basename={process.env.PUBLIC_URL}>
                    <Header className="header"
                            title={<Link to="/">MyPortfolio</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    {/*mobile menu*/}
                    <Drawer className="drawer-wrapper"
                            title={<Link to="/">
                                <img src="https://freesvg.org/img/anon-hacker-behind-pc.png"
                                     alt="avatar"/>
                                <h2>Yurii A.</h2>
                            </Link>}>
                        <Navigation >
                            <Link to="/resume" className="slide-menu ">Resume</Link>
                            <Link to="/aboutme" className="slide-menu">About Me</Link>
                            <Link to="/projects" className="slide-menu">Projects</Link>
                            <Link to="/contact" className="slide-menu">Contact</Link>
                        </Navigation>
                    </Drawer>

                    <Content>

                        <div className="page-content "/>
                        {!loading
                            ? <Routes/>
                            : <Loader/>
                        }
                    </Content>
                </Router>
            </Layout>
        </div>
    );
}

export default App;
