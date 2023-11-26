
import { Routes, Route } from 'react-router-dom';
import ListUser from '../pages/ListUser';
import DashBoard from '../pages/DashBoard';
import ListBlog from '../pages/ListBlog';
import AddBlog from '../pages/AddBlog';
import ListAppointment from '../pages/ListAppointment';
import ListService from '../pages/ListService';
import ListComment from '../pages/ListComment';
import AddService from '../pages/AddService';
import Thongke from '../pages/Thongke';
import UpdateBlog from '../pages/UpdateBlog';
import EditService from '../pages/EditService';
import Category from '../pages/Category';
import AddCategory from '../pages/AddCategory';
import UpdateCategory from '../pages/UpdateCategory';
import UpdateUser from '../pages/UpdateUser';
import Product from '../pages/Product';
import AddProduct from '../pages/AddProduct';
import UpdateProduct from '../pages/UpdateProduct';
import ListOrder from '../pages/ListOrder';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/thongke" element={<Thongke />} />
      <Route path="/listuser" element={<ListUser />} />
      <Route path="/updateuser/:idUser" element={<UpdateUser />} />
      <Route path="/listblog" element={<ListBlog />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/updateblog/:idBaiViet" element={<UpdateBlog />} />
      <Route path="/listservice" element={<ListService />} />
      <Route path="/addservice" element={<AddService />} />
      <Route path="/editservice/:idDichVu" element={<EditService />} />
      <Route path="/listappointment" element={<ListAppointment />} />
      <Route path="/listorder" element={<ListOrder />} />
      <Route path="/listcomment" element={<ListComment />} />
      <Route path="/category" element={<Category />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/updatecategory/:idLoaiSanPham" element={<UpdateCategory />} />
      <Route path="/product" element={<Product />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/updateproduct/:idSanPham" element={<UpdateProduct />} />
    </Routes>
  );
};

export default AppRouter;
