import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../User/hooks/userContext";
import userHouseData from "./hooks/userHouseData";
import deleteHouse from "./hooks/deleteHouse";

const UserRentalHouseList = () => {
  const { user } = useUserContext();
  const [data, loading, getUserHouseData] = userHouseData(user);
  const [deleteHouseData] = deleteHouse(getUserHouseData);
  const navigate = useNavigate();
  useEffect(() => {
    getUserHouseData();
  }, [user]);
  const deleteClickHandle = (house) => {
    if (confirm("You want to delete?")) {
      deleteHouseData(house.id);
    }
  };

  const editClickHandle = (house) => {
    navigate(`/properties/${house.id}/edit`, { state: { house: house } });
  };
  return (
    <>
      {loading == true && <div>Loading...</div>}
      {data.length > 0 ? (
        <div className="container">
          <div className="d-flex justify-content-end mt-4">
            <Link to="/properties/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </Link>
          </div>
          <div className="d-flex mt-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Owner Contact Number</th>
                  <th>City</th>
                  <th>Rental Price Per Month</th>
                  <th>Rental Type</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((house) => {
                  return (
                    <tr key={house.id}>
                      <td>{house.owner_name}</td>
                      <td>{house.owner_contact_number}</td>
                      <td>{house.city}</td>
                      <td>{house.rental_price}</td>
                      <td>{house.property_type}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => editClickHandle(house)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteClickHandle(house)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            className="d-flex justify-content-center"
            style={{ height: "100vh" }}
          >
            <div className="align-self-center">
              <div className="flex-column" style={{backgroundColor:'#f2f1f0',padding:'20px'}}>
            <Link style={{marginLeft:'80px',textDecoration:'none'}} to="/properties/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
              <span style={{paddingLeft:'15px',fontSize:'22px'}}>Add</span>
            </Link>
            <h6 style={{ color: "#fea605",marginTop:'10px' }}>
              No any rental house advertisement
            </h6>
            </div>
          </div>

          </div>
        </div>
      )}
    </>
  );
};

export default UserRentalHouseList;
