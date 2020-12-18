import React from 'react'
import Layout from '../../../Header/Layout'

function CreateUser() {
    return (
        <div>
            <Layout>                

                <div class="card o-hidden border-0 shadow-lg m-auto" style={{width: "50%"}} >
                    <div class="card-body p-0">
                        <div class="row">                                            
                            <div class="col-md-12 col-sm-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user">                                
                                        <div class="form-group">
                                            <input 
                                                type="email" 
                                                class="form-control form-control-user" 
                                                id="exampleInputEmail"
                                                placeholder="User Name"
                                            />
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input 
                                                    type="password" 
                                                    class="form-control form-control-user"
                                                    id="exampleInputPassword" 
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <input 
                                                    type="password" 
                                                    class="form-control form-control-user"
                                                    id="exampleRepeatPassword" 
                                                    placeholder="Repeat Password"
                                                />
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-primary btn-block btn-user">
                                            Register Account
                                        </a>                             
                                        
                                    </form>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>            
        </div>
    )
}

export default CreateUser
