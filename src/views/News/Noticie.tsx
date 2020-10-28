import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { FiEdit2, FiX } from 'react-icons/fi';

import './noticie.css';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

interface NoticeProps {
    title: string,
    headline: string,
    news: string,
    publicationDate: string
}

interface NoticeParamsProps {
    id: string
}


const Noticie = () => {
    const history = useHistory();
    const { id } = useParams<NoticeParamsProps>();
    const [noticie, setNoticie] = useState<NoticeProps>();

    useEffect(() => {
        api.get(`news/${id}`).then((response) => {
            const {
                publicationDate,
                headline,
                news,
                title
            } = response.data as  NoticeProps;
            
            setNoticie({
                title,
                headline,
                news,
                publicationDate: new Date(publicationDate).toLocaleDateString()
            })
        })
    }, [id])


    function handleRedirectAlterNotice() {
        history.push(`/news/alter/${id}`);
    }

    function handleDeleteNotice(){
        api.delete(`news/${id}`).then((response) => {
            setNoticie(response.data)
            history.push('/news')
        })
    }


    return (
        <Layout nameContent="Noticia" >
            <div className="noticie-container">
                <div className="content">
                    <div className="card">
                        <div className="card-header ">
                            <h5 className="card-title">{noticie?.title}</h5>
                            <div>
                                <button type="button" onClick={handleRedirectAlterNotice} >
                                    <FiEdit2 size={20} color="#000" />
                                </button>
                                <button type="button" onClick={handleDeleteNotice} >
                                    <FiX size={20} color="#000" style={{ marginLeft: '1px' }} />
                                </button>
                            </div>

                        </div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 ">{noticie?.headline}</h6>
                            <button className="btn btn-link  p-0" type="button" data-toggle="collapse" data-target="#notice" aria-expanded="false" aria-controls="notice">Ver mais</button>
                        </div>
                        <div className="card-body collapse" id="notice" >
                            <p className="card-text">{noticie?.news}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Data da publicação {noticie?.publicationDate}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Noticie;