import './index.css'

const Courses = () => (
  <>
   <div className="home">
      <div>
      <h4 className="course-heading">Courses we offer!</h4>
      </div>
      <div className="course-card-container">  
        <div className="html-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707892232/pure-html-css-course_1_kaymrf.png"
             alt="Html& css"
             className="course-logo" />
             <p className="course-card-heading">Html & CSS</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
      
        <div className="javascript-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899432/Rectangle_59_hgbe8p.png"
             alt="javascript"
             className="course-logo" />
             <p className="course-card-heading">Javascript</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="bootstrap-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899304/image_1_d0p2xf.png"
             alt="bootstrap"
             className="course-logo" />
             <p className="course-card-heading">Bootstrap</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="react-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899329/image_2_ky48mp.png"
             alt="React.js"
             className="course-logo" />
             <p className="course-card-heading">React js</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="backend-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899318/image_3_rwwpgi.png"
             alt="backend"
             className="course-logo" />
             <p className="course-card-heading">Backend Course</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="sql-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899342/image_4_q2hclt.png"
             alt="my sql"
             className="course-logo" />
             <p className="course-card-heading">Mysql</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="angular-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899353/image_5_v85r2i.png"
             alt="Angular"
             className="course-logo" />
             <p className="course-card-heading">Angular js</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="machine-learn-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899406/image_9_g9oigw.png"
             alt="Machine Learning"
             className="course-logo" />
             <p className="course-card-heading">Machine Learning</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="datascience-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899419/image_10_srollr.png"
             alt="Data SCIENCE"
             className="course-logo" />
             <p className="course-card-heading">Data Science</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="c-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899370/image_6_c7i8ls.png"
             alt="C++ Programming"
             className="course-logo" />
             <p className="course-card-heading">C++ Programming</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="java-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899382/image_7_t24giq.png"
             alt="Java Programming"
             className="course-logo" />
             <p className="course-card-heading">Java Programming</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
        <div className="python-card">
          <li>
        <img src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707899394/image_8_fxnqnj.png"
             alt="Python Programming"
             className="course-logo" />
             <p className="course-card-heading">Python Programming</p>
             <button type="button" className="course-card-btn">get this course</button>
             </li>
        </div>
      </div>
   </div>
   <div className="bottom-sec">
      <div className="side-head-sec">
        <h3 className="alpha-head">ALphaLhub</h3>
        <p className="where_des">Where Learning Matters.</p>
      </div>
      <h3 className="quick">Quick Links</h3>
      <div className="quick-link-sec">
        <div className="reach-sec">
          <li className="reach">Reach us</li>
          <div className="whatsapp">
            <li>+91-7989515525</li>
            <li>Whatsapp Only</li>
          </div>
          <li className="reach">Support@alphalhub.com</li>
        </div>
        <div className="mid-sec">
          <li className="mid-sec">Home</li>
          <li className="mid-sec">Academy</li>
          <li className="mid-sec">Intensive</li>
          <li className="mid-sec">Hire with us</li>
          <li className="mid-sec">Contact us</li>
        </div>
        <div>
          <li className="mid-sec">About us</li>
          <li className="mid-sec">Reviews</li>
          <li className="mid-sec">Community</li>
          <li className="mid-sec">Tutorials</li>
          <li className="mid-sec">Practice</li>
        </div>
      </div>
      <hr className="line_1" />
      <div>
        <li className="policy">Privacy Policy</li>
        <li className="policy">Cookie Policy</li>
        <li className="policy">Terms and Conditions</li>
      </div>

      <div className="blog">
        <h3 className="quick">Blog</h3>
        <input type="search" placeholder="e-mail id" className="blog-sec" />
        <button type="button" className="subs-btn">
          Subscribe
        </button>
      </div>
      <hr className="line" />
    </div>
   </>
)

export default Courses