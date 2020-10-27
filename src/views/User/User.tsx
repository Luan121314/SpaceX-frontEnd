import React from 'react';
import Table from '../../components/Table/Table';
import TableListUser from '../../components/Table/TableListUser';
import Layout from '../../layout/Layout';


const User = () => {
    return (
        <Layout nameContent="Usuarios" >
            <Table theads={['Name', 'Sexo']}>
                <TableListUser key={1} listItem={{ id: 'vinto', indice: 1, name: "Luan", gender: "Masculino" }} />
                <TableListUser key={2} listItem={{ id: 'vinto', indice: 1, name: "Luan", gender: "Masculino" }} />
            </Table>
        </Layout>
    )
}

export default User;