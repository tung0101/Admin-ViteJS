import { useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const ListService = () => {
  const sampleData = [
    {
      id: 1,
      NameUser: "User 1",
      post: "Bài Viết 1",
      posts: "Bài viết này hay quá",
      status: "Hiển Thị",
    },
    {
      id: 2,
      NameUser: "User 2",
      post: "Bài Viết 1",
      posts: "Bài viết này hay quá",
      status: "Hiển Thị",
    },
    {
      id: 3,
      NameUser: "User 3",
      post: "Bài Viết 1",
      posts: "Bài viết này hay quá",
      status: "Hiển Thị",
    },
    {
      id: 1,
      NameUser: "User 1",
      post: "Bài Viết 2",
      posts: "Bài viết này hay quá",
      status: "Hiển Thị",
    },

    {
      id: 2,
      NameUser: "User 2",
      post: "Bài Viết 2",
      posts: "Bài viết này hay quá",
      status: "Hiển Thị",
    },
    {
      id: 3,
      NameUser: "User 3",
      post: "Bài Viết 2",
      posts: "Bài viết này hay quá",
      status: "Hiển Thị",
    },
  ];
  const [appointments, setAppointments] = useState(sampleData);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredAppointments = appointments.filter((item) => {
    const customerName = item.post.toLowerCase();

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
          <div className="container-fluid" style={{ paddingTop: "100px" }}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Bình Luận</h1>
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
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr className="text-left h-2">
                        <th scope="col" className="text-dark text-center">
                          Mã Bình Luận
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Tên Người Dùng Bình Luận
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Bài Viết
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Nội Dung
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Thao Tác
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.map((service) => {
                        return (
                          <tr key={service.id}>
                            <td className="text-center">{service.id}</td>
                            <td className="text-center">{service.NameUser}</td>

                            <td className="text-center">{service.post}</td>
                            <td className="text-center">{service.posts}</td>
                            <td className="text-center">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected="">{service.status}</option>
                                <option value={1}>Ẩn</option>
                                <option value={2}>Hiển Thị</option>
                              </select>
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

export default ListService;
