import React from 'react';
import pricingIcon from './images/pricing-icon.svg';
import pricingIconGrey from './images/pricing-icon-grey.svg';

export default function Pricing() {
  return (
    <>
      <h1 class="pricing-title contact-title">
                Our Pricing Plans
            </h1>
            <p class="pricing-text">
                When you’re ready to go beyond prototyping in Figma, 
                Webflow is ready to help you bring your designs to life — without coding them.
            </p>
           {/* <!-- pricing --> */}
           <div class="pricing">
            <div class="container">
                <div class="pricing-flex">
                    {/* <!-- 1 --> */}
                    <div class="pricing-item">
                        <div class="pricing-item-price">
                            $299 <span>Per Design</span>
                        </div>
                        <h4 class="pricing-item-title">
                            Landing Page 
                        </h4>
                        <p class="pricing-item-text">
                            When you’re ready to go beyond prototyping in Figma, 
                        </p>
                        <ul class="pricing-item-list">
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>All limited links</span>
                            </li>
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Own analytics platform</span>
                            </li>
                            
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Chat support</span>
                            </li>
                            <li>
                                <img src={pricingIconGrey} alt="description"/>
                                <span>Optimize hashtags</span>
                            </li>
                            
                            <li>
                                <img src={pricingIconGrey} alt="description"/>
                                <span>Unlimited users</span>
                            </li>
                        </ul>
                        <a href="#" class="pricing-item-btn">
                            <span></span>
                            <span>Get started</span>
                        </a>
                    </div>
                    {/* <!-- 2 --> */}
                    <div class="pricing-item">
                        <div class="pricing-item-price">
                            $399 <span>Multi Design</span>
                        </div>
                        <h4 class="pricing-item-title">
                            Website Page 
                        </h4>
                        <p class="pricing-item-text">
                            When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.
                        </p>
                        <ul class="pricing-item-list">
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>All limited links</span>
                            </li>
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Own analytics platform</span>
                            </li>
                            
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Chat support</span>
                            </li>
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Optimize hashtags</span>
                            </li>
                            
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Unlimited users</span>
                            </li>
                        </ul>
                        <a href="#" class="pricing-item-btn">Get started</a>
                    </div>
                    {/* <!-- 3 --> */}
                    <div class="pricing-item">
                        <div class="pricing-item-price">
                            $499 + <span>Per Design</span>
                        </div>
                        <h4 class="pricing-item-title">
                            Complex Project
                        </h4>
                        <p class="pricing-item-text">
                            When you’re ready to go beyond prototyping in Figma, 
                        </p>
                        <ul class="pricing-item-list">
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>All limited links</span>
                            </li>
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Own analytics platform</span>
                            </li>
                            
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Chat support</span>
                            </li>
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Optimize hashtags</span>
                            </li>
                            
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Unlimited users</span>
                            </li>
                            <li>
                                <img src={pricingIcon} alt="description"/>
                                <span>Assist and Help</span>
                            </li>
                        </ul>
                        <a href="#" class="pricing-item-btn">Get started</a>
                    </div>
                    {/* <!-- 3 end --> */}
                </div>
            </div>
           </div>
           {/* <!-- pricing end --> */}

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
    </>
  )
}
