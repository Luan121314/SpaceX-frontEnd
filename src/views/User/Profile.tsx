import React, { useEffect, useState } from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';
import api from '../../services/api';
import './profile.css';

interface UserProps {
    name: string,
    about: string,
    github: string
}


interface ProfileParams {
    id: string
}

const Profile = () => {
    const { id } = useParams<ProfileParams>();
    const [user, setUser] = useState<UserProps>();
    const history = useHistory();

    useEffect(() => {
        api.get(`users/${id}`).then(response => {
            setUser(response.data)
        })
    }, [id])

    function handleRedirectAlterUser() {
        history.push(`/users/alter/${id}`)
    }

    function handleDeleteUser(){
        api.delete(`users/${id}`).then((response) => {
            history.push('/users')
        })
    }



    return (
        <Layout nameContent="Usuario" >
            <div className="profile-container" >
                <div className="content">
                    <div className="card mb-3">
                        <div className="row no-gutters ">
                            <div className="col-md-4">
                                <img src={`https://github.com/${user?.github}.png`} alt="avatar" className="card-img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-header">
                                    <h5 className="card-title">{user?.name}</h5>
                                    <div>
                                        <button type="button" onClick={handleRedirectAlterUser}>
                                            <FiEdit2 size={20} color="#000" />
                                        </button>
                                        <button type="button"  onClick={handleDeleteUser} >
                                            <FiX size={20} color="#000" style={{ marginLeft: '1px' }} />
                                        </button>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="about">
                                        <h2>Sobre</h2>
                                        <span>{user?.about}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;