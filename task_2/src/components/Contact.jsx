import React from 'react'

export default function Contact() {
  return (
    <>
     <h1 class="pricing-title contact-title">
                Contact Us
            </h1>
            <p class="pricing-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore.
            </p>
            <div class="contact-form">
                <form>
                    <div class="contact-form-flex">
                        <label>
                            <span>Name</span>
                            <input type="text" placeholder="Enter your name" maxlength="60" required/>
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="text" placeholder="Enter your email" required/>
                        </label>
                    </div>
                    <div class="contact-form-flex">
                        <label>
                            <span>Subject</span>
                            <input type="text" placeholder="Provide context"/>
                        </label>
                        <label>
                            <span>Subject</span>
                            <input type="text" placeholder="Select Subject"/>
                        </label>
                    </div>
                    <div class="contact-form-textarea">
                        <label>
                            <span>Message</span>
                            <textarea placeholder="Write your  question here" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                    <button class="contact-form-btn">
                        <span></span>
                        <span>Send Messege</span>
                    </button>
                </form>
            </div>
    </>
  )
}
