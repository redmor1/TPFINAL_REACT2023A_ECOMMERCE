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
import CreateProduct from "./pages/Products/CreateProduct/CreateProduct";
import EditProduct from "./pages/Products/EditProduct/EditProduct";
import CartDetails from "./pages/CartDetails/CartDetails";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./pages/Auth/RequireAuth";
import RedirectIfAuthenticated from "./pages/Auth/RedirectIfAuthenticated";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route
                path="/products/create"
                element={
                  <RequireAuth>
                    <CreateProduct />
                  </RequireAuth>
                }
              />
              <Route
                path="/products/edit/:id"
                element={
                  <RequireAuth>
                    <EditProduct />
                  </RequireAuth>
                }
              />
              <Route path="/cart-detail" element={<CartDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
