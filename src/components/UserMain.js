import React from 'react'
import '../styles/UserMain.css'

const UserMain = () => {
  return (
    <div className="user-main">
      <h1>New Order</h1>

      <button className="back-btn">
        BACK
      </button>
      <section className="products">
       <div className="products-grid">
        <div>
          PHOTOCOPYING
        </div>
        <div>
          PRINTING
        </div>
        <div>
          SCANNING
        </div>
        <div>
          LAMINATING
        </div>
        <div>
          BINDING
        </div>
        <div>
          OTHER
        </div>
       </div>
        <div className="summary">
          <h3>ORDER SUMMARY</h3>
          <div>
            Order body details
          </div>
          <div className="total">
            Total: 41.00
          </div>

        <div className="pay-btns">
          <button>
            CANCEL
          </button>

          <button>
            PAY
          </button>
        </div>

        </div>
      </section>
    </div>
  )
}

export default UserMain