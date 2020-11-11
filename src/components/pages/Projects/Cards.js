import React from 'react';
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, IconButton} from "react-mdl";

const Cards = (props) => {
    // console.log(props.filtercard.name,'props')
    return (
        <Card key={props.index} shadow={5} style={{minWidth: '450', margin: '5px auto'}}>
            <CardTitle style={{
                background: `url(${props.filtercard.urlImage}) center / cover`
            }}>
                {props.filtercard.title}
            </CardTitle>
            <CardText>
                {props.filtercard.text}
            </CardText>
            <CardActions border>
                <Button colored disabled>GitHub</Button>
                <Button colored disabled>CodePen</Button>
                <Button colored
                        onClick={event => window.location.href = `${props.filtercard.urlProject}`}>Live
                    Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
    );
};

export default Cards;