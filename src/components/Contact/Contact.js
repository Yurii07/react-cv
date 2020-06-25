import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import classes from './Contact.module.scss'

const Contact = () => {

    return (
        <div className={classes.contactBody}>
            <Grid className={classes.contactGrid}>
                <Cell col={5}>
                    <h2 className={classes.Name}>Adamenko Yurii</h2>
                    <img
                        src="https://freesvg.org/img/anon-hacker-behind-pc.png"
                        alt="avatar"
                        style={{height: '250px'}}
                    />
                </Cell>

                <Cell col={7}>
                    <div className={classes.contactList}>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: '#ffffff'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (063) 153-0212
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: '#ffffff'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    skyey07@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: '#ffffff'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    live:skyey07
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: '#ffffff'}}>
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

                    <div style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        <p>Drop me a line at<br/>
                        <a className={classes.contactLinks} href={`mailto:skyey07@gmail.com`}>skyey07@gmail.com</a>
                        </p>
                        <p>or call me at<br/>
                        <a className={classes.contactLinks} href={`tel:+380631530212`}>+380631530212</a>
                        </p>
                    </div>

                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;
