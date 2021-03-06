import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import './formNotice.css';

interface NoticeParamsProps {
    id: string
}

interface NoticeProps {
    title: string,
    headline: string,
    notice: string,
    publicationDate: string
}

const AlterNews = () => {

    const { id } = useParams<NoticeParamsProps>();
    const [title, setTitle] = useState('');
    const [headline, setHeadLine] = useState('');
    const [notice, setNotice] = useState('');
    const [success, setSuccess] = useState(false);
    const [sended, setSended] = useState(false);
    
    useEffect(() => {
        api.get(`notices/${id}`).then((response) => {
            const {
                headline,
                notice,
                title
            } = response.data;

            setHeadLine(headline);
            setNotice(notice);
            setTitle(title)
        })
    }, [id])
    
    function handleUpdateNotice() {
        setSended(true)
        api.put(`notices/${id}`, { title, headline, notice }).then(response => {
            const { status } = response;
            status !== 204 ? setSuccess(false) : setSuccess(true);

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

                        {sended && ((success) ? (
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