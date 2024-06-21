import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover the best workout sessions tailored to help you achieve your fitness goals. Whether you're a beginner or a pro, we have something for everyone.
        </p>
        <img src="/img5.jpg" alt="Workout in action" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Push your limits and join our high-intensity bootcamps designed to challenge and inspire you. Our expert trainers will guide you every step of the way.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
              Build muscle and improve endurance with our strength and conditioning bootcamp. Perfect for all fitness levels looking to enhance their performance.
            </p>
          </div>
          <div>
            <h4>HIIT Blast</h4>
            <p>
              Burn calories and boost your metabolism with our high-intensity interval training sessions. Short, intense workouts for maximum results.
            </p>
          </div>
          <div>
            <h4>Yoga Fusion</h4>
            <p>
              Blend the benefits of yoga and strength training in our Yoga Fusion bootcamp. Increase flexibility, strength, and mindfulness in one session.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Get your heart pumping and relieve stress with our Cardio Kickboxing bootcamp. A fun and dynamic way to improve cardiovascular health and coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
