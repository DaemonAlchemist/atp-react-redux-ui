/**
 * Created by Andy on 3/16/2017.
 */

import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

const bySortOrder = ((a, b) => a.sortOrder - b.sortOrder);

const navMenu = props =>
    props.menu.$values()
        .filter(item => !item.permissions || item.permissions.$intersect(props.permissions).length > 0)
        .sort(bySortOrder)
        .map((item, i) => item.children
            ? <NavDropdown key={i} eventKey={i} title={item.label} id={i}>
                {item.children.$as(subMenu => subMenu.$values()
                    .filter(item => !item.permissions || item.permissions.$intersect(props.permissions).length > 0)
                    .sort(bySortOrder)
                    .map((subItem, i2) =>
                        <MenuItem key={i2} eventKey={i + i2/10} onSelect={() => subItem.onClick(props.dispatch)}>
                            {subItem.label}
                        </MenuItem>
                    )
                )}
            </NavDropdown>
            : <NavItem eventKey={i} href="#" onSelect={item.onClick(props.dispatch)}>{item.label}</NavItem>
        )

export default props =>
    <Navbar fluid={true}>
        <Navbar.Header>
            <Navbar.Brand><a href="#">{props.title}</a></Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                {navMenu({menu: props.leftMenu || {}, permissions: props.permissions, dispatch: props.dispatch})}
            </Nav>
            <Nav pullRight>
                {navMenu({menu: props.rightMenu || {}, permissions: props.permissions, dispatch: props.dispatch})}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
