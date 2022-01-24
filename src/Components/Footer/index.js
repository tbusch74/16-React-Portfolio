import React from "react"


function Footer() {
    return (
        <footer className="contact">
            <div className="flex-row">
                <h2 className="section-title">Contact Me</h2>
            </div>
            <div className="content-wrap">
                <article className="phone">
                    <img src="./assets/images/phone.png" alt="icon of a phone" />
                    <p>763-354-8815</p>
                </article>
                <article className="email">
                    <img src="./assets/images/email.png" alt="icon of email" />
                    <p>abusch@css.edu</p>
                </article>
                <article className="linkedin">
                    <a href= "https://www.linkedin.com/in/tony-busch/">
                        <img src="./assets/images/linkedin.png" alt="linkedin icon" />
                        <p>www.linkedin.com/in/tony-busch</p>
                    </a>
                </article>
            </div>
        </footer>
    )
}

export default Footer