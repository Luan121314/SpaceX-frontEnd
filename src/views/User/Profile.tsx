import React from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';
import './profile.css';

interface ProfileParams {
    id: string
}

const Profile = () => {
    const { id } = useParams<ProfileParams>();
    console.log(id);


    return (
        <Layout nameContent="Usuario" >
            <div className="profile-container" >
                <div className="content">
                    <div className="card mb-3">
                        <div className="row no-gutters ">
                            <div className="col-md-4">
                                <img src="https://github.com/Luan121314.png" alt="avatar" className="card-img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-header">
                                <h5 className="card-title">Luan</h5>
                                    <div>
                                        <button type="button">
                                            <FiEdit2 size={20} color="#000" />
                                        </button>
                                        <button type="button" >
                                            <FiX size={20} color="#000" style={{ marginLeft: '1px' }} />
                                        </button>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="about">
                                        <h2>Sobre</h2>
                                        <span>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod sempern, egestas eget quam. Vestibulum id ligula porta felis euismod sempern, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibu</span>
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