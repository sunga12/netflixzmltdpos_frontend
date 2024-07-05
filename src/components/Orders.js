import React, { useEffect } from 'react'
import '../styles/Orders.css'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById, getOrderItems, getOrders } from '../redux/orders/ordersSlice';
import { useParams } from 'react-router-dom';

const Orders = () => {
  
  const { orders, order_items, order, isLoading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const userId = useParams();
  const user_num = userId.userId;

  const order_num = userId.orderId;

  useEffect(() => {
    dispatch(getOrders(user_num));
    dispatch(getOrderItems(user_num, order_num));
    dispatch(getOrderById(user_num, order_num));
  }, [dispatch, user_num, order_num]);
  
  if (isLoading) return <div>Loading...</div>;

  return (
    <div >
      <h1>Orders</h1>
      <div className="home-search">
        <button>BACK</button>
        <div className="search-bar">search bar</div>
      </div>

      <section className="orders-tables">
        <table className="all-orders">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>User ID</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          {orders.map((order) => {
            return ( 
              <tr>
                <td>
                {order.date}
                </td>
                <td>
                {order.total}
                </td>
                <td>
                  {order.user_id}
                </td>
                <td>
                  {order.created_at}
                </td>
              </tr>
                )
          })}
        </table>
        <section className="order-details">
          <table>
        <thead>
              <tr>
                  <th>Order Details</th>
                  <th>Amount</th>
              </tr>
          </thead>
              {order_items.map((orderitem) => {
            return ( 
              <tr>
                <td>
                {orderitem.id}
                </td>
                <td>
                {orderitem.price}
                </td>
              </tr>
                )
            })}
              <td>
                TOTAL:
              </td>
              <td>
                {order.total}
              </td>
        </table>
        </section>
      </section>
    </div>
  )
}

export default Orders