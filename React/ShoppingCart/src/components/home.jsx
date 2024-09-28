import React,{useState} from "react"

const  Card = () => {
    
    // const pro = [{ "name": "Tshirt" , "Price": "$25" } , { "name": "Tshirt" , "Price": "$20" } , { "name": "Tshirt" , "Price": "$25" } , { "name": "Tshirt" , "Price": "$20" } ]
    const [count, setCount] = useState(0); 
    

        return(
            <div>
                <div className="card">
                    <div className="img">
                        Image
                    </div>
                    <div>
                        <div>
                            
                        </div>
                        <div>
                            {count}
                        </div>
                        <div><button onClick={() => setCount (count + 1)}>Add Cart</button></div>
    
                    </div>
                </div>
            </div>
        )
    }
   
export const Details = () => {
    return <Card price="$20" name= "Tshirt" />;
          
}


function home(){


    return (
        <div>
            <div className="header">
                <div className="sitename">Rishi</div>
                <div >
                <p className="page">Home</p>
                <p className="page">About</p>
                <p className="page">Shop</p>
                </div>  
                <div className="cart">        
                <p >Cart {count}</p>
                </div>
            </div>
            <div className="homeimage">
                Image
            </div>
            <div>
                {Card()}
            </div>

        </div>

    )
}




export default home;