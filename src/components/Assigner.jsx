/**
 * Created by Andy on 4/13/2017.
 */

import React from "react";
import {Field} from 'redux-form';
import {Col, Row, InputGroup, Button, Panel} from "react-bootstrap";

export default ({
    icon, label, availableLabel, assignedLabel,
    available, assigned,
    onAssign, onUnassign,
    minHeight
}) =>
    <Panel header={
        <div>
            <i className={icon}/> {label}
            <div style={{float: "right", marginTop: "-2px"}}>
                <InputGroup bsSize="small">
                    <InputGroup.Addon>
                        <i className="fa fa-search" />
                    </InputGroup.Addon>
                    <Field name="search" component="input" placeholder="Search" className="form-control" />
                </InputGroup>
            </div>
        </div>
    }>
        <Row>
            <Col xs={6}>
                <label>{availableLabel || `Available ${label}`}</label>
                <select multiple className="form-control" style={{minHeight: minHeight || "300px"}}>
                    {available.map((item, i) =>
                        <option key={i} onClick={() => onAssign(item)}>{item.name}</option>
                    )}
                </select>
            </Col>
            <Col xs={6}>
                <label>{assignedLabel || `Assigned ${label}`}</label>
                <select multiple className="form-control" style={{minHeight: minHeight || "300px"}}>
                    {assigned.map((item, i) =>
                        <option key={i} onClick={() => onUnassign(item)}>{item.name}</option>
                    )}
                </select>
            </Col>
        </Row>
    </Panel>;
