import{ useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const ListAppointment = () => {
  // Giả định dữ liệu của bạn có cấu trúc như sau
  const sampleData = [
    {
      id: 1,
      customer: {
        name: "Khách Hàng 1",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 2,
      customer: {
        name: "Khách Hàng 2",
        phoneNumber: "987654321",
      },
      services: [
        { id: 3, name: "Dịch Vụ 3", price: 120 },
        { id: 4, name: "Dịch Vụ 4", price: 200 },
      ],
      date: "2023-12-02T10:30:00",
      status: "Chờ xác nhận",
    },
    {
      id: 3,
      customer: {
        name: "Khách Hàng 3",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 4,
      customer: {
        name: "Khách Hàng 4",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 5,
      customer: {
        name: "Khách Hàng 5",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 6,
      customer: {
        name: "Khách Hàng 6",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 7,
      customer: {
        name: "Khách Hàng 7",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 8,
      customer: {
        name: "Khách Hàng 8",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 9,
      customer: {
        name: "Khách Hàng 9",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    {
      id: 10,
      customer: {
        name: "Khách Hàng 10",
        phoneNumber: "123456789",
      },
      services: [
        { id: 1, name: "Dịch Vụ 1", price: 100 },
        { id: 2, name: "Dịch Vụ 2", price: 150 },
      ],
      date: "2023-12-01T08:00:00",
      status: "Chờ xác nhận",
    },
    // ... thêm dữ liệu khác nếu cần
  ];

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
              <h1 className="h3 mb-0 text-gray-800">Lịch Hẹn</h1>
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
                          Mã Lịch Hẹn
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Khách Hàng
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Số Điện Thoại
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Dịch Vụ
                        </th>
                        <th scope="col" className="text-dark text-center">
                          Ngày Đặt Lịch
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
                          <td>
                            {item.services.map((service) => (
                              <div key={service.id}>
                                {service.name} - {service.price}
                              </div>
                            ))}
                          </td>
                          <td>
                            {item.date.slice(0, 10)} {item.date.slice(11, 16)}
                          </td>
                          <td>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">{item.status}</option>
                              <option value={1}>Đã Hủy</option>
                              <option value={2}>Đã Thực Hiện</option>
                            </select>
                          </td>
                          <td>
                          </td>
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

export default ListAppointment;
