import React from 'react';

const Badge = ({ status }) => {
    const badges = (currentStatus) => {
        let jsxBadge = '';
        switch (currentStatus) {
            case 'PENDING':
                jsxBadge = <span className='badge badge-primary'>Pending</span>;
                break;
            case 'ACCEPTED':
                jsxBadge = (
                    <span className='badge badge-success'>Accepted</span>
                );
                break;
            case 'REJECTED':
                jsxBadge = <span className='badge badge-danger'>Rejected</span>;
                break;
            default:
                jsxBadge = <span className='badge badge-warning'>Archive</span>;
                break;
        }
        return jsxBadge;
    };

    return badges(status);
};

export default Badge;
