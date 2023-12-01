import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const Product = () => {
  const sampleData = [
    {
      id: 1,
      Nameproduct:"Sản phẩm 1",
      price:"150",
      imgproduct:"https://i.pinimg.com/564x/bc/28/74/bc287434967e31b2fb340cb6140155ba.jpg",
      Category: "Danh mục 1",
    },
    {
      id: 2,
      Nameproduct:"Sản phẩm 2",
      price:"150",
      imgproduct:"https://i.pinimg.com/564x/bc/28/74/bc287434967e31b2fb340cb6140155ba.jpg",
      Category: "Danh mục 1",
    },
    {
      id: 3,
      Nameproduct:"Sản phẩm 3",
      price:"150",
      imgproduct:"https://i.pinimg.com/564x/bc/28/74/bc287434967e31b2fb340cb6140155ba.jpg",
      Category: "Danh mục 1",
    },
    {
      id: 1,
      Nameproduct:"Sản phẩm 1",
      price:"150",
      imgproduct:"https://i.pinimg.com/564x/bc/28/74/bc287434967e31b2fb340cb6140155ba.jpg",
      Category: "Danh mục 2",
    },
    {
      id: 2,
      Nameproduct:"Sản phẩm 2",
      price:"150",
      imgproduct:"https://i.pinimg.com/564x/bc/28/74/bc287434967e31b2fb340cb6140155ba.jpg",
      Category: "Danh mục 2",
    },

    {
      id: 3,
      Nameproduct:"Sản phẩm 3",
      price:"150",
      imgproduct:"https://i.pinimg.com/564x/bc/28/74/bc287434967e31b2fb340cb6140155ba.jpg",
      Category: "Danh mục 2",
    },
  ];
  const [appointments, setAppointments] = useState(sampleData);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredAppointments = appointments.filter((item) => {
    const customerName = item.Category.toLowerCase();

    return customerName.includes(searchValue.toLowerCase());
  });
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <SideBar></SideBar>

      {/* Content Wrapper */}
      <div id="content-wrapper">
        {/* Main Content */}
        <div id="content">
          {/* TopBar */}
          <TopBar></TopBar>

          {/* Container */}
          <div className="container-fluid" style={{ paddingTop:"100px"}}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Sản Phẩm</h1>
              <form className="d-none d-sm-inline-block form-inline my-auto navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-white border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    style={{
                      height: "40px",
                      width: "500px",
                      margin: " 10px 0",
                    }}
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </div>
              </form>
              <Link
                to="/addproduct"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-add fa-sm text-white-50" />
                Thêm
              </Link>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr className="text-left h-2">
                        <th scope="col" className="text-dark text-center">Mã Sản Phẩm</th>
                        <th scope="col" className="text-dark text-center">Danh Mục</th>
                        <th scope="col" className="text-dark text-center">Tên Sản Phẩm</th>
                        <th scope="col" className="text-dark text-center">Hình Ảnh Sản Phẩm</th>
                        <th scope="col" className="text-dark text-center">Giá</th>
                        <th scope="col" className="text-dark text-center">Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.map((service) => {
                        return (
                          <tr key={service.id}>
                            <td className="text-center">{service.id}</td>
                            <td className="text-center">{service.Category}</td>
                            <td className="text-center">{service.Nameproduct}</td>
                            <td className="text-center">
                              {" "}
                              <img
                 
                                width={40}
                                height={40}
                                src={service.imgproduct}
                              />
                            </td>
                            <td className="text-center">{service.price}</td>
                          

                            <td className="d-flex align-items-center justify-content-between">
                              <Link
                                to={`/updateproduct`}
                                className="btn btn-primary"
                              >
                                Sửa
                              </Link>
                              <button
                                className="btn btn-danger"
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end navigation">
                    <button
                      className="btn m-2 border border-0 bg-primary text-white"
                      type="button"
                    >
                      1
                    </button>
                    <button className="btn m-2 border border-0" type="button">
                      2
                    </button>
                    <button className="btn m-2 border border-0" type="button">
                      3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
