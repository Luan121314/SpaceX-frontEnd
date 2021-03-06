import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { FiEdit2, FiX } from 'react-icons/fi';

import './notice.css';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

interface NoticeProps {
    title: string,
    headline: string,
    notice: string,
    publicationDate: string
}

interface NoticeParamsProps {
    id: string
}


const Notice= () => {
    const history = useHistory();
    const { id } = useParams<NoticeParamsProps>();
    const [notice, setNotice] = useState<NoticeProps>();

    useEffect(() => {
        api.get(`notices/${id}`).then((response) => {
            const {
                publicationDate,
                headline,
                notice,
                title
            } = response.data as  NoticeProps;
            
            setNotice({
                title,
                headline,
                notice,
                publicationDate: new Date(publicationDate).toLocaleDateString()
            })
        })
    }, [id])


    function handleRedirectAlterNotice() {
        history.push(`/notices/alter/${id}`);
    }

    function handleDeleteNotice(){
        api.delete(`notices/${id}`).then((response) => {
            setNotice(response.data)
            history.push('/notices')
        })
    }


    return (
        <Layout nameContent="Noticia" >
            <div className="notice-container">
                <div className="content">
                    <div className="card">
                        <div className="card-header ">
                            <h5 className="card-title">{notice
                            ?.title}</h5>
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
                            <h6 className="card-subtitle mb-2 ">{notice
                            ?.headline}</h6>
                            <button className="btn btn-link  p-0" type="button" data-toggle="collapse" data-target="#notice" aria-expanded="false" aria-controls="notice">Ver mais</button>
                        </div>
                        <div className="card-body collapse" id="notice" >
                            <p className="card-text">{notice
                            ?.notice}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Data da publicação {notice
                            ?.publicationDate}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Notice;