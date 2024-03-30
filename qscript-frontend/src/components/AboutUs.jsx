import React from 'react'
import './AboutUs.css'
import storyImg from '../assets/storyImg.jpg'
import aboutusImg from '../assets/aboutusImg.jpg'
function AboutUs() {
  return (
    <div className='about-us'>
      <div className="about-us-head">
        <h1>About Us</h1>
      </div>
      <div className="about-us-story">
        <img src={storyImg} alt="" />
        <div className="about-us-des">
          <div className='story'>
            <h1>The Delicious Story</h1>
            <p>The people, coffee and the prime locations make the perfect place  for the friends & family to come together and have great time.</p>
          </div>
          <div className="est">
            <div className="est-about">
              <h1>2018</h1>
              <p>Plan for this restaurant to deliver healthy food.</p>

            </div>
            <div className="est-about">
              <h1>2024</h1>
              <p>Happily in the fourth year by fulfill the motto.</p>

            </div>
          </div>
          <button>Read More</button>

        </div>

      </div>
      <div className="about-us-story">
        <div className="about-us-des">
          <div className='story'>
            <h1>Quality And  Tradition</h1>
            <p>The people, coffee and the prime locations make the perfect place good friends & family to come together and have great time. Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>

          </div>

          <button>Read More</button>

        </div>
        <img src={aboutusImg} alt="" className='aboutus-img' />

      </div>

    </div>
  )
}

export default AboutUs
