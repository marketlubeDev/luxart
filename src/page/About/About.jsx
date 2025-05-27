import React, { useEffect } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Chairman from "../../assets/Chairman.jpg";

export default function About() {
  useEffect(() => {
    const smoothScrollToTop = () => {
      const scrollStep = -window.scrollY / (500 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    };
    smoothScrollToTop();
  }, []);

  return (
    <>
      <div className="aboutPage-container">
        <div className="aboutPage-container__Banner">
          <h1>
            Precision <span>Building</span>
          </h1>
        </div>
        <div className="aboutPage-container__Content">
          <div className="aboutPage-container__Content__top">
            <h1>
              About <span>Us</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              magnam nisi illum? Nam atque, velit voluptatum adipisci optio at
              placeat asperiores aliquam iusto in sapiente magni eaque, commodi
              esse repellendus explicabo ipsum ullam eligendi minus illum, odio
              excepturi. Incidunt recusandae iusto provident voluptatum tempore,
              amet, nemo quod, eum possimus hic laudantium eius! Repudiandae
              reiciendis fugiat molestias suscipit? Asperiores fugit commodi
              dolorem hic atque, deleniti laboriosam aperiam. Omnis, nisi rem!
              Odit quidem earum officia officiis consequatur qui optio similique
              praesentium placeat!
            </p>
          </div>
          <div className="aboutPage-container__Content__bottom">
            <div className="aboutPage-container__Content__bottom__left">
              <div className="aboutPage-container__Content__bottom__left__top">
                <div className="aboutPage-container__Content__bottom__left__top__countup">
                  <h2>100+</h2>
                  <p>Happy Clients</p>
                </div>
                <div className="aboutPage-container__Content__bottom__left__top__countup">
                  <h2>25+</h2>
                  <p>Engineers</p>
                </div>
                <div className="aboutPage-container__Content__bottom__left__top__countup">
                  <h2>100K+</h2>
                  <p>Sq. ft</p>
                </div>
              </div>
              <div className="aboutPage-container__Content__bottom__left__bottom">
                <h1>
                  The <span>Man</span> Behind
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora magnam nisi illum? Nam atque, velit voluptatum
                  adipisci optio at placeat asperiores aliquam iusto in sapiente
                  magni eaque, commodi esse repellendus explicabo ipsum ullam
                  eligendi minus illum, odio excepturi. Incidunt recusandae
                  iusto provident voluptatum tempore, amet, nemo quod, eum
                  possimus hic laudantium eius! Repudiandae reiciendis fugiat
                  molestias suscipit? Asperiores fugit commodi dolorem hic
                  atque, deleniti laboriosam aperiam. Omnis, nisi rem! Odit
                  quidem earum officia officiis consequatur qui optio similique
                  praesentium placeat!
                </p>
              </div>
            </div>

            <div className="aboutPage-container__Content__bottom__right">
              <img src={Chairman} alt="Chairman" />
              <h2>John Doe</h2>
              <p>Chairman of Luxart</p>
            </div>
          </div>
        </div>
        <div className="aboutPage-container__Mission">
          <div className="aboutPage-container__Mission__top">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver exceptional results, promote
              sustainability, prioritize safety, and build long-lasting
              relationships with our clients based on trust and transparency.
            </p>
          </div>
        </div>

        <div className="aboutPage-container__VisionGoal">
          <div className="aboutPage-container__VisionGoal__Container">
            <div className="aboutPage-container__VisionGoal__Container__Left">
              <div className="aboutPage-container__VisionGoal__Container__Left__ExpandingGoal">
                <h2>Expanding Goal</h2>
                <p>
                  As a premier construction company in Kerala, South India, we
                  consistently deliver quality products and projects in a timely
                  fashion without question. As a construction company, we are
                  the builders of bridges, buildings, roads, ats, schools,
                  homes, and many more. But mostly, we are the crafters of
                  dreams. Our clients have always been an integral part of our
                  success. With their vision and our skill, we have accomplished
                  award-winning constructions that will stand for decades to
                  come.
                </p>
              </div>

              <div className="aboutPage-container__VisionGoal__Container__Left__CompanyVision">
                <h2>Company Vision</h2>
                <p>
                  Our vision is to be recognized as a leader in the industry,
                  known for our commitment to excellence, innovation, and
                  sustainable practices, and valued for our strong client
                  relationships.
                </p>
              </div>
            </div>
            <div className="aboutPage-container__VisionGoal__Container__Right">
              <img
                src="https://res.cloudinary.com/dihhxzfq3/image/upload/v1742894978/eaf2c5d9c0e39fc3811f18dde164f2ad_1_vti1qe.jpg"
                alt="vision"
              />
            </div>
          </div>
        </div>

        <div className="aboutPage-container__Story">
          <h2>The Brand Story</h2>
          <p>
            Since 2012, we have successfully delivered over 100 projects
            spanning 1.5 million sq. ft., redefining construction with a blend
            of quality, innovation, and sustainability. From Talen Vista's
            modern luxury and Ecomount Green City's eco-friendly living, to
            renowned institutions like Hillsinai Knowledge Centre and Markaz Law
            College, and iconic spaces such as Jami ul Futuh Mosque, Tigris
            Valley Retreat, and Fezinn Hotel, every project reflects our passion
            for excellence. Guided by a vision to lead the industry, a mission
            to prioritize safety and transparency, and a goal to craft timeless,
            community-driven developments, we are committed to building a better
            tomorrow.
          </p>
        </div>
      </div>
    </>
  );
}
