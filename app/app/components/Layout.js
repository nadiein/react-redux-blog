import React, { Component } from 'react';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return (
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-9">   
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
