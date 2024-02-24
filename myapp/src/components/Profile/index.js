import "./index.css"
const Profile =()=>(
    <>
    <div className="profile-container">
           <div className="list">
              <li className="profile-list">MY ACCOUNT</li>
              <li className="profile-list">MY COURSES</li>
              <li className="profile-list">MY RESUME</li>
              <li className="profile-list">MY CERTIFICATES</li>
              
           </div>
           <div className="logout-btn">
            <button type="button" className="profile-btn">LOG OUT</button>
           </div>
    </div>
    </>
)

export default Profile