import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Routes from './components/main/Routes';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './App.scss';

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({loading: false}));
    }

    render() {
        const {loading} = this.state;
        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return null; // render null when app is not ready
        }
        return (
            <div className="demo-big-content">


                <Layout style={{background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/628ee694632087.5e83b47a88717.jpg) center / cover'}}>
                    <Router basename={process.env.PUBLIC_URL}>
                        <Header className="header-color" title={<Link style={{
                            textDecoration: 'none', color: 'white', fontWeight: 600,
                            letterSpacing: 3,
                        }} to="/">MyPortfolio</Link>} scroll>
                            <Navigation>
                                <Link to="/resume">Resume</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Header>
                        {/*mobile menu*/}
                        <Drawer style={{
                            background: 'rgba(0, 0, 0, 0.7)', transitionDuration: '1s', display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%'
                        }}
                                title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">

                                    <img src="https://freesvg.org/img/anon-hacker-behind-pc.png"
                                         alt="avatar"
                                         style={{
                                             width: '100%',
                                             height: 'auto',
                                             maxWidth: '100px',
                                             margin: 'auto',
                                             display: 'flex'
                                         }}/>
                                    <h2>Yurii A.</h2>
                                </Link>}>
                            <Navigation>
                                <Link to="/resume" className="slide-menu " style={{color: 'white'}}>Resume</Link>
                                <Link to="/aboutme" className="slide-menu" style={{color: 'white'}}>About Me</Link>
                                <Link to="/projects" className="slide-menu" style={{color: 'white'}}>Projects</Link>
                                <Link to="/contact" className="slide-menu" style={{color: 'white'}}>Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content"/>
                            <Routes/>
                        </Content>
                    </Router>
                </Layout>
            </div>

        );
    }
}

const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve()));
}

export default App;
