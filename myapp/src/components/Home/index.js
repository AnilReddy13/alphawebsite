import './index.css'
const Home =()=>(

<>
<div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">The Courses Tailored for your Success!</h1>
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707563191/pexels-anastasiya-gepp-1462633_1_trlu2c.jpg"
          alt="Alphahub"
          className="home-mobile-img"
        />
        <p className="home-description">
          WHAT ARE YOU WAITING FOR BOOK YOUR FREE DEMO SESSION RIGHT NOW!
        </p>
        <button type="button" className="book-now-button">
          Book Now
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707563191/pexels-anastasiya-gepp-1462633_1_trlu2c.jpg"
        alt="Alphahub"
        className="home-desktop-img"
      />
    </div>
    <div className="collaborations">
      <div>
        <h1 className="heading-coll">OUR COLLABORATIONS</h1>
      </div>
      <div className="collaborations-company">
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707564746/df-removebg-preview_1_pgn92s.png"
          alt="Digifrills"
          className="digifrills"
        />
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707564784/b1-removebg-preview_1_abg5pz.png"
          alt="startup-scalar"
          className="startup-scalar"
        />
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707564772/Screenshot_2024-01-24_200653-removebg-preview_1_jrigt3.png"
          alt="Astar-studios"
          className="astar-studios"
        />
      </div>
    </div>
    <div className="overview">
      <div className="overview-heading">
        <h2>ZERO TO MASTER PROGRAM</h2>
      </div>
    </div>
    <div className="course-structure">
      <div className="left-side">
        <div className="course-details">
          <p className="paragraph-card">
            Structured Industry Standard Curriculam.
          </p>
        </div>
        <div className="course-details">
          <p className="paragraph-card">
            Practical Experience will be developing hands on Projects.
          </p>
        </div>
        <div className="course-details">
          <p className="paragraph-card">
            Quizzes & Assignments to put our students on Track.
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="course-details">
          <p className="paragraph-card">
            Live Classes Live classes taken by Industry Experts.
          </p>
        </div>
        <div className="course-details">
          <p className="paragraph-card">
            Regular Webinars Doubt Clearing Sessions and much more.
          </p>
        </div>
        <div className="course-details">
          <p className="paragraph-card">
            Providing Assistance in Internship Activities.
          </p>
        </div>
      </div>
    </div>
    <div className="special-details">
      <div className="details-name">
        <h1 className="special-heading">SPECIAL COURSES</h1>
        <p className="des">Internship Assistance Program</p>
      </div>

      <div className="cards">
        <div className="full-stack-card">
          <h1 className="card-heading"> Full Stack Development</h1>
          <li className="card-items">6 Months duration</li>
          <li className="card-items">Data Structures and Algorithms</li>
          <li className="card-items">Network Basics</li>
          <li className="card-items"> OS Basics</li>
          <h3 className="card-desc">Frontend : </h3>
          <li className="card-items"> Html - 5</li>
          <li className="card-items"> Css - 3</li>
          <li className="card-items"> Js</li>
          <li className="card-items"> Bootstrap</li>
          <li className="card-items"> React</li>
          <h3 className="card-desc">Backend : </h3>
          <li className="card-items"> Node js</li>
          <li className="card-items"> Express js</li>
          <li className="card-items"> Mongo DB</li>
          <li className="card-items"> MY SQL</li>
          <h3 className="card-desc">Frameworks : </h3>
          <li className="card-items"> Angular js</li>
          <p className="card-paragraph">
            Become the Industry Standard Person within 6 Months - Beat the
            competition with our course.
          </p>
          <button className="card-btn" type="button">
            Learn More
          </button>
        </div>
        <div className="Ai-card">
          <h1 className="card-heading">
            Artificial Intelligence Industrial Insight
          </h1>
          <li className="card-items">6 Months duration</li>
          <li className="card-items">Python</li>
          <h3 className="card-desc">Machine Learning </h3>
          <h3 className="card-desc">Supervised Machine Learning </h3>
          <li className="card-items">Classification Algorithm</li>
          <li className="card-items">Regression</li>
          <h3 className="card-desc">Unsupervised Learning </h3>
          <li className="card-items">Clustering</li>
          <li className="card-items">Dimensionality Reduction</li>
          <h3 className="card-desc">Reinforcement Learning </h3>
          <h3 className="card-desc">Semi Supervised Learning </h3>
          <h3 className="card-desc">Deep Learning </h3>
          <li className="card-items">Perceptron</li>
          <li className="card-items">Neural Network</li>
          <li className="card-items">CNN</li>
          <li className="card-items">RNN</li>
          <li className="card-items">GAN's</li>
          <li className="card-items">Projects</li>
          <button className="card-btnn" type="button">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <p className="sub-para">Versatile Engineers Skill Development Program</p>
    <div className="skill_program">
      <div className="card_1">
        <h4 className="card-head">Missed Calls ?</h4>
        <p className="card-des">
          no worries we got you covered with recorded videos of the class you
          misses!
        </p>
      </div>
      <div className="card_2">
        <h4 className="card-head">Jobs and Class timing and clash!</h4>
        <p className="card-des">
          no worries we got you covered discuss with your team and decide when
          to have session.
        </p>
      </div>
      <div className="card_1">
        <h4 className="card-head">Want to Revise ?</h4>
        <p className="card-des">
          Access assignments/notes life long time access recording videos access
          upto 1 Year.
        </p>
      </div>
    </div>
    <div className="about">
      <h4 className="about-heading">About us:</h4>
      <p className="about-desc">
        AlphalHub, we are on a mission to empower the individuals with the
        skills and knowledge needed to thrive as Full Stack Developers. Our
        innovative approach focuses on Practical Learning, ensuring our students
        not only understand the theory but can apply it effectively in
        real-world scenarios.
      </p>
    </div>
    <div className="founder-sec">
      <h3 className="founder-heading">OUR FOUNDERS</h3>
      <div className="founder-card">
        <div className="uday-card">
          <img
            src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707634409/up_1_chascj.jpg"
            alt="Uday"
            className="uday-img"
          />
          <h5 className="uday-name">K.Uday Pavan</h5>
          <p className="uday-desc">
            When a thought put into a mind it should be sclupted enriched and
            nourished to make it a revolution.
          </p>
        </div>
        <div className="sai-card">
          <img
            src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707636577/sa_1_iidfor.jpg"
            alt="Sai"
            className="sai-img"
          />
          <h5 className="sai-name">V.Sai Dinesh</h5>
          <p className="sai-desc">
            Learning is a continuous process it must be a part of life to
            achieve the success you deserve.
          </p>
        </div>
      </div>

      <div className="choose-sec">
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707637930/Vector_7_gguq0q.png"
          className="orange" alt="orangee"
        />
        <p className="choose-des">Why Choose Us?</p>
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707637960/Vector_8_amhviz.png"
          className="orange" alt="orangee"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707638943/image_11_nm7snl.png"
          className="img-sec" alt="features"
        />
      </div>
      <h1 className="founder-heading">OUR INVESTORS</h1>
    </div>
    <div className="investor-sec">
      <img
        src="https://res.cloudinary.com/daxl8xwme/image/upload/v1707564784/b1-removebg-preview_1_abg5pz.png"
        className="startupscalar-logo" alt="startupscalar"
      />
      <h2 className="who-heading">Who We Are ?</h2>
      <p className="who-para">Unleashing Potential, Empowering Dreams</p>
      <p className="who-desc">
        At Startup Scalar, we are more than just a business accelerator. We are
        a team of passionate individuals dedicated to empowering entrepreneurs
        and transforming their ideas into thriving startups. With a focus on
        in-depth market research, strategic planning, and ongoing support, we
        pave thw way for your success. Learn more about the faces behind Startup
        Scalar and our commitment to turning dreams into reality.
      </p>
      <div className="contact-sec">
        <p className="contact_us">Contact us</p>
        <input type="search" placeholder="Your Name" className="name-sec" />
        <input type="search" placeholder="E-mail id" className="name-sec" />
        <input type="search" placeholder="Mobile no" className="name-sec" />
        <input
          type="search"
          placeholder="Contact us"
          className="contact-add-sec"
        />
        <button type="button" className="submit-btn">
          Submit
        </button>
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
export default Home