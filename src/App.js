import logo from './logo.svg';
import './App.css';
import React from "react";
import { Fragment } from "react";
import Button from './components/Button';
import Greeting from './components/Greeting';
import { faker } from '@faker-js/faker';
import Product from './components/Product';

const generateRandomProducts = (numberOfProducts = 100) => {
  const products = [];

  for (let index = 0; index < numberOfProducts; index++) {
    const product = { id: index + 1, title: faker.lorem.paragraph(), description: faker.lorem.sentences({ min: 1, max: 15 }), image: faker.image.urlLoremFlickr({ category: 'nature', height: 720, width: 1080 }) }
    products.push(product);
    console.log({ product });
  };
  console.log({ products });
  return products;

}
function App() {
  const products = generateRandomProducts(10);
  console.log(faker.person.fullName());

  // const products = [
  //   { id: 1, title: "Product 1", description: "Description 1", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
  //   { id: 2, title: "Product 2", description: "Description 2", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
  //   { id: 3, title: "Product 3", description: "Description 3", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
  //   { id: 4, title: "Product 4", description: "Description 4", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
  //   { id: 5, title: "Product 5", description: "Description 5", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
  // ];

  const isGreen = false;
  const age = 20;
  return (

    // <React.Fragment>
    <Fragment>
      <div className="App">
        {/* <Button /> */}

        {/* <Greeting name={"Ali"} age={20} />
        <Greeting name={"Haider"} age={40} />
        <Greeting name={"Jawad"} age={50} /> */}

        <ul>
          {products.map((product, index) => {
            // console.log("Product: ", product);
            // console.log("Index: ", index);
            // console.log("ProductsArray: ", productsArray);
            // console.log({ product, index, productsArray });
            // return <Product product={product}/>
            return <Product {...product} />
          })}

        </ul>


        {/* {products.map((product, productsArray, index) => {
          console.log("Product: ", product);
          console.log("Index: ", index);
          console.log("ProductsArray: ", productsArray);
        })} */}


        {/* {products.map(function () { })} */}


        <header className="App-header" style={{ backgroundColor: isGreen ? "green" : "yellow" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {age >= 20 ? <h3>Your are 18+</h3> : <h6>Your are under 18</h6>}
      <h3>{age >= 20 ? "Your are 18+" : "Your are under 18"}</h3>
      <h1>hello</h1>
    </Fragment>
    // <div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    //   <h1>hello</h1>
    // </div>
  );
  // return "ali" true
}

export default App;
