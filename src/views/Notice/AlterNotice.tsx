import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { ValidationError } from 'yup';
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import { NoticeProps } from '../../interfaces';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import noticeValidation from '../../validates/NoticeValidation';
import './formNotice.css';

interface NoticeParamsProps {
    id: string
}


const AlterNews = () => {

    const { id } = useParams<NoticeParamsProps>();
    const [title, setTitle] = useState('');
    const [headline, setHeadLine] = useState('');
    const [notice, setNotice] = useState('');
    const [error, setError] = useState<string>();
    const history = useHistory();

    useEffect(() => {
        api.get<NoticeProps>(`notices/${id}`).then((response) => {
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

    async function handleUpdateNotice() {
        try {
            const data = { title, headline, notice }
            await noticeValidation.update(data)

            api.put(`notices/${id}`, data).then(response => {
                const { status } = response;
                if (status === 204) history.push(`/notices/notice/${id}`);
            })

        } catch (error) {
            if (error instanceof ValidationError) {
                setError(error.message)
                return
            }
            setError("Algum erro inesperado oconteceu, tente novamenete mais tarde")
        }
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

                        {error && (
                            <div className="alert alert-danger mb-2">{error}</div>
                        )}

                        <ButtonConfirm label="Tudo certo" onClick={handleUpdateNotice} />

                    </form>
                </div>
            </div>
        </Layout>
    )
}


export default AlterNews;