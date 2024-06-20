import React from 'react'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <div>
      
      <h1>Profile</h1>
      
      <section className="profile">
        <section className="details">
          <div>
            Profile Pic
            <div>
            Username
          </div>
          </div>
          <div>
            <ul>
              <li>Fullname: Full Name</li>
              <li>Role: Role</li>
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