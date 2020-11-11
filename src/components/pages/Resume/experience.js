import React, {useState} from 'react';
import {Grid, Cell} from 'react-mdl';
import Collapsible from "react-collapsible";
import Icon from 'react-mdl/lib/Icon';

const Experience = (props) => {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
        <Grid>
            <Cell col={12} style={{display: 'flex'}}>
                {
                    isToggled
                        ? <Icon name='keyboard_arrow_up'/>
                        : <Icon name='keyboard_arrow_down'/>
                }
                <Collapsible
                    trigger={'Technology'}
                    triggerStyle={{color: 'rgba(242,134,72, 1)', cursor: 'pointer'}}
                    lazyRender={true}
                    onTriggerOpening={toggleTrueFalse}
                    onTriggerClosing={toggleTrueFalse}
                >

                    <span>{props.css}</span>
                    <span>{props.html}</span>
                    <span>{props.flexbox}</span>
                    <span>{props.bootstrap}</span>
                    <span>{props.materialize}</span>
                    <span>{props.react}</span>
                    <span>{props.javascript}</span>
                    <span>{props.JQuery}</span>
                    <span>{props.photoshop}</span>
                    <span>{props.wordpress}</span>
                    <span>{props.laravel}</span>
                    <span>{props.gulp}</span>
                    <span>{props.webpack}</span>
                    <span>{props.git}</span>
                    <span>{props.gitlab}</span>
                    <span>{props.jira}</span>
                    <span>{props.zeplin}</span>
                    <span>{props.figma}</span>
                    <span>{props.php}</span>
                    <span>{props.restapi}</span>
                </Collapsible>
            </Cell>
        </Grid>
    )
}

export default Experience;
