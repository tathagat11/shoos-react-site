
function Footer() {
    return (
        <div>
            <div className="features">
                <div className="feature">
                    <img src="/public/shipping.png" alt="" className="featureImg"/>
                        <span className="featureTitle">Free Shipping</span>
                        <span className="featureDesc">Free shipping worldwide in 15-20 business days outside India.</span>
                </div>
                <div className="feature">
                    <img src="/public/return.png" alt="" className="featureImg"/>
                        <span className="featureTitle">Guaranteed Return</span>
                        <span className="featureDesc">30 days return policy. Terms and conditions applied.</span>
                </div>
                <div className="feature">
                    <img src="/public/authentic.png" alt="" className="featureImg"/>
                        <span className="featureTitle">Authentic Merchandise</span>
                        <span className="featureDesc">Every product you buy from us is 100% genuine.</span>
                </div>
            </div>
            <footer>
                <div className="footerLeft">
                    <div className="footerMenu">
                        <h1 className="fMenuTitle">About Us</h1>
                        <ul className="fList">
                            <li className="fListItem">Company</li>
                            <li className="fListItem">Contact</li>
                            <li className="fListItem">Careers</li>
                            <li className="fListItem">Affiliates</li>
                            <li className="fListItem">Stores</li>
                        </ul>
                    </div>
                    <div className="footerMenu">
                        <h1 className="fMenuTitle">Useful Links</h1>
                        <ul className="fList">
                            <li className="fListItem">Support</li>
                            <li className="fListItem">Refund</li>
                            <li className="fListItem">FAQ</li>
                            <li className="fListItem">Feedback</li>
                            <li className="fListItem">Stories</li>
                        </ul>
                    </div>
                    <div className="footerMenu">
                        <h1 className="fMenuTitle">Products</h1>
                        <ul className="fList">
                            <li className="fListItem">Air Max</li>
                            <li className="fListItem">Jordan</li>
                            <li className="fListItem">Originals</li>
                            <li className="fListItem">DC</li>
                            <li className="fListItem">Mercurial</li>
                        </ul>
                    </div>
                </div>
                <div className="footerRight">
                    <div className="footerRightMenu">
                        <h1 className="fMenuTitle"></h1>
                        <div className="fMail">
                            <input type="text" placeholder="johndoe@email.com" className="fInput"/>
                                <button className="fButton">Join!</button>
                        </div>
                    </div>
                    <div className="footerRightMenu">
                        <h1 className="fMenuTitle">Follow Us</h1>
                        <div className="fIcons">
                            <i className="fa-brands fa-facebook fa-xl fIcon"></i>
                            <i className="fa-brands fa-instagram fa-xl fIcon"></i>
                            <i className="fa-brands fa-youtube fa-xl fIcon"></i>
                            <i className="fa-brands fa-whatsapp fa-xl fIcon"></i>
                        </div>
                    </div>
                    <div className="footerRightMenu">
                        <span className="copyright">@tathagat11. All rights reserved. 2023.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer