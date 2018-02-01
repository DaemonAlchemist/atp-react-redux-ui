
import React from "react";
import {Field} from 'redux-form';
import {Col, Row, InputGroup, Panel} from "react-bootstrap";
import {Icon as FA} from 'react-font-awesome-5';

export default ({
    Icon, label, availableLabel, assignedLabel,
    available, assigned,
    onAssign, onUnassign,
    minHeight
}) =>
    <Panel>
        <Panel.Heading>
            <Icon /> {label}
            <div style={{float: "right", marginTop: "-2px"}}>
                <InputGroup bsSize="small">
                    <InputGroup.Addon>
                        <FA.Search />
                    </InputGroup.Addon>
                    <Field name="search" component="input" placeholder="Search" className="form-control" />
                </InputGroup>
            </div>
        </Panel.Heading>
        <Panel.Body>
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
        </Panel.Body>
    </Panel>;
