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
    function handleRedirectToNoticie(){
        history.push(`/news/noticie/${listItem.id}`)
    }
    return (
        <tr onClick={handleRedirectToNoticie} >

            <td>{listItem.index}</td>

            <td>{listItem.title}</td>

            <td>{new Date(listItem.publicationDate).toLocaleDateString()}</td>

        </tr>
    )
}

export default TableListUser;