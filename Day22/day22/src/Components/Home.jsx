import React from "react"

function home(){
    return(
        <div>
            <div className="header">
                <p className="sitename">Bootstrap</p>
                <button className="signup">Sign up</button>
            </div>
            <div className="image1">
                <p className="p1">Generate more leads with a professional landing pages!</p>
                
                <input className="email" placeholder="   Email Address"></input>
                    
                <button className="submit">Submit</button>
            </div>
            <div className="usage">
                <div className="container">
                    <p className="heading">Fully Responsive </p>
                    <p className="shortnote">This theme will look great on any device,no matrter the size!</p>
                </div>
                <div className="container">
                    <p className="heading">Bootstrap 5 Ready</p>
                    <p className="shortnote">Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>
                <div className="container">
                    <p className="heading">Easy to Use </p>
                    <p className="shortnote">Ready to use with your own content,or customize the source files</p>
                </div>
                
            </div>
                <div className="container1">
                    <div className="para">
                        <p className="use-head">Fully Reasponsive Design</p>
                        <p className="features">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                    <div className="image2"> </div>
                </div>
                
                <div className="container1">
                    <div className="image3"></div>
                    <div className="para">
                        <p className="use-head">Updated for Bootstrap 5</p>
                        <p className="features">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="container1">
                    
                    <div className="para">
                        <p className="use-head">Easy to Use & Customize</p>
                        <p className="features">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                    <div className="image4"></div>
                </div>
                <div>
                    <div>
                        <p>What people are saying...</p>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="image1">
                    <p className="lastpara">Ready to get started? Sign up now!</p>
                    <input className="email" placeholder="   Email Address"></input>
                    <button className="submit">Submit</button>
                </div>

        </div>
    )
}

export default home;