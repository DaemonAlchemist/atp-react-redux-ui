import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ data }) =>
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

Breadcrumb.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string
    }))
};

export default Breadcrumb;
