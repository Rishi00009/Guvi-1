function home(){
    return(
        <div>
            <div className="header">
                <p className="sitename">Bootstrap</p>
                <button className="signup">Sign up</button>
            </div>
            <div className="firstimage">
                <p className="p1">Generate more leads with a professional landing pages!</p>
                <div className="email"><input placeholder="Email Address" ></input></div>
                <button className="submit">Submit</button>
            </div>
            <div className="usage">
                <div>
                <p>Fully Responsive</p>
                <p>This theme will look great on any device,no matrter the size!</p>
                </div>
                <div>
                <p>Bootstrap 5 Ready</p>
                <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>
                <div>
                <p>easy to Use</p>
                <p>Ready to use with your own content,or customize the source files</p>
                </div>
                
            </div>
        </div>
    )
}

export default home;