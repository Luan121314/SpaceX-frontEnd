import React, { useState } from 'react'
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import Select from '../../components/Inputs/Select';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import './formUser.css';


const CreateUser = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [github, setGithub] = useState('');
    const [gender, setGender] = useState('');
    const [sucess, setSucess] = useState(false);
    const [sended, setSended] = useState(false);

    function handleCreateUser() {
        setSended(true);
        api.post('users', {
            name,
            about,
            github,
            gender
        }).then(response => {
            const { status } = response;
            status !== 201 ? setSucess(false) : setSucess(true);
        })
    }



    return (
        <Layout nameContent="Usuario">
            <div className="formUser-container" >
                <div className="content">
                    <form action="">
                        <h3 className="mb-4" >Criar novo usuario</h3>
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
                        <ButtonConfirm label="Tudo certo" onClick={handleCreateUser} />

                        {sended && ((sucess) ? (
                            <div className="alert alert-success mt-4 " role="alert">
                                Usuário criado com sucesso
                            </div>
                        ) : (
                                <div className="alert alert-danger mt-4" role="alert">
                                    OPs ! Deu algo errado.
                                </div>
                            ))}

                    </form>
                </div>
            </div>
        </Layout >
    )
}


export default CreateUser