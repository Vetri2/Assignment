import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Product from "./components/Product";

function App() {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate("/products/new");
    };

    const handleEditProduct = (id) => {
        navigate(`/products/${id}/edit`);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductList
                            onAddProduct={handleAddProduct}
                            onEditProduct={handleEditProduct}
                        />
                    }
                />
                <Route
                    path="/products"
                    element={
                        <ProductList
                            onAddProduct={handleAddProduct}
                            onEditProduct={handleEditProduct}
                        />
                    }
                />
                <Route path="/products/new" element={<ProductForm />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/products/:id/edit" element={<ProductForm />} />
            </Routes>
        </Router>
    );
}

export default App;
