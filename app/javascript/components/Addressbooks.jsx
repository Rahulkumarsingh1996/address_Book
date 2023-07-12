// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Addressbooks = () => {
//   const navigate = useNavigate();
//   const [addressbooks, setAddressbooks] = useState([]);
 

//   useEffect(() => {
//     const url = "/api/v1/addressbook/index";
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then((res) => setAddressbooks(res))
//       .catch(() => navigate("/"));
//   }, );

//   const deleteAddressbook = (id) => {
//     const url = `/api/v1/destroy/${id}`;
//     alert(id)
//     const token = document.querySelector('meta[name="csrf-token"]').content;

//     fetch(url, {
//       method: "DELETE",
//       headers: {
//         "X-CSRF-Token": token,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
          
//         }
//         throw new Error("Network response was not ok.");

//       })
//       .then(() => navigate("/addressbooks"))
//       .catch((error) => console.log(error.message));
//   };



  
//   return (
//     <>
//     {/* filter part start here */}
    
//       <section className="jumbotron jumbotron-fluid text-center">
//         <div className="container py-5">
//           <h1 className="display-4">Add a Book for every Moment</h1>
//         </div>
//       </section>
//       <div className="py-5">
//         <main className="container-fluid">
//           <div className="text-end mb-3">
//             <Link to="/addressbook" className="btn custom-button">
//               Create New
//             </Link>
//           </div>

//            <table className="table table-striped">
//                 <thead className="table-dark">
//                     <tr>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>Phone Number</th>
//                         <th>Age</th>
//                         <th>Gender</th>
//                         <th>Email</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {addressbooks.map((addressbook, index) => (
//                         <tr key={index}>
//                         <td>{addressbook.name}</td>
//                         <td>{addressbook.address}</td>
//                         <td>{addressbook.phone}</td>
//                         <td>{addressbook.age}</td>
//                         <td>{addressbook.gender}</td>
//                         <td>{addressbook.email}</td>
//                         <td><button type="button" className="btn btn-danger"
//                          onClick={()=>deleteAddressbook(addressbook.id)}>Delete List</button></td>
//                         </tr>
//                     ))} 
//                 </tbody>
//           </table>
//           <div className="row">
//           </div>
//           <Link to="/" className="btn btn-link">
//             Home
//           </Link>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Addressbooks;



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Addressbooks = () => {
  const navigate = useNavigate();
  const [addressbooks, setAddressbooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    const url = "/api/v1/addressbook/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setAddressbooks(res))
      .catch(() => navigate("/"));
  }, []);

  const deleteAddressbook = (id) => {
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/addressbooks"))
      .catch((error) => console.log(error.message));
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredAddressbooks = addressbooks.filter((addressbook) => {
    if (selectedFilter === "name") {
      return addressbook.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === "age") {
      return addressbook.age.toString().includes(searchTerm);
    } else if (selectedFilter === "gender") {
      return addressbook.gender.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Add a  AddressBook for any One</h1>
        </div>
      </section>
      <div className="py-5">
        <main className="container-fluid">
          <div className="text-end mb-3">
            <Link to="/addressbook" className="btn custom-button">
              Create New
            </Link>
          </div>

          <div className="">
          <div className="mb-3 w-25">
            <select
              className="form-select"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="">Filter By</option>
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="gender">Gender</option>
            </select>
          </div>

          <div className="mb-3 w-25">
            <input
              type="text"
              className="form-control"
              placeholder="Search here.."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          </div>
          <table className="table table-striped mt-4">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAddressbooks.map((addressbook, index) => (
                <tr key={index}>
                  <td className="text-info-emphasis">{addressbook.name}</td>
                  <td className="text-info-emphasis">{addressbook.address}</td>
                  <td className="text-info-emphasis">{addressbook.phone}</td>
                  <td className="text-info-emphasis">{addressbook.age}</td>
                  <td className="text-info-emphasis">{addressbook.gender}</td>
                  <td className="text-info-emphasis">{addressbook.email}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteAddressbook(addressbook.id)}
                    >
                      Delete List
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row"></div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Addressbooks;




