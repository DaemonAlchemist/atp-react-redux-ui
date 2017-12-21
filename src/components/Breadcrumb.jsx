
import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-font-awesome-5';

export default ({ data }) =>
    <div className="ts breadcrumb">
        {data.map((val, key) => (key === data.length - 1).as(lastOne => [
            <a key={`crumb${key}`} className={`${lastOne ? 'active' : ''} section`}>
                {val.link
                    ? <Link to={val.link}>{val.text}</Link>
                    : val.text
                }
            </a>,
            !lastOne && <Icon.AngleRight />
        ]))}
    </div>;
