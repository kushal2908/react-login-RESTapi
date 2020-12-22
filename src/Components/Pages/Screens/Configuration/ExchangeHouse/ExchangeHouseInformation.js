import React, { useEffect, useState } from "react";
import Layout from "../../../../Header/Layout";
import { Link } from "react-router-dom";
import { httpGeneral } from "../../../../../config";

import SweetAlert from "react-bootstrap-sweetalert";

function ExchangeHouseInformation(props) {
  const [loading, setLoading] = useState(false);
  const [houses, setHouses] = useState([]);
  /////////////////////
  //SEARCH FILTER HOOKS
  /////////////////////
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    setLoading(true);
    const res = await httpGeneral.get("/exchangehouse");
    setLoading(false);
    setHouses(res.data.reverse());
  };

  const deleteHouse = async (id) => {
    await httpGeneral.delete(`exchangehouse/${id}/`);
    fetchHouses();
  };

  //FOR SEACH
  useEffect(() => {
    //setFilter(houses.filter((house) => house.company_name.toLowerCase().includes(search.toLowerCase())));
    setFilter(houses.filter((house) => house.company_name.toLowerCase().includes(search.toLowerCase())));
  }, [search, houses]);
  console.log();

  //DELETE-POP-UP

  return (
    <div>
      <Layout>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <div className="module-header text-dark bg-light">
              <div className="row align-items-center">
                <div className="col-md-9">
                  <h2 style={{ fontWeight: "500" }}> Exchange House Information </h2>
                  <p>List of exchange houses</p>
                </div>
                <div className="col-md-3 text-right ">
                  <Link to="/exchange-house-information-add" className="btn btn-primary shadow">
                    <i class="fas fa-plus fa-fw mr-1"></i>
                    Add Exchange House
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div className="input-group mb-3">
              <div className="col-md-8"></div>
              <div className="col-md-4 p-0">
                <input onChange={(e) => setSearch(e.target.value)} className="form-control shadow-sm" placeholder="Search..." />
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered exchnage-house-table" id="dataTable" width="100%">
                <thead className="bg-light text-info">
                  <tr className="text-center" style={{ fontSize: "14px" }}>
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
                {filter.map((house) => (
                  <tbody key={house.id} className="align-items-center">
                    <tr style={{ textAlign: "center", fontSize: "13px" }}>
                      <td> {house.company_name}</td>
                      <td> {house.MTO_id} </td>
                      <td> {house.bank_account_number} </td>
                      <td> {house.cash_GL} </td>
                      <td> {house.routing_number}</td>
                      <td> {house.FC_bank_account}</td>
                      <td> {house.incentive_GL}</td>
                      <td> {house.com_rate}</td>
                      <td className="text-center d-flex" style={{ border: "none" }}>
                        <Link to={`/exchange-house-information-edit-${house.id}`} className="btn btn-sm btn-warning mx-1 rounded-pill shadow">
                          <i class="fas fa-pen-square"></i>
                        </Link>
                        <Link className="btn btn-danger btn-sm rounded-pill shadow" onClick={() => deleteHouse(house.id)}>
                          <i class="fas fa-trash text-white"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ExchangeHouseInformation;

{
  /* <Link className="btn btn-danger btn-sm rounded-pill shadow" onClick={() => deleteHouse(house.id)}>
  <i class="fas fa-trash"></i>
</Link>; */
}
