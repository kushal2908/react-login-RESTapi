import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Layout from '../../../Header/Layout'

function ExchangeHouseAdd() {

    // const name = useFormInput('');
    // const mobileNum = useFormInput('');
    // const address = useFormInput('');
    // const bank_ac_num = useFormInput('');
    // const cash_gl = useFormInput('');
    // const nostro_ac = useFormInput('');
    // const ex_house_id = useFormInput('');
    // const manual_data_upload = useFormInput('');
    // const rcv_other_ex_house = useFormInput('');
    // const score = useFormInput('');
    // const incentive_gl = useFormInput('');
    // const routing_num = useFormInput('');
    // const commission_rate = useFormInput('');
    // const vat = useFormInput('');


    return (
        <div>
            <Layout>
                
                <Link to="/exchange-house-information" className="btn btn-info mb-3 shadow">
                <i class="fas fa-chevron-left mr-1 fa-fw"></i>
                    Back
                </Link>

                <div class="card o-hidden border-0 shadow-lg m-auto " style={{width: "60%"}} >
                    <div class="card-body p-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="p-5">                                   
                                    <form className="">

                                        <div class="form-group">
                                            <label className="h6 "> Exchange House Name </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                                
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Mobile Number </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                

                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Address </label>
                                            <textarea 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label className="h6 "> Bank Account Number </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                                
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Cash GL </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user"                                                
                                                required
                                                
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Nostro Account </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Exchange House ID </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Is Manual Data Upload Managed </label>
                                                <div class="input-group mb-3">
                                                    <select class="custom-select" id="inputGroupSelect01">
                                                        <option selected>.....</option>
                                                        <option value="1">Yes</option>
                                                        <option value="2">No</option>                                                    
                                                    </select>
                                                </div>                                           
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Received from other exchange house </label>
                                                <div class="input-group mb-3">
                                                    <select class="custom-select" id="inputGroupSelect01">
                                                        <option selected>.....</option>
                                                        <option value="1">Yes</option>
                                                        <option value="2">No</option>                                                    
                                                    </select>
                                                </div>                                            
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Score </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Incentive GL </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Routing Number </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> Commission Rate </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label className="h6 "> VAT (%) </label>
                                            <input 
                                                type="text" 
                                                class="form-control form-control-user" 
                                                required
                                            />
                                        </div>

                                        <input 
                                            type="button"
                                            className="btn btn-success shadow"                                        
                                            value="Create"
                                        />

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

export default ExchangeHouseAdd
