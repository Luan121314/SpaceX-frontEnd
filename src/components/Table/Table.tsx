import React from 'react';
import './style.css'

interface TableProps {
    theads: Array<string>
}

const Table: React.FC<TableProps> = (props) => {
    return (

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            {props.theads.map((thead, index) => 
                                (<th key={index} >{thead}</th>)
                                )}
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Table;