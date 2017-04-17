/**
 * Created by Andy on 4/13/2017.
 */

import React from "react";
import {Col, Row} from "react-bootstrap";
import {a} from "atp-sugar";

const Assigner = props =>
    <Row>
        <Col xs={5}>
            <label>Available</label>
            <select multiple className="form-control" style={{minHeight: "300px"}}>
                {a(props.available.filter(a => props.assigned.filter(b => b.id === a.id).length === 0))
                    .sortBy("name")
                    .map((item, i) =>
                        <option key={i} onClick={() => props.onAssign(item)}>{item.name}</option>
                    )
                }
            </select>
        </Col>
        <Col xs={1} style={{textAlign: "center", height: "100%"}}>
            <i className="fa fa-exchange fa-2x" style={{verticalAlign: "middle"}}/>
        </Col>
        <Col xs={5}>
            <label>Assigned</label>
            <select multiple className="form-control" style={{minHeight: "300px"}}>
                {a(props.available.filter(a => props.assigned.filter(b => b.id === a.id).length !== 0))
                    .sortBy("name")
                    .map((item, i) =>
                        <option key={i} onClick={() => props.onUnassign(item)}>{item.name}</option>
                    )
                }
            </select>
        </Col>
    </Row>;

export default Assigner;