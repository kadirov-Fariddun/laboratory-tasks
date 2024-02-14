import React from 'react';
import logo from '../images/Logo.png';
import headWrapp from '../images/head-wrapp.png';
import project1 from '../images/project-1.jpg';
import project2 from '../images/project-2.jpg';
import project3 from '../images/project-3.jpg';
import solution1 from '../images/solution-1.svg';
import solution2 from '../images/solution-2.svg';
import solution3 from '../images/solution-3.svg';
import solution4 from '../images/solution-4.svg';
import solution5 from '../images/solution-5.svg';
import solution6 from '../images/solution-6.svg';
import blog1 from '../images/blog-1.jpg';
import blog2 from '../images/blog-2.jpg';
import blog3 from '../images/blog-3.jpg';
import user from '../images/user.jpg';
import WorkCard from './WorkCard';
import SolutionCard from './SolutionCard';
// slick component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
    const settings = {
        infinite: false,
        arrow:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <>
     {/* <!-- head wrapper --> */}
    <div class="head_wrapper">
        <div class="container">
            

            {/* <!-- head content --> */}
            <div class="head-content">
                <div class="head-content-flex">
                    {/* <!-- content info --> */}
                    <div class="head-content-info">
                        <h1>
                            Building stellar<br/> websites for early<br/> startups
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div class="head-content-info-btns">
                            <a href="#">
                                <span></span>
                                <span>View our work</span>
                            </a>
                            <a href="#">
                                View Pricing
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* <!-- content info end --> */}
                    {/* <!-- head content image --> */}
                    <div class="head-content-image">
                        <img src={headWrapp} alt="description"/>
                    </div>
                    {/* <!-- head content image end --> */}
                </div>
            </div>
            {/* <!-- head content end --> */}
        </div>
    </div>
    {/* <!-- head wrapper end --> */}
    <div class="how-work">
        <div class="container">
            <div class="how-work-flex">
                <div class="how-work-info">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">
                        Get in touch with us
                        <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2"/>
                        </svg>
                    </a>
                </div>
                <div class="how-work-step">
                <WorkCard 
                number="01"
                title="Strategy"
                text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
                />
                <WorkCard 
                number="02"
                title="Wireframing"
                text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
                />
                <WorkCard 
                number="03"
                title="Design"
                text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
                />
                <WorkCard 
                number="04"
                title="Development"
                text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
                />
                   
                </div>
            </div>
        </div>
    </div>
    {/* <!-- projects --> */}
    <div class="projects">
        <div class="container">
            {/* <!-- title --> */}
            <div class="projects-title">
                <h2>View our projects</h2>
                <a href="#">
                    View More
                    <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
                    </svg>
                </a>
            </div>
            {/* <!-- title end --> */}
            <div class="projects-flex">
                <div class="projects-item">
                    <div class="projects-card">
                        <img src={project1} alt="description" height="100%"/>
                        <div class="projects-card-info projects-card-info-1">
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <a href="#">
                                View project
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="projects-item">
                    <div class="projects-card middle-card">
                        <img src={project2} alt="description"/>
                        <div class="projects-card-info">
                            <h3>Unisaas Website<br/>Design</h3>
                            <a href="#">
                                View portfolio
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="projects-card">
                        <img src={project3} alt="description"/>
                        <div class="projects-card-info">
                            <h3>Unisaas Website<br/>Design</h3>
                            <a href="#">
                                View portfolio
                                <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- projects end --> */}

    {/* <!-- solutions --> */}
    <div class="solutions pGrey">
            <div class="container">
                <div class="solutions-title">
                    <p>Features</p>
                    <h2>
                        Design that solves<br/> problems, one product at<br/> a time
                    </h2>
                </div>
                <div class="solutions-flex">
                    {/* <!-- 1 --> */}
                    <SolutionCard 
                    src={solution1}
                    title="Uses Client First"
                    text="
                        Euismod faucibus turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed faucib turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed mi. "
                        />
                    {/* <!-- 2 --> */}
                    <SolutionCard 
                    src={solution2}
                    title="Two Free Revision Round"
                    text="
                        Euismod faucibus turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed faucib turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed mi. "
                        />
                    {/* <!-- 3 --> */}
                    <SolutionCard 
                    src={solution3}
                    title="Template Customization"
                    text="
                        Euismod faucibus turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed faucib turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed mi. "
                        />
                    {/* <!-- 4 --> */}
                    <SolutionCard 
                    src={solution4}
                    title="24/7 Support"
                    text="
                        Euismod faucibus turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed faucib turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed mi. "
                        />
                    {/* <!-- 5 --> */}
                    <SolutionCard 
                    src={solution5}
                    title="Quick Delivery"
                    text="
                        Euismod faucibus turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed faucib turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed mi. "
                        />
                    {/* <!-- 6 --> */}
                    <SolutionCard 
                    src={solution6}
                    title="Hands-on approach"
                    text="
                        Euismod faucibus turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed faucib turpis eu gravida mi. 
                        Pellentesque et velit aliquam sed mi. "
                        />
                    {/* <!-- 6 --> */}
                </div>
            </div>
    </div>
     {/* <!-- solutions --> */}
     {/* <!-- say clients  --> */}
     <div class="say-client pGrey">
        <div class="container">
            <div class="say-client-flex">
                <div class="say-client-title">
                    <h2>What our clients say about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                {/* <div class=""> */}
                <div className="say-client-slider">
                    <Slider {...settings}>
                        {/* <!-- 1 --> */}
                        <div class="say-client-item">
                            <h3>
                                "The best agency we’ve worked with so far. 
                                They understand our product and are able to add 
                                new features with a great focus."
                            </h3>
                            <div class="say-client-item-user">
                                <div class="say-client-item-user-image">
                                    <img src={user} alt="description"/>
                                </div>
                                <div class="say-client-item-user-title">
                                    <h5>Jenny Wilson</h5>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 2 --> */}
                        <div class="say-client-item">
                            <h3>
                                "The best agency we’ve worked with so far. 
                                They understand our product and are able to add 
                                new features with a great focus."
                            </h3>
                            <div class="say-client-item-user">
                                <div class="say-client-item-user-image">
                                    <img src={user} alt="description"/>
                                </div>
                                <div class="say-client-item-user-title">
                                    <h5>Jenny Wilson</h5>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 3 --> */}
                        <div class="say-client-item">
                            <h3>
                                "The best agency we’ve worked with so far. 
                                They understand our product and are able to add 
                                new features with a great focus."
                            </h3>
                            <div class="say-client-item-user">
                                <div class="say-client-item-user-image">
                                    <img src={user} alt="description"/>
                                </div>
                                <div class="say-client-item-user-title">
                                    <h5>Jenny Wilson</h5>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                {/* </div> */}
            </div>
        </div>
     </div>
     {/* <!-- say client end --> */}
     {/* <!-- questions --> */}
     <div class="questions p">
        <div class="container">
            <div class="questions-flex">
                <div class="questions-title">
                    <h2>
                        Frequently asked questions
                    </h2>
                    <p>Contact us for more info</p>
                </div>
                <ul class="questions-list">
                    <li class="active">
                        <div class="question-number">01</div>
                        <div class="question-info">
                            <h4>How much time does it take?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <button class="question-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#282938">
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill="#282938"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <div class="question-number">02</div>
                        <div class="question-info">
                            <h4>What is your class naming convention?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <button class="question-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#282938">
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill="#282938"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <div class="question-number">03</div>
                        <div class="question-info">
                            <h4>How do you communicate?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <button class="question-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#282938">
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill="#282938"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <div class="question-number">04</div>
                        <div class="question-info">
                            <h4>I have a bigger project. Can you handle it?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <button class="question-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#282938">
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill="#282938"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <div class="question-number">05</div>
                        <div class="question-info">
                            <h4>What is your class naming convention?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <button class="question-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#282938">
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill="#282938"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
     </div>
     {/* <!-- questions end --> */}
     {/* <!-- startup --> */}
     <div class="startup">
        <div class="container">
            <div class="startup-flex">
                <div class="startup-info">
                    <span></span>
                    <h2>
                        Building stellar websites for early startups
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                    </p>
                </div>
                <div class="startup-form">
                    <h3>Send inquiry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <form>
                        <input type="text" placeholder="Your Name" maxlength="60" required/>
                        <input type="text" placeholder="Email" maxlength="60" required/>
                        <input type="text" placeholder="Paste your Figma design URL"/>
                        <button class="startup-form-btn">
                            <span></span>
                            <span>Send an Inquiry</span>
                        </button>
                        <a href="#">
                            Get in touch with us
                            <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#fff"/>
                            </svg>
                        </a>
                    </form>
                </div>
            </div>
        </div>
     </div>
      {/* <!-- startup end --> */}
      {/* <!-- blog --> */}
      <div class="blog p">
        <div class="container">
            <h2>Our blog</h2>
            <div class="blog-flex">
                {/* <!-- 1 --> */}
                <div class="blog-item">
                    <div class="blog-item-image">
                        <img src={blog1} alt="description"/>
                    </div>
                    <span class="blog-item-date">19 Jan 2022</span>
                    <h4>
                        How one Webflow user grew his single 
                        person consultancy from $0-100K in 14 months
                    </h4>
                    <p>
                        See how pivoting to Webflow changed one person’s 
                        sales strategy and allowed him to attract
                    </p>
                    <a href="#">
                        Read More
                        <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
                        </svg>
                    </a>
                </div>
                {/* <!-- 2 --> */}
                <div class="blog-item">
                    <div class="blog-item-image">
                        <img src={blog2} alt="description"/>
                    </div>
                    <span class="blog-item-date">19 Jan 2022</span>
                    <h4>
                        How one Webflow user grew his single 
                        person consultancy from $0-100K in 14 months
                    </h4>
                    <p>
                        See how pivoting to Webflow changed one person’s 
                        sales strategy and allowed him to attract
                    </p>
                    <a href="#">
                        Read More
                        <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
                        </svg>
                    </a>
                </div>
                {/* <!-- 3 --> */}
                <div class="blog-item">
                    <div class="blog-item-image">
                        <img src={blog3} alt="description"/>
                    </div>
                    <span class="blog-item-date">19 Jan 2022</span>
                    <h4>
                        How one Webflow user grew his single 
                        person consultancy from $0-100K in 14 months
                    </h4>
                    <p>
                        See how pivoting to Webflow changed one person’s 
                        sales strategy and allowed him to attract
                    </p>
                    <a href="#">
                        Read More
                        <svg width="25" height="12" viewBox="0 0 25 12" fill="#2405F2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
                        </svg>
                    </a>
                </div>
                {/* <!-- 3 end --> */}
            </div>
        </div>
      </div>
      {/* <!-- blog end --> */}
    </>
  )
}
