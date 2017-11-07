import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data }) =>
    <div className="ts breadcrumb">
        {data.map((val, key) => (key === data.length - 1).as(lastOne => [
            <a key={`crumb${key}`} className={`${lastOne ? 'active' : ''} section`}>
                {val.link
                    ? <Link to={val.link}>{val.text}</Link>
                    : val.text
                }
            </a>,
            !lastOne && <i className="right angle icon divider"></i>
        ]))}
    </div>;
