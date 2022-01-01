import React from 'react';

const User = (props) => {
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.address}</td>
            <td>{props.user.phone}</td>
        </tr>
    );
}

export default User;
