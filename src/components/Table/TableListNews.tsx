import React from 'react';
import { useHistory } from 'react-router-dom';

interface TableListUserProps {
    listItem: {
        indice: number,
        id:string,
        title: string,
        headline: string,
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

            <td>{listItem.indice}</td>

            <td>{listItem.title}</td>

            <td>{listItem.headline}</td>

            <td>{listItem.publicationDate}</td>

        </tr>
    )
}

export default TableListUser;