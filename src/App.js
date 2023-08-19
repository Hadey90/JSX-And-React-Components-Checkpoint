import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/name";
import Price from "./components/price";
import Description from "./components/description";
import Image from "./components/image";
import product from "./components/product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    //     {/* <div>
    //       <Image imageUrl={product.imageUrl} name={product.name} />
    //       <Name name={product.name} />
    //       <Price price={product.price} />
    //       <Description description={product.description} />
    //     </div>
    //  */}
    <div
      className="mt-4 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="text-center mx-auto" style={{ width: "18rem" }}>
        <Image imageUrl={product.imageUrl} name={product.name} />
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title style={{ color: "#dc3545" }}>
            {" "}
            <Name name={product.name} />
          </Card.Title>
          <Card.Text className="">
            <Description description={product.description} />
          </Card.Text>
          <Button variant="primary" className="text-nowrap">
            Pls Buy!!! <br />
            Just Buy <br />
            <Price price={product.price} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
