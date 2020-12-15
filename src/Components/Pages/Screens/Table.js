import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Layout from '../../Header/Layout'

function Table() {

    const [datas, setDatas] = useState([])
    
    //http://localhost:8000/api/exchangehouse/
    //https://jsonplaceholder.typicode.com/posts
    // Axios Data Binding
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/') 
        .then(res=> {
            setDatas(res.data);
        })
        .catch((err)=> console.log(err))
    },[])

   

    return (
        <div>
            <Layout>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Tables Example</h6>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                                <thead className="">
                                    <tr>
                                        <th>userId</th>
                                        <th>Id</th>
                                        <th>title</th>                                                                             
                                    </tr>
                                </thead>
                                {
                                    datas.map(data => (
                                        <tbody>
                                            <tr key={data.id}>
                                                <td> {data.id} </td>
                                                <td> {data.title} </td>
                                                <td> {data.body} </td>
                                            </tr>
                                        </tbody>
                                    ))

                                }
                            </table>
                        </div>
                        
                    </div>
                    
                </div>           
            </Layout>            
        </div>
    )
}

export default Table
