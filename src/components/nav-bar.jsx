/**
 * Created by Andy on 3/16/2017.
 */

import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {o, a} from "atp-sugar";

const bySortOrder = ((a, b) => a.sortOrder - b.sortOrder);

const navMenu = ({menu, permissions, onClick}) =>
    o(menu).values()
        .filter(item => !item.permissions || a(item.permissions).intersect(permissions).length > 0)
        .sort(bySortOrder)
        .map((item, i) => item.children
            ? <NavDropdown key={i} eventKey={i} title={item.label} id={i}>
                {o(item.children).as(subMenu => o(subMenu).values()
                    .filter(item => !item.permissions || a(item.permissions).intersect(permissions).length > 0)
                    .sort(bySortOrder)
                    .map((subItem, i2) =>
                        subItem.noAnchor
                            ? <div key={i2} style={{marginLeft: "15px"}}>{subItem.label}</div>
                            : <MenuItem key={i2} eventKey={i + i2/10} onSelect={onClick(subItem)}>
                                {subItem.label}
                              </MenuItem>

                    )
                )}
            </NavDropdown>
            : <NavItem eventKey={i} href="#" onSelect={onClick(item)}>{item.label}</NavItem>
        )

export default ({title, leftMenu, rightMenu, permissions, onClick}) =>
    <Navbar fluid={true}>
        <Navbar.Header>
            <Navbar.Brand><a href="#">{title}</a></Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                {navMenu({menu: leftMenu || {}, permissions, onClick})}
            </Nav>
            <Nav pullRight>
                {navMenu({menu: rightMenu || {}, permissions, onClick})}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
