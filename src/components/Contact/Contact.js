import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import classes from './Contact.module.css'

const Contact = () => {

    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={5}>
                    <h2 className={classes.Name}>Adamenko Yurii</h2>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                    />
                </Cell>

                <Cell col={7}>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (063) 153-0212
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    skyey07@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    live:skyey07
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-telegram" aria-hidden="true"/>
                                    AdamenkoYurii
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                </Cell>

                <Cell col={12}>
                    <h2>Find the right solution.</h2>
                    <h3>Contact me today !</h3>
                    <hr/>
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Drop me a line at <a href={`mailto:skyey07@gmail.com`}>skyey07@gmail.com</a> or <br/> call me at

                        <a href={`tel:+380631530212`}> +380631530212</a>
                    </p>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;
