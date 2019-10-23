// bring in React and Component instance from React
import React, { Component } from "react";




// define our Hello component
class Help extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return (
      <div className="Help">

        <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72458640_119067246171799_4716859622793674752_n.jpg?_nc_cat=104&_nc_oc=AQmMO6h-IGXrOJ0Es2s0PUdGV_-sbmBfssTu8q4ISiBwDEkZpXicH-lKXQJyN1deeQo&_nc_ht=scontent-iad3-1.xx&oh=ebc592a02e6ac1590e0405ea2029a52c&oe=5E23701D"
          alt="whatToDo"></img>

        {/* This section is going to focus on petitions that anyone can sign.  */}
        <h2> Petitions </h2>
        <a href="https://www.whitehouse.gov/contact/?fbclid=IwAR3U8zsuejAVWtqSyLBfdWKM7aCbnEjaz18_21rKl0aNH4Goh-DyBMOV_BY">
          Contact the Whitehouse
          </a>


        <a href="https://www.change.org/p/international-court-of-justice-request-international-court-of-justice-to-investigate-excessive-force-of-hong-kong-police">
          Change.org Petition
          </a>
        <h3> Purpose: International Court to Investigate Unlawful Force of Hong Kong police</h3>

        <a href="https://www.change.org/p/hong-kong-people-%E5%85%A8%E5%8A%9B%E6%94%AF%E6%8C%81%E9%A6%99%E6%B8%AF%E9%9B%BB%E5%8F%B0-%E4%B8%80%E7%9B%B4%E7%A7%89%E6%8C%81%E7%B7%A8%E8%BC%AF%E8%87%AA%E4%B8%BB-%E6%96%B0%E8%81%9E%E6%99%82%E4%BA%8B%E7%AF%80%E7%9B%AE%E4%B8%8D%E5%81%8F%E4%B8%8D%E5%80%9A-%E4%B8%8D%E7%82%BA%E6%94%BF%E5%BA%9C%E5%96%89%E8%88%8C-%E4%B8%8D%E5%8F%97%E5%95%86%E6%A5%AD%E5%BD%B1%E9%9F%BF-%E4%BD%86%E7%82%BA%E5%B8%82%E6%B0%91%E7%99%BC%E8%81%B2">
          Chage.org Petition
          </a>
        <h3> Purpose: Support Editorial Independance at Radio Television Hong Kong
          </h3>

        <a href="https://www.change.org/p/condemn-hong-kong-police-for-excessive-force-against-citizens-call-for-independent-inquiry">
          Change.org Petition
          </a>
        <h3>Purpose: Condemn HK Police for Excessive Force against Citizens and Call for Independent Inquiry</h3>

        {/* This section is going to focus on Twitter handles how to spread the word on the internet */}
        <h2>Spread the word </h2>
        <h3> Use the following #hashtags to spread awarness</h3>



        {/* This section is going to be about upcoming Rallies in the United States
             */}
        <h2>Upcoming Rallies in the United States</h2>


        <a href="https://www.facebook.com/HKAABerk">UNITED STATES, Berkeley Hong Kong Affairs Association of Berkeley </a>
        <h4>When: Saturday, November 9th at 2:30pm </h4>

        <a href="https://www.facebook.com/den4hk">Denver Supports Hong Kong</a>
      </div>
    )


  }
}

export default Help;

//  Notes: 

//  Add products to boycot: 