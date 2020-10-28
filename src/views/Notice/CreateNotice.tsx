import React, { useState } from 'react'
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import './formNotice.css'

const CreateNews = () => {
    const [title, setTitle] = useState('');
    const [headline, setHeadLine] = useState('');
    const [notice, setNotice] = useState('');
    const [sucess, setSucess] = useState(false);
    const [sended, setSended] = useState(false);

    function handleCreateNotice() {
        setSended(true);

        api.post('notices', { title, headline, notice }).then(response => {
            const { status } = response;
            status !== 201 ? setSucess(false) : setSucess(true);

        })
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

                        <ButtonConfirm
                            label="Tudo certo"
                            onClick={handleCreateNotice}
                        />
                          {sended && ((sucess) ? (
                            <div className="alert alert-success mt-4 " role="alert">
                                Noticia criada com sucesso
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


export default CreateNews;