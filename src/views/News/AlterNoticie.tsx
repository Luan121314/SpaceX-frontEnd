import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import './formNews.css';

interface NoticeParamsProps {
    id: string
}

interface NoticeProps {
    title: string,
    headline: string,
    news: string,
    publicationDate: string
}

const AlterNews = () => {

    const { id } = useParams<NoticeParamsProps>();
    const [title, setTitle] = useState('');
    const [headline, setHeadLine] = useState('');
    const [notice, setNotice] = useState('');
    const [sucess, setSucess] = useState(false);
    const [sended, setSended] = useState(false);
    console.log({sended, sucess});
    
    useEffect(() => {
        setSended(false)
        api.get(`news/${id}`).then((response) => {
            const {
                headline,
                news,
                title
            } = response.data as NoticeProps;

            setHeadLine(headline);
            setNotice(news);
            setTitle(title)
        })
    }, [id])
    
    function handleUpdateNotice() {
        setSended(true);

        api.put(`news/${id}`, { title, headline, news: notice }).then(response => {
            const { status } = response;
            status !== 204 ? setSucess(false) : setSucess(true);

        })
    }


    return (
        <Layout nameContent="Notícia">
            <div className="createNews-container" >
                <div className="content">
                    <form action="">
                        <h3 className="mb-4" >Atualizar Notícia</h3>
                        <Input
                            name="title"
                            label="Titulo"
                            onChange={(e) => { setTitle(e.target.value) }}
                            value={title}
                        />

                        <Input
                            name="headline"
                            label="Manchete"
                            onChange={(e) => { setHeadLine(e.target.value) }}
                            value={headline}
                        />

                        <TextArea name="noticie"
                            label="Notícia"
                            onChange={(e) => { setNotice(e.target.value) }}
                            value={notice}
                        />

                        <ButtonConfirm label="Tudo certo" onClick={handleUpdateNotice} />

                        {sended && ((sucess) ? (
                            <div className="alert alert-success mt-4 " role="alert">
                                Noticia atualizada com sucesso
                            </div>
                        ) : (
                                <div className="alert alert-danger mt-4" role="alert">
                                    OPs ! Deu algo errado.
                                </div>
                            ))}
                    </form>
                </div>
            </div>
        </Layout>
    )
}


export default AlterNews;