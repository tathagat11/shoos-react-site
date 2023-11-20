function Profile() {
    return (
        <div>
            <div className="profileContainer">
                <h1 className="profileTitle">Welcome, John Doe!</h1>
                <div className="infoWrapper">
                    <div className="infoContainer">
                        <div className="profilePic">
                            <img src="/public/profileImg.jpg" alt="" className="profileImg"/>
                        </div>
                        <h2 className="profileName">John Doe</h2>
                        <ul className="infoList">
                            <li className="infoItems">johndoe@email.com</li>
                            <li className="infoItems">9876543210</li>
                            <li className="infoItems">Account created 321 days ago.</li>
                            <li className="infoItems">Premium Membership ends in: 8 days</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile