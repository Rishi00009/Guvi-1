function priceCard(plan,price){
            
           if(plan == "FREE"){
    return (

                  <div className="card">
                      <div>
                          <h5 className="plan">{plan}</h5>
                          <p className="price">${price}/month</p>
                          </div>
                          <div className="uses">
                          <p><span>✔ </span>Single user</p>
                          <p><span>✔ </span>50GB Storage</p>
                          <p><span>✔ </span>Unlimited Public Projects</p>
                          <p><span>✔ </span>Community Access</p>
                          <div className="block">
                          <p><span>🗶 </span>Unlimited Private Projects</p>
                          <p><span>🗶 </span>Dedicated Phone Support</p>
                          <p><span>🗶 </span>Free Subdomain</p>
                          <p><span>🗶 </span>Monthly Status Report</p>
                          </div>
                          </div>
                          <div><button className="button">Button</button></div>
                          
                  
                  </div>
                  
              
            )
        }
        else if(plan == "PLUS"){

            return (
                <div className="card">
                      <div>
                          <h5 className="plan">{plan}</h5>
                          <p className="price">${price}/month</p>
                          </div>
                          <div className="uses">
                          <p><span>✔ </span>5 user</p>
                          <p><span>✔ </span>50GB Storage</p>
                          <p><span>✔ </span>Unlimited Public Projects</p>
                          <p><span>✔ </span>Community Access</p>
                          <p><span>✔ </span>Unlimited Private Projects</p>
                          <p><span>✔ </span>Dedicated Phone Support</p>
                          <p><span>✔ </span>Free Subdomain</p>
                          <div className="block">
                          <p><span>🗶 </span>Monthly Status Report</p>
                          </div>
                          </div>
                          <div><button className="button">Button</button></div>
                          
                  
                  </div>

            )
        }
        else if(plan == "PRO"){

            return (
                <div className="card">
                      <div>
                          <h5 className="plan">{plan}</h5>
                          <p className="price">${price}/month</p>
                          </div>
                          <div className="uses">
                          <p><span>✔ </span>Unlimited user</p>
                          <p><span>✔ </span>50GB Storage</p>
                          <p><span>✔ </span>Unlimited Public Projects</p>
                          <p><span>✔ </span>Community Access</p>
                          <p><span>✔ </span>Unlimited Private Projects</p>
                          <p><span>✔ </span>Dedicated Phone Support</p>
                          <p><span>✔ </span>Free Subdomain</p>
                          <p><span>✔ </span>Monthly Status Report</p>                          
                          </div>
                          <div><button className="button">Button</button></div>
                          
                  
                  </div>

            )
        }
        }



export default priceCard;