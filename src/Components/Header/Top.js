import React from 'react'
import {getUser, removeUserSession} from '../utils/Common'
import {Link} from 'react-router-dom'
    
function Top(props) {

    const user = getUser();
    const handleLogout = () => {
        removeUserSession();        
    } 

    return (
        <div id="content">

            <nav class="navbar navbar-expand navbar-white bg-white topbar mb-4 border-bottom static-top shadow">

            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>
            
            <form
                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul class="navbar-nav ml-auto">                

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-900 small font-weight-bold"> {user.username} </span>
                        <img class="img-profile rounded-circle"
                            src="img/undraw_profile.svg"/>
                    </a>
                    
                    
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">

                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>

                        <div class="dropdown-divider"></div>

                        <Link class="dropdown-item text-danger font-weight-bold" data-toggle="modal" data-target="#logoutModal" onClick={handleLogout}>                           
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400 text-danger font-weight-bold"></i>
                            Logout                           
                        </Link>                        
                    </div>


                </li>             
            </ul>

            </nav>
            
        </div>
    )
}

export default Top
