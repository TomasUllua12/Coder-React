import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/mockData';
import ItemList from '../components/ItemList';
import '../components/ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(categoryId || "all")
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="item-list-container">
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2>
        {categoryId 
          ? `Categoría: ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
          : "Todos los productos"
        }
      </h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;