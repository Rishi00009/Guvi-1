import React from "react"

function home(){
    return(
        <div>
            <div className="header">
                <p className="sitename">Bootstrap</p>
                <button className="signup">Sign up</button>
            </div>
            <div className="firstimage">
                <p className="p1">Generate more leads with a professional landing pages!</p>
                <div className="email">
                    {/* <Form>
                    <FormGroup>
                        <Label
                        for="exampleEmail"
                        hidden
                        >
                        Email
                        </Label>
                        <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        />
                    </FormGroup>
                    </Form> */}
                    </div>
                <button className="submit">Submit</button>
            </div>
            <div className="usage">
                <div>
                <p className="heading1">Fully Responsive</p>
                <p className="shortnote">This theme will look great on any device,no matrter the size!</p>
                </div>
                <div>
                <p className="heading2">Bootstrap 5 Ready</p>
                <p className="shortnote">Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>
                <div>
                <p className="heading3">easy to Use</p>
                <p className="shortnote">Ready to use with your own content,or customize the source files</p>
                </div>
                
                </div>
                <div className="image2">
                </div>
                <div>
                    <p className="use-head">Fully Reasponsive Design</p>
                    <p></p>
                </div>
                <div></div>
                <div>
                    <p className="use-head">Updated for Bootstrap 5</p>
                    <p></p>
                </div>
                <div>
                    <p className="use-head">Easy to Use & Customize</p>
                    <p></p>
                </div>
        </div>
    )
}

export default home;