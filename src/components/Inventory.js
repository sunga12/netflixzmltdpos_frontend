import React from 'react'
import '../styles/Inventory.css'

const Inventory = () => {
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