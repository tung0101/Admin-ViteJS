
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const UpdateProduct = () => {

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
              <form className="m-4" >
                <div className="row mb-2">
                  <div className="col-6">
                    <label htmlFor="idLoaiSanPham" className="form-label text-dark">
                      Chọn Danh Mục
                    </label>
                    <select
                      className="form-control"
                      id="idLoaiSanPham"
                      name="idLoaiSanPham"
 
                      required
                    >
                      
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
             
                      required
                    />
                  </div>
                  <div className="col-6">
                    <img
    
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
