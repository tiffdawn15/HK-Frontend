// bring in React and Component instance from React
import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';


const Wrapper = styled.section`
    padding: 20px 20px 0px;
    


    border: 2px solid;
     padding: 20px 20px 20px;
     margin: 50px 100px 50px; 
    
     font-family: 'Dosis', sans-serif;
`


const A = styled.a`
   font-size: 42px;
    color: #4FB0B7;
    text-decoration: none;
`

const H2 = styled.h2`
  font-size: 46px;
  text-decoration: underline;


`
const H3 = styled.h3`
  font-size: 32px;
`

const H4 = styled.h4`
  font-size: 28px;
`

// define our Hello component
class Help extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return (
      <div className="Help">
        <Wrapper>

         
          {/* This section is going to focus on petitions that anyone can sign.  */}


         
            <H2> Petitions </H2>
            <A href="https://www.whitehouse.gov/contact/?fbclid=IwAR3U8zsuejAVWtqSyLBfdWKM7aCbnEjaz18_21rKl0aNH4Goh-DyBMOV_BY" target="_blank">
              Contact the Whitehouse
          </A>


            <A href="https://www.change.org/p/international-court-of-justice-request-international-court-of-justice-to-investigate-excessive-force-of-hong-kong-police" target="_blank">
              Change.org Petition
          </A>
            <H3> Purpose: International Court to Investigate Unlawful Force of Hong Kong police</H3>

            <A href="https://www.change.org/p/hong-kong-people-%E5%85%A8%E5%8A%9B%E6%94%AF%E6%8C%81%E9%A6%99%E6%B8%AF%E9%9B%BB%E5%8F%B0-%E4%B8%80%E7%9B%B4%E7%A7%89%E6%8C%81%E7%B7%A8%E8%BC%AF%E8%87%AA%E4%B8%BB-%E6%96%B0%E8%81%9E%E6%99%82%E4%BA%8B%E7%AF%80%E7%9B%AE%E4%B8%8D%E5%81%8F%E4%B8%8D%E5%80%9A-%E4%B8%8D%E7%82%BA%E6%94%BF%E5%BA%9C%E5%96%89%E8%88%8C-%E4%B8%8D%E5%8F%97%E5%95%86%E6%A5%AD%E5%BD%B1%E9%9F%BF-%E4%BD%86%E7%82%BA%E5%B8%82%E6%B0%91%E7%99%BC%E8%81%B2" target="_blank">
              Chage.org Petition
          </A>
            <H3> Purpose: Support Editorial Independance at Radio Television Hong Kong
          </H3>

            <A href="https://www.change.org/p/condemn-hong-kong-police-for-excessive-force-against-citizens-call-for-independent-inquiry" target="_blank">
              Change.org Petition
          </A>
            <H3>Purpose: Condemn HK Police for Excessive Force against Citizens and Call for Independent Inquiry</H3>
    



          {/* This section is going to focus on Twitter handles how to spread the word on the internet */}
          
          <H2>Spread the word </H2>
          <H3> Use the following #hashtags to spread awarness. Share posts on your different social media sites to keep your followers informed.</H3>
        
          <A href="https://twitter.com/search?q=%23StandWithHK&src=typeahead_click" target="_blank">#StandWithHK<br /></A>
          <A href="https://twitter.com/search?q=%23StandwithHonKong&src=typeahead_click" target="_blank">#StandWithHongKong<br /></A>
          <A href="https://twitter.com/search?q=%23NoChinaExtradition&src=typed_query" target="_blank">#NoChinaExtradition<br /></A>
          <A href="https://twitter.com/search?q=%23antiELAB&src=typeahead_click" target="_blank">#antiELAB<br /></A>

          
         
      

          {/* This section is going to be about upcoming Rallies in the United States
             */}


           
          <H2>Upcoming Rallies in the United States</H2>


          <A href="https://www.facebook.com/HKAABerk" target="_blank">UNITED STATES, Berkeley Hong Kong Affairs Association of Berkeley </A>
          <H4>When: Saturday, November 9th at 2:30pm </H4>

          <A href="https://www.facebook.com/den4hk" target="_blank">Denver Supports Hong Kong</A>


          <H2>For more information checkout out the masterlist on Reddit.</H2>
          <A href="https://awesome-lewin-528089.netlify.com/" target="_blank">Reddit Hong Kong Master Post</A>
          
        </Wrapper>
      </div>
    )


  }
}

export default Help;

//  Notes: 

//  Add products to boycot: 