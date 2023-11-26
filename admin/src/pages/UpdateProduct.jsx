import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { idSanPham } = useParams();
  const [danhMucOptions, setDanhMucOptions] = useState([]);
  
  useEffect(() => {
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

  const [blogData, setBlogData] = useState({
    idLoaiSanPham: "",
    tenSanPham: "",
    hinhSanPham: "",
    gia: "",
    mota: "",
  });

  useEffect(() => {
    fetchData();
  }, [idSanPham]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/sanpham/${idSanPham}`);
      setBlogData({ ...response.data });
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: name === "idLoaiSanPham" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/sanpham/${idSanPham}`, blogData)
      .then(() => {
        navigate("/product");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper">
        <div id="content">
          <TopBar></TopBar>
          <div className="container-fluid" style={{ paddingTop: "100px" }}>
            <div className="d-sm-flex align-items-center justify-content-center mb-4">
              <h1 className="h3 mb-0 text-gray-800">SỬA SẢN PHẨM</h1>
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
                      onChange={handleInputChange}
                      value={blogData.idLoaiSanPham}
                      required
                    >
                      <option value="">
                        {blogData.tenLoai}
                      </option>
                      {danhMucOptions.map((danhMuc) => (
                        <option
                          key={danhMuc.idLoaiSanPham}
                          value={danhMuc.idLoaiSanPham}
                        >
                          {danhMuc.tenLoai}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="serviceTitle" className="form-label text-dark">
                      Tên sản phẩm
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="tenSanPham"
                      value={blogData.tenSanPham}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="serviceTitle" className="form-label text-dark">
                      Hình Ảnh Sản Phẩm
                    </label>
                    <input
                      className="col-6 form-control"
                      id="description"
                      name="hinhSanPham"
                      value={blogData.hinhSanPham}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={blogData.hinhSanPham}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="serviceTitle" className="form-label text-dark">
                      Giá
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="gia"
                      value={blogData.gia}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="serviceTitle" className="form-label text-dark">
                      Mô tả
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="mota"
                      value={blogData.mota}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Sửa
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
