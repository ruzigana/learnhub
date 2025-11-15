import "./page.css";
import aliceImage from "../images/Alice M.jpg";
import jamesImage from "../images/James T.jpg";
import mariaImage from "../images/Maria K.jpg";

function Testimonials() {
  return (
    <div className="page testimonials">
      <h1>What Our Learners Say</h1>
      <div className="testimonials-container">
        <div className="testimonial">
          <img 
            src={aliceImage} 
            alt="Alice M." 
            className="testimonial-image"
          />
          <p>
            "LearnHub helped me transition into a new career in tech. The
            lessons are clear and easy to follow!"
          </p>
          <h4>— Alice M.</h4>
        </div>
        <div className="testimonial">
          <img 
            src={jamesImage} 
            alt="James T." 
            className="testimonial-image"
          />
          <p>
            "I love how flexible the learning schedule is. I can study anytime I
            want!"
          </p>
          <h4>— James T.</h4>
        </div>
        <div className="testimonial">
          <img 
            src={mariaImage} 
            alt="Maria K." 
            className="testimonial-image"
          />
          <p>
            "Amazing instructors and real-world examples. Highly recommend!"
          </p>
          <h4>— Maria K.</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;