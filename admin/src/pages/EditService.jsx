import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";



const EditService = () => {


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
          <div className="container-fluid" style={{paddingTop:"100px" }}>
            <div className="d-sm-flex align-items-center justify-content-center mb-4">
              <h1 className="h3 mb-0 text-gray-800">Sửa Dịch Vụ</h1>
            </div>
            <form className="edit-service-form" >
              <div className="form-group">
                <label>Tên Dịch Vụ:</label>
                <input
                  type="text"
                  className="form-control"
                  name="tieuDe"
              
                />
              </div>

              {/* <div className="form-group">
                  <label>Giá:</label>
                  <input
                    type="text"
                    name="gia"
                    value={dichvuData.gia || ""}
                    onChange={handleInputChange}
                  />
                </div> */}

              <div className="form-group">
                <label>Giá:</label>
                <input
                  type="text"
                  name="hinhAnh"
                  className="form-control"
                />{" "}
              </div>

              <div className="form-group">
                <label>Ảnh:</label>
                <input
                  type="text"
                  name="hinhAnh"
                  className="form-control"
                />{" "}
                <br />
                <br />
                <img alt="" width={200} height={200} />
              </div>

              {/* Add more form groups for other properties of the service */}

              <button type="submit" className="btn btn-primary">
                Lưu thay đổi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
