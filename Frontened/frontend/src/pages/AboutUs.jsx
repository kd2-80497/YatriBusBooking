import Navbar from "../components/Navbar";
import "../styles/AboutUsStyles.css";


function AboutUs(){
    return (<>
      <Navbar/>
        <div style={{backgroundColor:" rgba(255, 255, 128, .5)"}}>
        <div className="hero"     />
        <h1 className="text-center pt-3">About Yatri</h1>
        <div className="about-container bottomDiv"    >
          
          <p >"Yatri", which means "Journey" in Hindi, is one of India's most well-recognized and awarded brands. Among others, we have won multiple awards from the Ministry of Tourism, Government of India, including the National Tourism Award for "Outstanding Performance as a Domestic Tour Operator" in Category I (Rest of India) for the assessment year 2014-15; three awards at the India Tourism Awards for 'Outstanding performance as a Domestic Tour Operator (Rest of India)','Outstanding performance as a Domestic Tour Operator in Jammu and Kashmir' and 'Outstanding performance as an Inbound Tour Operator-Cat C in 2013 & the 'Best Domestic Tour Operator' award in 2010. Some other industry awards are: ET ("Economic Times") Brand Equity's Most Trusted Online Travel Brand of 2015; Travel & Hospitality named us the Most Outstanding Online Company: business to consumer or B2C; and in 2014, Yatra.com won the CNBC Awaaz Travel Award. In 2013, we were recognized by Matrixlab as the Most Popular Brand in Travel & Leisure Category and in 2012, Yatra.com won the award for 'Best Travel Website' in IAMAI's Annual India Digital Awards.</p>
          <h1>Our Mission</h1><br/>
          <p>Our mission is to provide safe, reliable, and comfortable bus transportation services to our customers while maintaining a strong commitment to sustainability, innovation, and exceptional customer service.</p>
          <h1>Our Vision</h1>
          <p>A strong and "trusted" travel brand of India, our strengths include a large and loyal customer base, a multi-channel platform for leisure and business travelers, a robust mobile eco-system for a spectrum of travelers and suppliers, a strong technology platform designed to deliver a high level of scalability and innovation and a seasoned senior management team comprising of industry executives with deep roots in the travel industry in India and abroad.</p>
        </div>
        </div>
        </>
      );
    }
    
    export default AboutUs;
