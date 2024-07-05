import React, { useEffect } from 'react'
import '../styles/Inventory.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/products/productsSlice';

const Inventory = () => {
  
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Inventory</h1>
      <div className="home-search">
        <div className="search-bar">search bar</div>
        <button>BACK</button>
      </div>
   <div className="inventory">
    <section className="left">
    <table className="all-products">
      <thead>
        <h3>PRODUCTS</h3>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Current Level</th>
                <th>Reorder Level</th>
            </tr>
        </thead>
        {products.map((product) => {
            return ( 
              <tr>
                <td>
                  {product.name}
                </td>
                <td>
                  {product.price}
                </td>
                <td>
                  {product.stocklevel}
                </td>
                <td>
                  {product.reorderlevel}
                </td>
                <td>
                  {product.category}
                </td>
              </tr>
                )
            })}
              
        </table>
        <div className="product-btns">
          <button>
            Delete Product
          </button>
          <button>
            Edit Product
          </button>
          <button>
            New Product
          </button>
        </div>
    </section>

    <section className="right">
    <table className="stock-items">
      <thead>
      <h3>STOCK UPDATES</h3>

        <tr>
            <th>Product</th>
            <th>Change Type</th>
            <th>Quantity</th>
        </tr>
      </thead>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>
          <button>
            New Stock Change
          </button>
        </table>
 
      <table className="all-orders">
        <thead>
          <h3>ALERTS</h3>
              <tr>
                  <th>Product</th>
                  <th>Reorder Level</th>
                  <th>Current Level</th>
              </tr>
          </thead>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>
              <tr>
                <td>
                21/05/2024
                </td>
                <td>
                  15
                </td>
                <td>
                  20
                </td>
              </tr>

        </table>

        </section>

</div>  
    </div>
  )
}

export default Inventory