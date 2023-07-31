import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails/ProductDetails";
import CreateProduct from "./pages/Admin/CreateProduct/CreateProduct";
import CreateCategory from "./pages/Admin/CreateCategory/CreateCategory";
import EditCategory from "./pages/Admin/EditCategory/EditCategory";
import EditProduct from "./pages/Admin/EditProduct/EditProduct";
import CartDetails from "./pages/CartDetails/CartDetails";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./pages/Auth/RequireAuth";
import RedirectIfAuthenticated from "./pages/Auth/RedirectIfAuthenticated";
import RequireAdmin from "./pages/Auth/RequireAdmin";
import Admin from "./pages/Admin/Admin";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route
                  path="/login"
                  element={
                    <RedirectIfAuthenticated>
                      <Login />
                    </RedirectIfAuthenticated>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <RedirectIfAuthenticated>
                      <Register />
                    </RedirectIfAuthenticated>
                  }
                />
                <Route path="/categories" element={<Categories />} />
                <Route
                  path="/categories/create"
                  element={
                    <RequireAuth>
                      <RequireAdmin>
                        <CreateCategory />
                      </RequireAdmin>
                    </RequireAuth>
                  }
                />
                <Route
                  path="/categories/edit/:id"
                  element={
                    <RequireAuth>
                      <RequireAdmin>
                        <EditCategory />
                      </RequireAdmin>
                    </RequireAuth>
                  }
                />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route
                  path="/products/create"
                  element={
                    <RequireAuth>
                      <RequireAdmin>
                        <CreateProduct />
                      </RequireAdmin>
                    </RequireAuth>
                  }
                />
                <Route
                  path="/products/edit/:id"
                  element={
                    <RequireAuth>
                      <RequireAdmin>
                        <EditProduct />
                      </RequireAdmin>
                    </RequireAuth>
                  }
                />
                <Route path="/cart-detail" element={<CartDetails />} />
                <Route
                  path="/admin"
                  element={
                    <RequireAuth>
                      <RequireAdmin>
                        <Admin />
                      </RequireAdmin>
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
