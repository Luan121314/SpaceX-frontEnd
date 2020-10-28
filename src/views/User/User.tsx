import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import TableListUser from '../../components/Table/TableListUser';
import Layout from '../../layout/Layout';
import api from '../../services/api';

interface UserProps {
    name: string,
    gender: string,
    id: string
}


const User = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <Layout nameContent="Usuarios" renderPlus>
            <Table theads={['Name', 'Sexo']}>
                {
                    users.map((user, index) => {
                        return (
                            <TableListUser key={user.id} listItem={{index: index + 1, ...user }} />
                        )
                    })
                }
            </Table>
        </Layout>
    )
}

export default User;