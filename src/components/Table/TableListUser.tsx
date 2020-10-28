import React from 'react';
import { useHistory } from 'react-router-dom';

interface TableListUserProps {
    listItem: {
        index: number,
        id: string,
        name: string,
        gender: string,
    }
}

const TableListUser: React.FC<TableListUserProps> = ({ listItem }) => {

    const history = useHistory()
    function handleRedirectToUser() {
        history.push(`/users/profile/${listItem.id}`)
    }
    return (
        <tr onClick={handleRedirectToUser} >
            <td>{listItem.index}</td>
            <td>{listItem.name}</td>
            <td>{listItem.gender}</td>
        </tr>
    )
}

export default TableListUser;