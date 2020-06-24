import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import classes from './projects.module.scss'

const cards = [
  {
    name: 'ALL',
    id: 0,
    urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
    title: 'Project',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
    github: '',
    codepen: '',
    livedemo: ''
  },
  {
    name: 'LATEST',
    id: 1,
    urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
    title: 'Project',
    text: 'lorem lorem',
    github: '',
    codepen: '',
    livedemo: ''
  },
  {
    name: 'FRONTEND',
    id: 2,
    urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
    title: 'Project',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
    github: '',
    codepen: '',
    livedemo: ''
  },
  {
    name: 'REACT',
    id: 3,
    urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
    title: 'Project',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
    github: '',
    codepen: '',
    livedemo: ''
  },
  {
    name: 'JS',
    id: 4,
    urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
    title: 'Project',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
    github: '',
    codepen: '',
    livedemo: ''
  }
];



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  filterCards () {}

  toggleCategories() {

    const filterCards = cards.filter(card => card.id === this.state.activeTab).map(filteredCard => (

    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >{filteredCard.title} {filteredCard.id}</CardTitle>
      <CardText>
        {filteredCard.text}
      </CardText>
      <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>CodePen</Button>
        <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
    ))

    if(this.state.activeTab === 0){
      return(
          filterCards
      )
    } else if(this.state.activeTab === 1) {
      return (
          filterCards
      )
    } else if(this.state.activeTab === 2) {
      return (
        filterCards
      )
    } else if(this.state.activeTab === 3) {
      return (
        filterCards
      )
    }
    else if(this.state.activeTab === 4) {
      return (
          filterCards
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs className={classes.tabs} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{color: '#ffffff'}}>All</Tab>
          <Tab>Latest</Tab>
          <Tab>Front-end</Tab>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">
                <div className={classes.projectsGrid}>
                {this.toggleCategories()}
                </div>
                </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
