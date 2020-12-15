import React from 'react'
import {Link} from 'react-router-dom'

function Side() {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-dark  sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center nav-item" to="/">
                    <div className="sidebar-brand-icon">
                        <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="" style={{width: "100%"}}/>
                    </div>
                    <div className="sidebar-brand-text mx-3"></div>
                </Link>

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>          

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne" >
                        <i className="fas fa-users"></i>
                        <span>User Management</span>
                    </a>
                    <div id="collapseOne" className="collapse" >
                        <div className="bg-transparent py-2 collapse-inner rounded">
                            <Link className="collapse-item text-white " to="/user">Create User</Link>                            
                        </div>
                    </div>
                </li>                
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" >
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Configuration</span>
                    </a>
                    <div id="collapseTwo" className="collapse" >
                        <div className="bg-transparent py-2 collapse-inner rounded">
                            <Link to="/exchange-rate" className="collapse-item text-white ">Exchange Rate</Link>
                            <Link className="collapse-item text-white " to="/exchange-house-information">Exchange House Information </Link>
                        </div>
                    </div>
                </li>                
                               

                <li className="nav-item">
                    <Link className="nav-link" to="/chart">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/table">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </Link>
                </li>         

                {/* <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div> */}

            </ul>

        </div>
    )
}

export default Side
