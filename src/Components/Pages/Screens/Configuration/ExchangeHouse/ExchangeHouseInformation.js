import React,{useEffect,useState} from 'react'
import axios from 'axios'

import Layout from '../../../../Header/Layout'
import { Link } from 'react-router-dom'

function ExchangeHouseInformation() {

    const [houses, setHouses] = useState([])


    useEffect(() => {
        axios.get('/exchangehouse')
        .then(res=> {
            setHouses(res.data)
        }).catch((err)=>console.log(err))
        
    }, [])

    return (
        <div>
            <Layout>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div className="module-header text-dark bg-light" >
                            <div className="row align-items-center">
                                <div className="col-md-6" style={{fontWeight:"300"}} >
                                    <h2> Exchange House Information </h2>
                                    <p>List of exchange houses</p>
                                </div>                        
                                <div className="col-md-6 text-right ">
                                    <Link to="/exchange-house-information-add" className="btn btn-primary shadow" > 
                                        <i class="fas fa-plus fa-fw mr-1"></i>
                                        Add Exchange House
                                    </Link>
                                </div>

                            </div>
                        </div>                        
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table exchnage-house-table" id="dataTable" width="100%">
                                <thead className="bg-light text-info">
                                    <tr className="text-center" style={{fontSize:"14px"}}>                                       
                                        <th>Name</th>
                                        <th>Exchange House ID</th>
                                        <th>Exchange House Account Number</th>                                                                                                                        
                                        <th>Cash Incentive Account Number</th>                                                                             
                                        <th>Routing Number</th>                                                                             
                                        <th>Nostro Account Number</th>                                                                             
                                        <th>Incentive GL</th>                                                                             
                                        <th>Commission Rate</th>                                                                             
                                        <th>Actions</th>                                                                                                                                                        
                                    </tr>
                                </thead> 
                                {
                                     houses.map(house => (
                                        <tbody>
                                            <tr key={house.id}>
                                                <td> {house.company_name}</td>                                                
                                                <td> {house.MTO_id} </td>                                                
                                                <td> {house.bank_account_number} </td>                                                
                                                <td> {house.cash_GL} </td>                                                
                                                <td> {house.routing_number}</td>                                                
                                                <td> {house.FC_bank_account}</td>                                                
                                                <td> {house.incentive_GL}</td>                                                
                                                <td> {house.com_rate}</td> 
                                                <td  className="text-center d-flex" style={{border: "none "}} > 
                                                    <Link to={`/exchange-house-information-edit`} className="btn btn-info mx-1 rounded-pill shadow-sm"> 
                                                        <i class="fas fa-pen-square"></i> 
                                                    </Link> 
                                                    <button className="btn btn-danger shadow-sm rounded-pill">
                                                        <i class="far fa-trash-alt"></i>  
                                                    </button>                                              
                                                </td>                                           
                                                                                       
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

export default ExchangeHouseInformation
