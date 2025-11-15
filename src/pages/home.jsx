import "./page.css";

function Home() {
  return (
    <div className="home">   
      <section className="hero">
        <h1>Welcome to LearnHub</h1>
        <p>Your path to knowledge begins here.</p>
        <button>Get Started</button>
      </section>
      <section className="courses-section">
        <h2>Popular Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop" alt="React Course" className="course-image" />
            <h3 className="course-title">react</h3>
            <p className="course-instructor">Dr. Mucyo</p>
            <div className="course-rating">
              <span className="rating-stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-score">4.5</span>
            </div>
          </div>
          <div className="course-card">
            <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop" alt="Python Course" className="course-image" />
            <h3 className="course-title">python</h3>
            <p className="course-instructor">Dr. Mubarak chopii</p>
            <div className="course-rating">
              <span className="rating-stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-score">4.5</span>
            </div>
          </div>
          <div className="course-card">
            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop" alt="Blockchain Course" className="course-image" />
            <h3 className="course-title">blockchain</h3>
            <p className="course-instructor">Dr. trey</p>
            <div className="course-rating">
              <span className="rating-stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-score">4.5</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
