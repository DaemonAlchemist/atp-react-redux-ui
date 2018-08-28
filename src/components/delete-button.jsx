
import React from 'react';
import {Button, Panel} from 'react-bootstrap';
import {Icon} from 'react-font-awesome-5';

export default ({onClick, text, message, id, isPanelVisible, showPanel, hidePanel, performAction, confirmText, cancelText, width, size}) =>
    <span style={{position: "relative"}}>
        <Button bsStyle="link" bsSize={size || null} onClick={showPanel}>
            <span className="text-danger"><Icon.Trash /> {text}</span>
        </Button>
        {isPanelVisible &&
            <Panel style={{position: "absolute", right: 0, top: "16px", width, zIndex: 9999}}>
                <Panel.Body>
                    {message}
                </Panel.Body>
                <Panel.Footer className="text-right">
                    <Button bsStyle="link" onClick={performAction}>
                        <span className="text-danger"><Icon.Trash/> {confirmText}</span>
                    </Button>
                    <Button bsStyle="link" onClick={hidePanel}>
                        <span><Icon.Times/> {cancelText}</span>
                    </Button>
                </Panel.Footer>
            </Panel>
        }
    </span>;
