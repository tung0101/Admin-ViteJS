import { useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const ListOrder = () => {
  // Giả định dữ liệu của bạn có cấu trúc như sau
  const sampleData = [
    {
      id: 1,
      customer: {
        name: "Khách Hàng 1",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 2,
      customer: {
        name: "Khách Hàng 2",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 3,
      customer: {
        name: "Khách Hàng 3",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 4,
      customer: {
        name: "Khách Hàng 4",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },

    {
      id: 5,
      customer: {
        name: "Khách Hàng 5",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 6,
      customer: {
        name: "Khách Hàng 6",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 7,
      customer: {
        name: "Khách Hàng 7",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },

        {
      id: 8,
      customer: {
        name: "Khách Hàng 8",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 9,
      customer: {
        name: "Khách Hàng 9",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    {
      id: 10,
      customer: {
        name: "Khách Hàng 10",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },

    {
      id: 11,
      customer: {
        name: "Khách Hàng 11",
        phoneNumber: "123456789",
        address: "Quận 2, Hồ Chí Minh",
      },
      services: [
        { id: 1, name: "Sản Phẩm 1", price: 100 },
        { id: 2, name: "Sản Phẩm 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Đã nhận đơn",
    },
    
  ];
  const calculateTotalPrice = (services) => {
    return services.reduce((total, service) => total + service.price, 0);
  };

  const [appointments, setAppointments] = useState(sampleData);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredAppointments = appointments.filter((item) => {
    const customerName = item.customer.name.toLowerCase();
    const phoneNumber = item.customer.phoneNumber.toLowerCase();

    return (
      customerName.includes(searchValue.toLowerCase()) ||
      phoneNumber.includes(searchValue.toLowerCase())
    );
  });
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <SideBar />

      {/* Content Wrapper */}
      <div id="content-wrapper">
        {/* Main Content */}
        <div id="content">
          {/* TopBar */}
          <TopBar />

          {/* Container */}
          <div className="container-fluid" style={{ paddingTop: "100px" }}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Đơn hàng</h1>
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

            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-3 text-center">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="text-dark text-center">
                          Mã Đơn Hàng
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Khách Hàng
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Số Điện Thoại
                        </th>
                        <th scope="col" className="text-dark text-center">
                         Địa chỉ
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Ngày Mua
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Sản Phẩm
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Tổng Tiền
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Trạng Thái
                        </th>
                        <th scope="col" className="text-dark text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.map((item) => (
                        <tr key={item.id}>
                          <td scope="row">{item.id}</td>
                          <td>{item.customer.name}</td>
                          <td>{item.customer.phoneNumber}</td>
                          <td>{item.customer.address}</td>
                          <td>
                            {item.date.slice(0, 10)} {item.date.slice(11, 16)}
                          </td>
                          <td>
                            {item.services.map((service) => (
                              <div key={service.id}>
                                {service.name} - {service.price}
                              </div>
                            ))}
                          </td>
                          <td>{calculateTotalPrice(item.services)}</td>
                          <td>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">{item.status}</option>
                              <option value={1}>Đã Nhận Hàng</option>
                              <option value={2}>Đang Giao</option>
                              <option value={3}>Đã Nhận Đơn</option>
                            </select>
                          </td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
