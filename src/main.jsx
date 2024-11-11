import React from 'react';
import { AuthProvider } from './AuthContext';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CartPage from './pages/client/cart/CartPage';
import HomePage from './pages/HomePage';
import './index.css';
import './i18n';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './pages/client/account/Login';
import Register from './pages/client/account/Register';
import ProductVariantPage from './pages/admin/product/ProductVariantPage';
import ProductVariantForm from './pages/admin/product/ProductVariantForm';

import CouponList from './pages/admin/coupon/CouponList';
import CouponForm from './pages/admin/coupon/CouponForm';
import Brand from './pages/admin/brand/brandpage';
import CategoryList from './pages/admin/category/categoryList';
import CategoryForm from './pages/admin/category/categoryForm';
// import DashboardAdmin from './pages/admin/DashboardAdmin';
import NewsList from './pages/admin/news/NewsList';
import NewsForm from './pages/admin/news/NewsForm';
import AttributePage from './pages/admin/attribute/attributePage';
import RoleList from './pages/admin/role/RoleList';
import RoleForm from './pages/admin/role/RoleForm';
import CheckoutPage from './pages/client/checkout/CheckoutPage';
import ProductList2 from './pages/client/product/ProductList2';
import ProductDetail2 from './pages/client/product/ProductDetail2';
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
import ProductList from './pages/admin/product/ProductList'; // Thêm import ProductList
// import ProductForm from './pages/admin/product/ProductForm';
import ProductRating from './pages/admin/product/ProductRating';
import UpdateProduct from './pages/admin/product/UpdateProduct';

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
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/coupon" element={<CouponArea />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Profile />} />
              <Route path="*" element={<NotFoundPages />} />
              <Route path="/news/news/:id" element={<NewDetail />} />
              <Route path="category/:cateId/*" element={<CategoryProduct />} />
              <Route
                path="home/category/:cateId/*"
                element={<CategoryProduct />}
              />
            </Route>
            {/* Admin Routes */}
            <Route path="/admin">
              <Route path="brand" element={<Brand />} />
              <Route path="category" element={<CategoryList />} />
              <Route path="add-category" element={<CategoryForm />} />
              <Route path="update-category/:id" element={<CategoryForm />} />
              <Route path="coupons" element={<CouponList />} />
              <Route path="coupons/new" element={<CouponForm />} />
              <Route path="coupons/edit/:id" element={<CouponForm />} />
              <Route path="news" element={<NewsList />} />
              <Route path="add-news" element={<NewsForm />} />
              <Route path="edit-news/:id" element={<NewsForm />} />
              <Route path="page/attributes" element={<AttributePage />} />
              <Route path="user-list" element={<UserList />} />
              <Route path="add-user" element={<UserForm />} />
              <Route path="update-user/:userId" element={<UserForm />} />
              <Route path="roles" element={<RoleList />} />
              <Route path="roles/new" element={<RoleForm isEdit={false} />} />
              <Route
                path="roles/edit/:id"
                element={<RoleForm isEdit={true} />}
              />
              <Route
                path="products/new"
                element={<UpdateProduct isEdit={false} />}
              />
              <Route
                path="products/edit/:id"
                element={<UpdateProduct isEdit={true} />}
              />
              <Route
                path="product-variants/:id"
                element={<ProductVariantPage />}
              />
              <Route
                path="add-product-variants/:id"
                element={<ProductVariantForm />}
              />
              <Route
                path="edit-product-variant/:variantId"
                element={<ProductVariantForm />}
              />
            </Route>
            {/* Admin Product Routes */}
            <Route path="/admin/products" element={<ProductList />} />{' '}
            <Route
              path="/admin/rating-product/:prodId"
              element={<ProductRating />}
            />{' '}
            {/* Client Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
