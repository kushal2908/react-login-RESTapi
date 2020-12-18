import React, {useState} from 'react'
import { getUser, setUserSession } from '../utils/Common';
import axios from 'axios'

function Login(props) {

    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); 

     //handle Login
     const handleLogin = () => {  

        setError(null);
        setLoading(true);
        
        axios.post("/token", {username:username.value, password:password.value})
        .then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data);
            props.history.push('/dashboard');
            console.log(response.data);           
        })
        .catch(error => {               
            setLoading(false);
            if(error.response.status === 401 && username === username.username && password===username.password){
                setError(error.response.data.message); 
            }                       
            else {
                setError ( 
                    <div className="alert alert-warning shadow-sm"> 
                        <p className="small font-weight-bold text-danger mb-0"> username or password did not match </p> 
                    </div> );
            }                
        });       
 
    }    

    return (
        <div className="login-page">
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">                               
                                    <div class="col-lg-12">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h1 text-gray-900 mb-4 login-text">Login</h1>
                                            </div>
                                            {
                                                    error  &&                                   
                                                    <>
                                                        {error}
                                                    </>                                       
                                                }  
                                            <form class="user">
                                                <div class="form-group">
                                                    <input 
                                                        type="email" 
                                                        class="form-control form-control-user"                                                    
                                                        placeholder="Username"
                                                        {...username} 

                                                        />
                                                </div>
                                                <div class="form-group">
                                                    <input 
                                                        type="password" 
                                                        class="form-control form-control-user"
                                                        placeholder="Password"
                                                        {...password}
                                                    />
                                                </div> 
                                                                                        
                                                <input 
                                                    type="button" 
                                                    class="btn btn-primary btn-user btn-block"
                                                    value={ loading ? 'loging in...': 'Login'}
                                                    onClick={handleLogin}
                                                    disabled={loading}                                       
                                                />                                     
                                            </form>                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
} 

export default Login
