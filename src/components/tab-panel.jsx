
import React from "react";
import {Tabs, Tab, Col} from "react-bootstrap";
import {o} from "atp-sugar";
import {selectTab, removeTab} from "../reducer/tab-panel";
import {Icon} from 'react-font-awesome-5';

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
                        <span onClick={() => props.dispatch(removeTab(key))}>
                            <Icon.Times />
                        </span>
                    </span>
                }
            >
                <Col xs={12} style={{padding: "15px"}}>
                    {tab.controller()}
                </Col>
            </Tab>
        ).values()}
    </Tabs>;
