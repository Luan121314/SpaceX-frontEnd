import React from 'react';
import Layout from '../../layout/Layout';
import TableListNews from '../../components/Table/TableListNews';
import Table from '../../components/Table/Table';

const News= ()=>{
    return(
        <Layout nameContent="Noticas" >
            <Table theads={['Noticia', 'Manchete', 'Data da publicação']}>
                <TableListNews key={1} listItem={{ id:'ncoav', indice: 1, headline: 'Manchete', title:'Titulo noticia', publicationDate: new Date().toDateString()}}/>
                <TableListNews key={2} listItem={{id:'ncoav', indice: 1, headline: 'Manchete', title:'Titulo noticia', publicationDate: new Date().toDateString()}}/>
                <TableListNews key={3} listItem={{id:'ncoav', indice: 1, headline: 'Manchete', title:'Titulo noticia', publicationDate: new Date().toDateString()}}/>
            </Table>
            
        </Layout>
    )
}

export default News;