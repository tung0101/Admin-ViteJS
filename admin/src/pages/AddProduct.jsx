import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { useNavigate} from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    idLoaiSanPham: "",
    tenSanPham: "",
    hinhSanPham: "",
    gia: "",
    mota: "",
  });
  const [danhMucOptions, setDanhMucOptions] = useState([]);
  
  useEffect(() => {
    // Fetch danh mục từ API khi component được render
    const fetchDanhMucOptions = async () => {
      try {
        const response = await axios.get("http://localhost:8000/loaisanpham");
        setDanhMucOptions(response.data);
      } catch (error) {
        console.error("Error fetching danh mục:", error);
      }
    };

    fetchDanhMucOptions();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      await axios.post("http://localhost:8000/sanpham", formData);
      navigate("/product");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

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
            <div className="d-sm-flex align-items-center justify-content-center mb-4">
              <h1 className="h3 mb-0 text-gray-800">Thêm Sản Phẩm</h1>
            </div>

            <div className="col-xl-12 col-lg-4">
              <form className="m-4" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-6">
                  <label htmlFor="idLoaiSanPham" className="form-label text-dark">
                      Chọn Danh Mục
                    </label>
                    <select
                      className="form-control"
                      id="idLoaiSanPham"
                      name="idLoaiSanPham"
                      value={formData.idLoaiSanPham}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Chọn danh mục
                      </option>
                      {danhMucOptions.map((danhMuc) => (
                        <option key={danhMuc.idLoaiSanPham} value={danhMuc.idLoaiSanPham}>
                          {danhMuc.tenLoai}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Tên sản phẩm
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="tenSanPham"
                      value={formData.tenSanPham}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Hình Ảnh Sản Phẩm
                    </label>
                    <input
                      className="col-6 form-control"
                      id="description"
                      name="hinhSanPham"
                      value={formData.hinhSanPham}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={formData.hinhSanPham}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Giá
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="gia"
                      value={formData.gia}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Mô tả
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="mota"
                      value={formData.mota}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
