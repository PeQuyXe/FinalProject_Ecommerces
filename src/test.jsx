import React from 'react';
import { AuthProvider } from './AuthContext';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CartPage from './pages/client/cart/CartPage';
// import CartDropdown from './pages/client/cart/CartDropdown';
import HomePage from './pages/HomePage';
import './index.css';
import './i18n';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './pages/client/account/Login';
import Register from './pages/client/account/Register';
// import MyAccount from './pages/client/account/MyAccount';

import ProductVariantsList from './pages/admin/product/ProductVariantsList';
import CouponList from './pages/admin/coupon/CouponList';
import CouponForm from './pages/admin/coupon/CouponForm';
import Brand from './pages/admin/brand/brandpage';
import CategoryList from './pages/admin/category/categoryList';
import CategoryForm from './pages/admin/category/categoryForm';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import NewsList from './pages/admin/news/NewsList';
import NewsForm from './pages/admin/news/NewsForm';
import AttributePage from './pages/admin/attribute/attributePage';
import RoleList from './pages/admin/role/RoleList';
import RoleForm from './pages/admin/role/RoleForm';
import CheckoutPage from './pages/client/checkout/CheckoutPage';
import ProductList2 from './pages/client/product/ProductList2';
import ProductDetail2 from './pages/client/product/ProductDetail2';
// import ProductDetail3 from './pages/client/product/ProductDetail3';
import NotFoundPages from './pages/NotFoundPages';
import { ToastContainer } from 'react-toastify';
import ContactPage from './pages/client/contact/ContactPage';
import CouponArea from './pages/client/coupons/CouponArea';
import NewsPage from './pages/client/news/NewsPage';
import NewDetail from './pages/client/news/NewDetail';
import CategoryProduct from './pages/client/category/CategoryProduct';
import Profile from './pages/client/account/Profile';
import UserList from './pages/admin/user/UserList';
import UserForm from './pages/admin/user/UserForm';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductList2 />} />
              <Route
                path="/product/:productId/*"
                element={<ProductDetail2 />}
              />
              {/* <Route
                path="/product/:productId/*"
                element={<ProductDetail3 />}
              /> */}

              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/coupon" element={<CouponArea />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Profile />} />
              <Route path="*" element={<NotFoundPages />} />
              <Route path="news/news/:id" element={<NewDetail />} />
              <Route path="/admin/brand" element={<Brand />} />
              <Route path="/admin/category" element={<CategoryList />} />
              <Route path="/admin/add-category" element={<CategoryForm />} />
              <Route
                path="/admin/update-category/:id"
                element={<CategoryForm />}
              />

              <Route path="/admin/coupons" element={<CouponList />} />
              <Route path="/admin/coupons/new" element={<CouponForm />} />
              <Route path="/admin/coupons/edit/:id" element={<CouponForm />} />

              <Route path="/admin/news" element={<NewsList />} />
              <Route path="/admin/add-news" element={<NewsForm />} />
              <Route path="/admin/edit-news/:id" element={<NewsForm />} />

              <Route path="/admin/dashboard" element={<DashboardAdmin />} />
              <Route path="category/:cateId/*" element={<CategoryProduct />} />
              <Route
                path="/home/category/:cateId/*"
                element={<CategoryProduct />}
              />
              <Route
                path="/admin/page/attributes"
                element={<AttributePage />}
              />
            </Route>
            <Route
              path="/admin/product-variants/:prodId"
              element={<ProductVariantsList />}
            />
            <Route path="/admin/user-list" element={<UserList />} />
            <Route path="/admin/add-user" element={<UserForm />} />
            <Route path="/admin/update-user/:userId" element={<UserForm />} />

            <Route path="/admin/roles" element={<RoleList />} />

            <Route path="/roles/new" element={<RoleForm isEdit={false} />} />
            <Route
              path="/roles/edit/:id"
              element={<RoleForm isEdit={true} />}
            />
            <Route path="/" element={<RoleList />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
