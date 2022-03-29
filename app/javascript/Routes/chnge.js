




 <div
                className="row p-3 mb-3"
                style={{ border: "1px solid #ced4da" }}
              >
                <div>
                <label className="form-check-label">Type</label>
                </div>

                 <div className="col-md-4 col-xxl-4 col-12 form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="user_type"
                    value="Owner"
                    id="owner"
                    onChange={(e) => handleChange(e)}
                    checked={ data.user_type=== "Owner"?true:false }
                  />
                  <label className="form-check-label" htmlFor="owner">
                    Owner
                  </label>
                </div>
                <div className="col-md-4 col-xxl-4 col-12 form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="user_type"
                    value="Agent"
                    id="Agent"
                    onChange={(e) => handleChange(e)}
                    checked={data.user_type=== "Agent"?true:false }
                  />
                  <label className="form-check-label" htmlFor="Agent">
                  Agent
                  </label>
                </div>
                </div>