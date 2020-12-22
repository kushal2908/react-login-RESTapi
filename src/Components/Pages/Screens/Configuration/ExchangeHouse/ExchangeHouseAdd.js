import React, { useState } from "react";
import { httpGeneral } from "../../../../../config";
import { Link } from "react-router-dom";
import Layout from "../../../../Header/Layout";

function ExchangeHouseAdd(props) {
  const name = useFormInput("");
  const mobile_Num = useFormInput("");
  const address = useFormInput("");
  const bank_ac_num = useFormInput("");
  const cash_gl = useFormInput("");
  const nostro_ac = useFormInput("");
  const ex_house_id = useFormInput("");
  const manual_data_upload = useFormInput("");
  const rcv_other_ex_house = useFormInput("");
  const score = useFormInput("");
  const incentive_gl = useFormInput("");
  const routing_num = useFormInput("");
  const commission_rate = useFormInput("");
  const vat = useFormInput("");

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //Posting to API
  const handleExhacheHouseAdd = (e) => {
    setError(null);
    setLoading(true);

    e.preventDefault();

    const exchange_house_values = {
      company_name: name.value,
      mobile_number: mobile_Num.value,
      address: address.value,
      bank_account_number: bank_ac_num.value,
      cash_GL: cash_gl.value,
      FC_bank_account: nostro_ac.value,
      MTO_id: ex_house_id.value,
      is_manual_data_upload_managed: manual_data_upload.value,
      received_from_others_mto: rcv_other_ex_house.value,
      namematchingscore: score.value,
      incentive_GL: incentive_gl.value,
      routing_number: routing_num.value,
      com_rate: commission_rate.value,
      vat: vat.value,
    };

    httpGeneral
      .post("/exchangehouse", exchange_house_values)
      .then((res) => {
        setLoading(false);
        props.history.push("/exchange-house-information");
        setSuccess(
          <div className="alert alert-success shadow-sm " role="alert">
            <p className="m-0 font-weight-bold text-center"> Exchange House Information Successfully Added </p>
          </div>,
        );
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          setError(error.response.data.message);
        } else {
          setError(
            <div className="alert alert-danger shadow-sm" role="alert">
              <p className="font-weight-bold text-danger text-center mb-0"> Error!... please check the values again </p>
            </div>,
          );
        }
      });
  };

  return (
    <div>
      <Layout>
        <Link to="/exchange-house-information" className="btn btn-info mb-3 shadow">
          <i class="fas fa-chevron-left mr-1 fa-fw"></i>
          Back
        </Link>

        <div class="card o-hidden border-0 shadow-lg m-auto" style={{ width: "100%" }}>
          <div className="card-header">
            <h2 className="text-info" style={{ fontWeight: "500" }}>
              Add Exchange House
            </h2>
          </div>

          <div class="card-body p-0 ">
            <div className="row">
              <div className="col-md-12">
                <div className="p-4">
                  <form className="">
                    <div class="form-group">
                      <label className="h6 "> Exchange House Name </label>
                      <input type="text" class="form-control form-control-user" {...name} autoFocus />
                    </div>

                    <div className="form-group row">
                      <div class="form-group col-md-6">
                        <label className="h6 "> Mobile Number </label>
                        <input type="text" class="form-control form-control-user" {...mobile_Num} />
                      </div>
                      <div class="form-group col-md-6">
                        <label className="h6 "> Address </label>
                        <textarea type="text" class="form-control form-control-user" {...address} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div class="form-group col-md-4">
                        <label className="h6 "> Bank Account Number </label>
                        <input type="text" class="form-control form-control-user" {...bank_ac_num} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Cash GL </label>
                        <input type="text" class="form-control form-control-user" {...cash_gl} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Nostro Account </label>
                        <input type="text" class="form-control form-control-user" {...nostro_ac} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div class="form-group col-md-4">
                        <label className="h6 "> Exchange House ID </label>
                        <input type="text" class="form-control form-control-user" {...ex_house_id} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Is Manual Data Upload Managed </label>
                        <div class="input-group mb-3">
                          <select class="custom-select" {...manual_data_upload}>
                            <option selected>.....</option>
                            <option value="1" label="Yes" />
                            <option value="2" label="No" />
                          </select>
                        </div>
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Received from other exchange house </label>
                        <div class="input-group mb-3">
                          <select class="custom-select" {...rcv_other_ex_house}>
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
                        <input type="text" class="form-control form-control-user" {...score} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Incentive GL </label>
                        <input type="text" class="form-control form-control-user" {...incentive_gl} />
                      </div>
                      <div class="form-group col-md-4">
                        <label className="h6 "> Routing Number </label>
                        <input type="text" class="form-control form-control-user" {...routing_num} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div class="form-group col-md-6">
                        <label className="h6 "> Commission Rate </label>
                        <input type="number" class="form-control form-control-user" {...commission_rate} />
                      </div>
                      <div class="form-group col-md-6">
                        <label className="h6 "> VAT (%) </label>
                        <input type="number" class="form-control form-control-user" {...vat} />
                      </div>
                    </div>
                    {error && <>{error}</>}
                    {success && <>{success}</>}
                    <div className="row">
                      <div className="col-md-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block shadow"
                          value={loading ? "Adding House..." : "Create"}
                          onClick={handleExhacheHouseAdd}
                          disable={loading}>
                          <i class="fas fa-plus mr-2"></i>
                          Create
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

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleSubmit,
  };
};

export default ExchangeHouseAdd;
