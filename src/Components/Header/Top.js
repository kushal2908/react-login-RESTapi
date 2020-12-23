import React, { useState } from "react";
import { getUser, removeUserSession } from "../utils/Common";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

function Top(props) {
  //logout Session
  const user = getUser();
  const handleLogout = () => {
    removeUserSession();
  };

  return (
    <div id="content">
      <nav className="navbar navbar-expand navbar-white bg-white topbar mb-4 border-bottom static-top shadow">
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
          <i class="fa fa-bars text-dark"></i>
        </button>

        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul class="navbar-nav ml-auto">
          {/*#######################################################
              ALERT DROP DOWN
            #########################################################*/}
          <li class="nav-item dropdown no-arrow">
            <Link class="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bell fa-fw text-gray-600"></i>
              <span class="badge badge-danger badge-counter"></span>
            </Link>
            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 class="dropdown-header">Notification</h6>
              <Link class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </Link>
              <Link class="dropdown-item d-flex align-items-center" to="#">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </Link>
              <Link class="dropdown-item d-flex align-items-center" to="#">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </Link>
              <Link class="dropdown-item text-center small text-gray-500" to="#">
                Show All Alerts
              </Link>
            </div>
          </li>

          {/*#######################################################
                  LOG OUT MENU
            #########################################################*/}
          <div class="topbar-divider d-none d-sm-block"></div>

          <li class="nav-item dropdown no-arrow">
            <Link class="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img class="img-profile rounded-circle" src="img/undraw_profile.svg" alt="asas" />
            </Link>

            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <h5 className="text-center text-success" style={{ textTransform: "uppercase" }}>
                {user.username}
              </h5>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" to="#">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </Link>
              <Link class="dropdown-item" to="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </Link>
              <Link class="dropdown-item" to="#">
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </Link>
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
  );
}

export default Top;
