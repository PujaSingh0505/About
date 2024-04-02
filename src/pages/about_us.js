import React from "react";
import "../styles/about_us.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const team = [
    {
      imgUrl: "about_us/public/assests/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
    {
      imgUrl: "/assets/Director.png",
      title: "Shantanu Kumar",
      description: "Director",
    },
  ];

  return (
    <div className="home">
      <Header />
      <div className="home2">
        {/* //vision  */}
        <div className="title">
          <h1>
            Accelerate Your Vision <br />
            with Cloudprism
            <h3>Your IT Consultant And solutions Partner</h3>
          </h1>
        </div>

        <div className="btn">
          <button>Let's grow together</button>
        </div>
      </div>

      <div className="about">
        <h1>About us</h1>
        <p>
          CloudPrism, a IT Consultation and IT Solutions Partner,we provide
          premium one-stop Salesforce solutions and full-stack development
          services. Based in a tier 2 city in India, our unique origin in Patna
          City has proven to be a boon for both our startup and the local
          community. We prioritize creating value within the community,
          distinguishing ourselves without relying on conventional means of
          establishing presence. With a team of over 50 certified developers,
          CloudPrism excels in Salesforce-certified consultancy and serves as a
          Salesforce ISV Partner, boasting proficient full-stack expertise. Our
          technical skill outshines that of other small and medium Salesforce
          companies, as we specialize in providing Custom-built solutions
          designed to meet your specific timeline and requirements, ensuring
          optimal outcomes for your business success. With CloudPrism by your
          side, you can trust that your IT Solutions journey will be guided by
          industry best practices and unparalleled expertise.
        </p>
      </div>

      <div className="mission">
        <h1>Mission</h1>
        <div className="el">
          <p>
            CloudPrism is dedicated to modifying your business process through
            smart Salesforce deployment and consulting services. Our goal is to
            enhance efficiency, boost productivity,of all sizes and industries
            and drive your organization to remarkable success by preferring
            Salesforce, the global leader in customer relationship management
            (CRM) platforms. With a focus on quality and client satisfaction, we
            are committed to guiding your company to its fullest potential in
            the digital realm. Our partnership extends beyond mere transactions,
            as we share a commitment to social responsibility and ethical
            practices. At CloudPrism, empathy guides our approach to ethical
            resource management and fair treatment of all individuals involved.
            Partnering with us not only aligns with your values but also
            demonstrates a shared commitment to making a positive imp
          </p>
          <img src="/assests/Group 361.png"></img>
        </div>
      </div>
      <div className="vision">
        <h1>Vision</h1>
        <div className="vel">
          <img src="/assests/Group 362.png"></img>
          <p>
            CloudPrism strives to be a platinum partner of Salesforce, that will
            enable us to convert industry of all sizes to cloud by providing
            them the best SAAS Tools of salesforce deployment and consulting. We
            aspire to improve consumer experiences, optimize company operations
            by bringing firm data into the cloud, and reach development
            prospects by constantly pushing the frontiers of technology and
            honoring innovations. Together with our clients, we hope to modify
            sectors and impact the future of business using Salesforce's
            revolutionary power.
          </p>
        </div>
      </div>

      <div className="history">
        <h1>History</h1>
        <div className="his">
          <div className="start">
            <p className="p1">2016</p>
            <p>
              CloudPrism strives to be a platinum partner of Salesforce, that
              will enable us to convert industry of all sizes to cloud by
              providing them the best SAAS Tools of salesforce deployment and
              consulting.CloudPrism is dedicated to modifying  your business
              process through smart Salesforce deployment and consulting
              services.
            </p>
          </div>
          <div className="himg">
            <img src="/assests/Frame 48095480.png"></img>
          </div>
        </div>
      </div>
      <div className="team">
        <h1>Our Team</h1>
        <div className="team_map">
          {team.map((event, index) => (
            <div key={index} className="element">
              <img src={team.imgUrl} alt={team.title} />
              <div className="text">
                <p class="name">{event.title}</p>
                <p class="desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
