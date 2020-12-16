import React from "react";
import "./footer.styles.scss";

const Footer = () =>{
    const externalLink = "https://www.youtube.com/watch?v=oHg5SJYRHA0";

    return(
        <div className="footer">
            <div className="footer-left">
                <div className="footer-left-top">Get in Touch</div>
                <div className="footer-left-bottom">
                    <div>
                        <span>New Business</span>
                         <span><a href={externalLink}>Tom Brady</a></span>
                    </div>
                    <div>
                        <span>Press Inquiries</span>
                        <span><a href={externalLink}>Marshawn Lynch</a></span>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-top">Stores</div>
                <div className="footer-right-bottom">
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Boston</div>
                            <p className="address">
                                1234 State St,
                                <br/>
                                Suite 3300,
                                <br/>
                                Boston, MA, 02109
                            </p>
                        </div>
                        <div className="phone">(617) 617-6170</div>
                    </div>
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Atlantic City</div>
                            <p>
                                1234 Sunset Blvd,
                                <br/>
                                Atlantic City, WA, 29387
                            </p>
                        </div>
                        <div className="phone">(123) 456-7890</div>
                    </div>
                    <div className="office">
                        <div className="city-address">
                            <div className="city">New Haven</div>
                            <p>
                                626 Whatever Ave,
                                <br/>
                                New Haven, CT, 02876
                            </p>
                        </div>
                        <div className="phone">(420) 123-4567</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Footer}