/**
 * Created by Andy on 3/22/2017.
 */

import React from "react";
import {Tabs, Tab, Col} from "react-bootstrap";

import {selectTab, removeTab} from "atp-ui";

export default props =>
    <Tabs
        activeKey={Object.keys(props.tabPanel.$filter(tab => tab.active))[0]}
        onSelect={key => props.dispatch(selectTab(key))}
        id="tabPanel"
    >
        {props.tabPanel.$map((tab, key) =>
            <Tab
                key={key}
                eventKey={key}
                title={
                    <span>
                        {tab.title}&nbsp;&nbsp;
                        <i className="fa fa-times" onClick={() => props.dispatch(removeTab(key))} />
                    </span>
                }
            >
                <Col xs={12} style={{padding: "15px"}}>
                    {tab.controller()}
                </Col>
            </Tab>
        ).$values()}
    </Tabs>;
