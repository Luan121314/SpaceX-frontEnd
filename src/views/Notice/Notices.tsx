import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import TableListNews from '../../components/Table/TableListNews';
import Table from '../../components/Table/Table';
import api from '../../services/api';

interface NoticeProps{
    id:string,
    title: string,
    publicationDate: string
}

const News= ()=>{
    const [notices, setNotices] = useState<NoticeProps[]>([])

    useEffect(()=>{
        api.get('notices').then((response)=>{
            setNotices(response.data)
        })
    },[])


    return(
        <Layout nameContent="Noticas" renderPlus>
            <Table theads={['Noticia', 'Data da publicação']}>
                {notices.map((notice, index) =>{
                    return(
                        <TableListNews key={notice.id} listItem={{ index: index+1,...notice}}/>
                    )
                })}
            </Table>
            
        </Layout>
    )
}

export default News;