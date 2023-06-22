import React from "react";
import style from "./index.module.css";

export const ContactUsForm = () => {
  return (
    <div className={`${style.contactUs}`}>
      <h1 className={`${style.mainHeading}`}>Contact Us</h1>
      <div className={`${style.nested_contactus}`}>
        {/* form section */}
        <div className={style.form_section}>
          <h5>Get in Touch with Us!</h5>
          <form>
            <div className={`${style.form}`}>
              <div className={`${style.input}`}>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className={`${style.input}`}>
                <input type="email" placeholder="Email" />
              </div>
              <div className={`${style.input}`}>
                <input type="number" placeholder="Phone Number" />
              </div>
              <div className={`${style.input}`}>
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="w-full">
              <textarea
                cols="30"
                rows="4"
                className="px-5 w-full"
                placeholder="Your Message"
              ></textarea>
              </div>
            <div className={`my-4 ${style.btn_contact}`}>
              <button className={`${style.btn_contactus}`}>Submit</button>
            </div>
          </form>
        </div>
        {/* another section */}
        <div className={style.map_section}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1687203667468!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
