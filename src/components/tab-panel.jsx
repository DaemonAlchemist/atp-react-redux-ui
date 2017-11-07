/**
 * Created by Andy on 3/22/2017.
 */

import React from "react";
import {Tabs, Tab, Col} from "react-bootstrap";
import {o} from "atp-sugar";
import {selectTab, removeTab} from "../reducer/tab-panel";

export default props =>
    <Tabs
        activeKey={Object.keys(o(props.tabPanel).filter(tab => tab.active).raw)[0]}
        onSelect={key => props.dispatch(selectTab(key))}
        id="tabPanel"
    >
        {o(props.tabPanel).map((tab, key) =>
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
        ).values()}
    </Tabs>;
