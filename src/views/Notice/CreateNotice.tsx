import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ValidationError } from 'yup';
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import noticeValidation from '../../validates/NoticeValidation';
import './formNotice.css'



const CreateNews = () => {
    const [title, setTitle] = useState('');
    const [headline, setHeadLine] = useState('');
    const [notice, setNotice] = useState('');
    const [error, setError] = useState<string>();
    const history = useHistory()

    async function handleCreateNotice() {
        const data = { title, headline, notice }
        try {
            await noticeValidation.create(data)
            api.post<{id:string}>('notices', data).then(response => {
                const {id} = response.data
                history.push(`/notices/notice/${id}`)
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
                        <h3 className="mb-4" >Criar nova Notícia</h3>
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

                        <ButtonConfirm
                            label="Tudo certo"
                            onClick={handleCreateNotice}
                        />
                    </form>
                </div>

            </div>
        </Layout>
    )
}


export default CreateNews;