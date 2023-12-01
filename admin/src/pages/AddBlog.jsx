import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const AddBlog = () => {
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
              <h1 className="h3 mb-0 text-gray-800">THÊM BÀI VIẾT</h1>
            </div>

            <div className="col-xl-12 col-lg-4">
              <form className="m-4">
                <div className="row mb-2">
                  <div className="col-4">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Tên Bài Viết{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="tieuDe"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-4">
                    <label htmlFor="formFile" className="form-label text-dark">
                      Hình Ảnh
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="formFile"
                      name="hinhAnh"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-dark"
                    >
                      Nội Dung
                    </label>
                    <textarea
                      className="form-control"
                      id="floatingTextarea"
                      rows={5}
                      name="noiDung"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Sửa bài viết
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
