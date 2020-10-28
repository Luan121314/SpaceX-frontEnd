import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import TableListNews from '../../components/Table/TableListNews';
import Table from '../../components/Table/Table';
import api from '../../services/api';

interface NoticieProps{
    id:string,
    title: string,
    publicationDate: string
}

const News= ()=>{
    const [noticies, setNoticies] = useState<NoticieProps[]>([])

    useEffect(()=>{
        api.get('news').then((response)=>{
            setNoticies(response.data)
        })
    },[])


    return(
        <Layout nameContent="Noticas" renderPlus>
            <Table theads={['Noticia', 'Data da publicação']}>
                {noticies.map((noticie, index) =>{
                    return(
                        <TableListNews key={noticie.id} listItem={{ index: index+1,...noticie}}/>
                    )
                })}
            </Table>
            
        </Layout>
    )
}

export default News;