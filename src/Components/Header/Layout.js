import React from "react";
import Side from "./Side";
import Top from "./Top";

function Layout(props) {
  return (
    <div id="wrapper">
      <Side />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Top />
          <div className="container-fluid">{props.children}</div>
        </div>
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>
                <strong> Copyright &copy; 2020 </strong>
              </span>
            </div>
          </div>
        </footer>

        {/* SCROLL ON TOP */}
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Layout;
