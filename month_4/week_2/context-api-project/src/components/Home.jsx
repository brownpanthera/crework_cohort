import {useState} from  'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './styles.css'

faker.seed(10);

const Home = ()=>{
    const productsArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.name.firstName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
    }))
    
    const [cart, setCart] = useState([]);

    const [products] = useState(productsArray);
    return(
        <div>
        <h2>Home</h2>
        <div className="productContainer">
        {products.map((prod)=>(
            <SingleProduct prod={prod} cart={cart} setCart={setCart}/>
        ))}
        </div>
        </div>
    )
}

export default Home;