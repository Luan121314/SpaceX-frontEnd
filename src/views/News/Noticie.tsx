import React from 'react';
import Layout from '../../layout/Layout';
import { FiEdit2, FiX } from 'react-icons/fi';

import './noticie.css';

const Noticie = () => {
    return (
        <Layout nameContent="Noticia" >
            <div className="noticie-container">
                <div className="content">
                    <div className="card">
                        <div className="card-header ">
                            <h5 className="card-title">Noticia title</h5>
                            <div>
                                <button type="button">
                                    <FiEdit2 size={20} color="#000" />
                                </button>
                                <button  type="button" >
                                    <FiX size={20} color="#000" style={{ marginLeft: '1px' }} />
                                </button>
                            </div>

                        </div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Manchete</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque dolores officia unde maiores natus, iste ab perferendis quibusdam fugiat inventore sunt reprehenderit voluptates amet accusantium! Dolor libero temporibus facilis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ipsa beatae. Provident aut ea consequuntur nisi reprehenderit fuga porro esse. Quis pariatur tempore, tempora repudiandae aliquid nobis quibusdam blanditiis voluptatibus?</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Data da publicação</small>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Noticie;