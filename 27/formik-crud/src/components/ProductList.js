import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = async (id) => {
        try {
            // Delete the product using an API call
            await fetch(`/api/products/${id}`, {
                method: "DELETE",
            });

            // Refresh the product list
            fetch("/api/products")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error(error));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={() => navigate("/products/add")}>
                Add Product
            </button>
        </div>
    );
};

export default ProductList;
