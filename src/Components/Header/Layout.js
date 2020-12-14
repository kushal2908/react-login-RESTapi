import React from 'react'
import Side from './Side'
import Top from './Top'


function Layout(props){
    
    return (
        <div id="wrapper">
            <Side/>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Top/>
                        <div className="container-fluid">
                            {props.children}
                        </div>                       
                    </div> 
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span> Copyright &copy; 2020</span>
                            </div>
                        </div>
                    </footer>               
                </div>                        
        </div>
    )
}

export default Layout
