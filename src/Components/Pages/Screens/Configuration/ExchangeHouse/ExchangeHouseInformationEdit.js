import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../Header/Layout";
import { Link, useParams } from "react-router-dom";

function ExchangeHouseInformationEdit(props) {
  const { id } = useParams();

  const [getHouses, setGetHouses] = useState({});

  //AXIOS EDIT LOGIC
  const handleExchangeHouseEdit = (e) => {
    e.preventDefault();
    axios
      .put(`/exchangehouse/${id}/`, getHouses)
      .then((res) => {
        props.history.push("/exchange-house-information");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //EDIT HOUSE CODE
  const loadHouse = async () => {
    const result = await axios.get(`/exchangehouse/${id}/`);
    setGetHouses(result.data);
  };

  const onInputChange = (e, key) => {
    const v = e.target.value;
    const t = JSON.parse(JSON.stringify(getHouses));
    t[key] = v;
    setGetHouses(t);
  };

  useEffect(() => {
    loadHouse();
  }, []);

  return (
    <div>
      <Layout>
        <Link to="/exchange-house-information" className="btn btn-info mb-3 shadow">
          <i class="fas fa-chevron-left mr-1 fa-fw"></i>
          Back
        </Link>

        <div class="card o-hidden border-0 shadow-lg m-auto " style={{ width: "100%" }}>
          <div className="card-header">
            <h2 className="text-info" style={{ fontWeight: "600" }}>
              Update Exchange House Information
            </h2>
          </div>
          <div class="card-body p-0">
            <div className="row">
              <div className="col-md-12">
                <div className="p-4">
                  <form>
                    <div class="form-group">
                      <label className="h6 "> Exchange House Name </label>
                      <input type="text" class="form-control form-control-user" required value={getHouses.company_name} onChange={(e) => onInputChange(e, "company_name")} />
                    </div>

                    <div className="form-group row">
                      <div class="form-group col-md-6">
                        <label className="h6 "> Mobile Number </label>
                        <input type="text" class="form-control form-control-user" value={getHouses.mobile_number} onChange={(e) => onInputChange(e, "mobile_number")} />
                      </div>
                      <div class="form-group col-md-6">
                        <label className="h6 "> Address </label>
                        <textarea type="text" class="form-control form-control-user" value={getHouses.address} onChange={(e) => onInputChange(e, "address")} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div class="form-group col-md-4">
                        <label className="h6 "> Bank Account Number </label>
                        <input
                          type="text"
                          class="form-control form-control-user"
                          required
                          value={getHouses.bank_account_number}
                          onChange={(e) => onInputChange(e, "bank_account_number")}
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Cash GL </label>
                        <input type="text" class="form-control form-control-user" required value={getHouses.cash_GL} onChange={(e) => onInputChange(e, "cash_GL")} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Nostro Account </label>
                        <input
                          type="text"
                          class="form-control form-control-user"
                          required
                          value={getHouses.FC_bank_account}
                          onChange={(e) => onInputChange(e, "FC_bank_account")}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div class="form-group col-md-4">
                        <label className="h6 "> Exchange House ID </label>
                        <input type="text" class="form-control form-control-user" required value={getHouses.MTO_id} onChange={(e) => onInputChange(e, "MTO_id")} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Is Manual Data Upload Managed </label>
                        <div class="input-group mb-3">
                          <select class="custom-select" value={getHouses.is_manual_data_upload_managed} onChange={(e) => onInputChange(e, "is_manual_data_upload_managed")}>
                            <option selected>.....</option>
                            <option value="1" label="Yes" />
                            <option value="2" label="No" />
                          </select>
                        </div>
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Received from other exchange house </label>
                        <div class="input-group mb-3">
                          <select class="custom-select" value={getHouses.received_from_others_mto} onChange={(e) => onInputChange(e, "received_from_others_mto")}>
                            <option selected>.....</option>
                            <option value="1" label="Yes" />
                            <option value="2" label="No" />
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div class="form-group col-md-4">
                        <label className="h6 "> Score </label>
                        <input
                          type="text"
                          class="form-control form-control-user"
                          required
                          value={getHouses.namematchingscore}
                          onChange={(e) => onInputChange(e, "namematchingscore")}
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Incentive GL </label>
                        <input type="text" class="form-control form-control-user" required value={getHouses.incentive_GL} onChange={(e) => onInputChange(e, "incentive_GL")} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Routing Number </label>
                        <input type="text" class="form-control form-control-user" required value={getHouses.routing_number} onChange={(e) => onInputChange(e, "routing_number")} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div class="form-group col-md-6">
                        <label className="h6 "> Commission Rate </label>
                        <input type="text" class="form-control form-control-user" required value={getHouses.com_rate} onChange={(e) => onInputChange(e, "com_rate")} />
                      </div>
                      <div class="form-group col-md-6">
                        <label className="h6 "> VAT (%) </label>
                        <input type="text" class="form-control form-control-user" required value={getHouses.vat} onChange={(e) => onInputChange(e, "vat")} />
                      </div>
                    </div>
                    {/* {error && <>{error}</>} */}
                    <div className="row">
                      <div className="col-md-2 mb-2">
                        <button
                          //to="/exchange-house-information"
                          type="submit"
                          className="btn btn-primary btn-block shadow"
                          //value={loading ? "Updating House..." : "Update"}
                          onClick={handleExchangeHouseEdit}
                          //<i class="far fa-edit mr-2 m"></i>
                        >
                          Update
                        </button>
                      </div>

                      <div className="col-md-2">
                        <Link to="/exchange-house-information" className="btn btn-secondary btn-block shadow">
                          <i class="far fa-window-close mr-2"></i>
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ExchangeHouseInformationEdit;
