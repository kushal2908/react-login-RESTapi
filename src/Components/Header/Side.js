import React from "react";
import { Link } from "react-router-dom";

function Side() {
  return (
    <div>
      <ul className="navbar-nav bg-gradient-dark  sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center nav-item" to="/">
          <div className="sidebar-brand-icon">
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="" style={{ width: "100%" }} />
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
          <a className="nav-link collapsed" href="!" data-toggle="collapse" data-target="#collapseOne">
            <i className="fas fa-users"></i>
            <span>User Management</span>
          </a>
          <div id="collapseOne" className="collapse">
            <div className="py-2 shadow collapse-inner rounded">
              <Link className="collapse-item text-white " to="/user">
                Create User
              </Link>
            </div>
          </div>
        </li>
        {/* #############################
        ########## Configuration
        ###############################*/}
        <li className="nav-item">
          <a className="nav-link collapsed" href="!" data-toggle="collapse" data-target="#collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Configuration</span>
          </a>
          <div id="collapseTwo" className="collapse">
            <div className="py-2 shadow collapse-inner rounded">
              <Link to="/exchange-rate" className="collapse-item text-white ">
                Exchange Rate
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Exchange House <br /> Information
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Bank Setup
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Branch Information
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Routing Number
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                KYC Information
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Cover Fund
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                CBS Api URL
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Delete Branch
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Withdraw Time Config
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Incentive Configuration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Configuaration List
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                EFTN Configuration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                SMS Configuaration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Agent
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Sub Agent
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                MFS Configuaration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Batch File Configuaration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Holiday List
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                RTGS Configuaration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                API Batch Configuaration
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Exchange Rate Upload
              </Link>
            </div>
          </div>
        </li>

        {/* #############################
        ########## Transaction Management
        ###############################*/}
        <li className="nav-item">
          <a className="nav-link collapsed" href="!" data-toggle="collapse" data-target="#collapseThree">
            <i class="fas fa-tasks"></i>
            <span>Transaction Management</span>
          </a>
          <div id="collapseThree" className="collapse">
            <div className="py-2 shadow collapse-inner rounded">
              <Link to="/exchange-rate" className="collapse-item text-white ">
                Return Batch Upload
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Transaction List
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Transaction Confirm
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Transaction Hold
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Transaction Return
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Transaction Disburse
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Pin Verification
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Duplicate Slip Print
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Transaction Search
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Incentive Disburse
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Incentive Hold
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Upload Raw File
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Batch Validation
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Batch Execution
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Incentive PIN Verification
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Cash Upload
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Incentive Return
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Swift Data Calling
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Swift Information
              </Link>
              <Link className="collapse-item text-white " to="/exchange-house-information">
                Incentive Reject List
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/table">
            <i class="fas fa-file-alt"></i>
            <span>Report</span>
          </Link>
        </li>

        {/* <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div> */}
      </ul>
    </div>
  );
}

export default Side;
