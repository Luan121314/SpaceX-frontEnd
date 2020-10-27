import React from 'react';
import { useHistory } from 'react-router-dom';

interface TableListUserProps {
    listItem: {
        indice: number,
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
            <td>{listItem.indice}</td>
            <td>{listItem.name}</td>
            <td>{listItem.gender}</td>
        </tr>
    )
}

export default TableListUser;