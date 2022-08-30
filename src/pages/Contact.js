import React from "react"
import addressIcon from "../assets/address.com.png"
import gmailIcon from "../assets/gmail.com.png"
import phoneIcon from "../assets/phone.com.png"

const Contact = () => {
  return (
    <main className="main-content page">
      <article className="introduce">
        <h2 className="introduce__heading">CONTACT</h2>
        <section className="introduce__content contacts">
          <div className="info-block">
            <img className="block-img" src={addressIcon} />
            <p className="block-detail">4/464/55C, Ap Bac St, Tien Giang</p>
          </div>
          <div className="info-block">
            <img className="block-img" src={gmailIcon} />
            <p className="block-detail">kaystim6@gmail.com</p>
          </div>
          <div className="info-block">
            <img className="block-img" src={phoneIcon} />
            <p className="block-detail">0923646754</p>
          </div>
        </section>
      </article>
      <form className="form-contact">
        <label className="form-label">
          Name
          <input className="form-input" type="text" />
        </label>

        <label className="form-label">
          Email
          <input className="form-input" type="text" />
        </label>

        <label className="form-label">
          Message
          <textarea />
        </label>

        <button className="button send-btn">Send message</button>
      </form>
    </main>
  )
}

export default Contact
