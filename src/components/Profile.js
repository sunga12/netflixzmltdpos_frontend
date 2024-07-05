import React, { useEffect } from 'react'
import '../styles/Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserbyId, getUsers } from '../redux/users/usersSlice';
import { useParams } from 'react-router-dom';

const Profile = () => {

  const {user, isLoading}  = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userId = useParams();
  const user_num = userId.userId;
  
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserbyId(user_num));
  }, [dispatch, user_num]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <section className="profile">
        <section className="details">
          <div>
            Profile Pic:
            <div>
              Username:
            {user.username}
          </div>
          </div>
          
          <div>
            <ul>
              <li>Fullname: {user.fullname}</li>
              <li>Role: {user.role}</li>
            </ul>
            <button>
              EDIT PROFILE
            </button>
          </div>
        </section>
        <section className="latest">
          <h3>Latest Orders</h3>

          <table>
        <thead>
            <tr>
                <th>Date/Time</th>
                <th>Amount</th>
            </tr>
        </thead>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            <tr>
              <td>
              21/05/2024
              </td>
              <td>
                15
              </td>
            </tr>
            
          </table>
        </section>
        <section className="alerts">
        <h3>Alerts</h3>
        <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Current Level</th>
                <th>Reorder Level</th>
            </tr>
        </thead>
            <tr>
              <td>
              A4 Envelopes 
              </td>
              <td>
                15
              </td>
              <td>
                25
              </td>
            </tr>
            <tr>
              <td>
              A4 Envelopes 
              </td>
              <td>
                15
              </td>
              <td>
                25
              </td>
            </tr>
            <tr>
              <td>
              A4 Envelopes 
              </td>
              <td>
                15
              </td>
              <td>
                25
              </td>
            </tr>
            <tr>
              <td>
              A4 Envelopes 
              </td>
              <td>
                15
              </td>
              <td>
                25
              </td>
            </tr>
            <tr>
              <td>
              A4 Envelopes 
              </td>
              <td>
                15
              </td>
              <td>
                25
              </td>
            </tr>

          </table>
        </section>
      </section>



    </div>
  )
}

export default Profile