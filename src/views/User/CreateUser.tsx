import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ValidationError } from 'yup';
import ButtonConfirm from '../../components/Inputs/ButtonConfirm';
import Input from '../../components/Inputs/Input';
import Select from '../../components/Inputs/Select';
import TextArea from '../../components/Inputs/TextArea';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import userValidation from '../../validates/UserValidation';
import './formUser.css';


const CreateUser = () => {

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [github, setGithub] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState<string>();
    const history = useHistory();

    async function handleCreateUser() {
        const data = { name, about, github, gender }
        try {
            await userValidation.create(data)

            api.post<{ id: string }>('users', {

            }).then(response => {
                const { id } = response.data;
                history.push(`/users/profile/${id}`)
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

                        {error && (
                            <div className="alert alert-danger mb-2">{error}</div>
                        )}

                        <ButtonConfirm label="Tudo certo" onClick={handleCreateUser} />



                    </form>
                </div>
            </div>
        </Layout >
    )
}


export default CreateUser