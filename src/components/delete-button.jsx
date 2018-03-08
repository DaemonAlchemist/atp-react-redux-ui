
import React from 'react';
import {Button} from 'react-bootstrap';
import {Icon} from 'react-font-awesome-5';

export default ({onClick}) =>
    <Button bsStyle="danger" onClick={onClick} style={{position: "absolute", right: 0, top: 0}}>
        <Icon.Trash />
    </Button>;
