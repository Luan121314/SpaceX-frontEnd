import React from 'react';
import { useHistory } from 'react-router-dom';

interface TableListUserProps {
    listItem: {
        index: number,
        id:string,
        title: string,
        publicationDate: string
    }
}


const TableListUser: React.FC<TableListUserProps> = ({ listItem }) => {

    const history = useHistory()
    function handleRedirectToNotice(){
        history.push(`/notices/notice/${listItem.id}`)
    }
    return (
        <tr onClick={handleRedirectToNotice} >

            <td>{listItem.index}</td>

            <td>{listItem.title}</td>

            <td>{new Date(listItem.publicationDate).toLocaleDateString()}</td>

        </tr>
    )
}

export default TableListUser;