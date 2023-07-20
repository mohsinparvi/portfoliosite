import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import FaLocationDot from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { TbPhoneCall, TbSend } from "react-icons/tb";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

import Button from "../components/UI/Button";

const Contact = (Props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fbx0d8y",
        "template_gqu6amm",
        form.current,
        "MhQfzbaMsEYZW-gYj"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Send Successfully");
          toast.success("Message Send Successfully ");
        },
        (error) => {
          console.log(error.text);
          console.log("Error Message Send ");
          toast.error("Message send fail");
        }
      );
  };
  return (
    <div className="contact_section" id="contact">
      <div className="container">
        <Toaster position="top-center" reverseOrder="false"></Toaster>

        <h2 className="contact__title"> Contact Me</h2>
        <p className="contact__para">Get in touch</p>
        <div className="contact_content contact__container ">
          <div className="contact__details">
            <div className="contact__info">
              <TbPhoneCall size={60} color="#0CAA93" />
              <div className="contact__info_title">
                <h2>Call ME</h2>
                <span className="phone">+9234-94919598</span>
              </div>
            </div>
            <div className="contact__info">
              <GrMail size={60} color="#0CAA93" />
              <div>
                <h2>Email</h2>
                <span className="email">mohsinha7an@gmail.com</span>
              </div>
            </div>
            <div className="contact__info">
              <MdLocationPin size={60} color="#0CAA93" />
              <div>
                <h2>Location</h2>
                <span className="location">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
          <div className="contact__form contact__container">
            <form
              action=""
              className="contact__form grid"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form_control grid">
                <div className={`contact__content grid ${Props.formColor}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="to_name"
                    className="contact__input"
                  />
                </div>
                <div className={`contact__content grid ${Props.formColor}`}>
                  <label htmlFor="name" className="contact__label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_name"
                    className="contact__input"
                  />
                </div>
              </div>
              <div className={`contact__content grid ${Props.formColor}`}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone_number"
                  className="contact__input"
                />
              </div>
              <div className={`contact__content grid ${Props.formColor}`}>
                <label htmlFor="email">Message</label>
                <textarea className="contact__textarea" name="message" />
              </div>
              <Button className={`btn_button ${Props.btnColor}`} type="submit">
                <TbSend />
                <span className={`${Props.btnColor}`}>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
        {/* <hr /> */}
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Contact;
