import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import Select from '../../components/Inputs/Select';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import './formUser.css';

interface UserProps {
    name: string,
    about: string,
    github: string,
    gender: string
}


interface ProfileParams {
    id: string
}

const AlterUser = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [github, setGithub] = useState('');
    const [gender, setGender] = useState('');
    const [sucess, setSucess] = useState(false);
    const [sended, setSended] = useState(false);
    const { id } = useParams<ProfileParams>();


    useEffect(() => {
        api.get(`users/${id}`).then(response => {
            const {
                name,
                github,
                about,
                gender
            } = response.data as UserProps;

            setName(name);
            setGithub(github);
            setAbout(about);
            setGender(gender);
        })
    }, [id])


    function handleUpdateUser() {
        setSended(true);
        
        api.put(`users/${id}`, {
            name,
            about,
            github,
            gender
        }).then(response => {
            const { status } = response;
            status !== 204 ? setSucess(false) : setSucess(true);
        })
    }

    return (
        <Layout nameContent="Usuario">
            <div className="formUser-container" >
                <div className="content">
                    <form action="">
                        <h3 className="mb-4" >Atualiza usuário</h3>
                        <Input
                            name="name"
                            label="Nome"
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                        />

                        <Input
                            name="gitHub"
                            label="GitHub"
                            onChange={(e) => { setGithub(e.target.value) }}
                            value={github}
                        />

                        <TextArea
                            name="about"
                            label="Sobre"
                            onChange={(e) => { setAbout(e.target.value) }}
                            value={about}
                        />

                        <Select
                            label="Sexo"
                            name="gender"
                            value={gender}
                            onChange={(e) => { setGender(e.target.value) }}
                            options={
                                [
                                    { label: "Masculino", value: "Masculino" },
                                    { label: "Feminino", value: "Feminino" },
                                    { label: "Outros", value: "Outros" }
                                ]
                            }
                        />
                        <ButtonConfirm label="Tudo certo" onClick={handleUpdateUser} />

                        {sended && ((sucess) ? (
                            <div className="alert alert-success mt-4 " role="alert">
                                Usuário atualizado com sucesso
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


export default AlterUser