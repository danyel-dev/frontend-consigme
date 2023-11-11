import axios from 'axios';
import './product.css'
import { useState } from 'react';


export default function Product({product}) {
    const [user, setUser] = useState();

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "token " + localStorage.getItem("token")
        },
    }
    
    axios.get("http://127.0.0.1:8000/userLogado/", config).then(
        response => setUser(response.data[0])
    )

    function handleAdditionProduct() {
        const url = "http://127.0.0.1:8000/bag/"
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            },
        }
        
        const body = {user: user.url, product: product.url}

        axios.post(url, body, config)
    }

    return(
        <div className='item'>
            <div className='item-body'>
                <div className='item-image'></div>
                
                <h3>{product.name}</h3>

                <p className='item-description'>{product.description}</p>

                <div className='description-cart'>
                    <button>Ver produto</button>

                    <i className="fa-solid fa-cart-shopping" onClick={handleAdditionProduct}></i>
                </div>
            </div>
        </div> 
    );
}
