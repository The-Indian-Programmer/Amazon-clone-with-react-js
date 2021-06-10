import React from "react";
import "./Home.css";
import slider1 from "./image/sliderimage1.jpg";
import slider2 from "./image/sliderimage2.jpg";
import slider3 from "./image/sliderimage3.jpg";
import slider4 from "./image/sliderimage4.jpg";
import slider5 from "./image/sliderimage5.jpg";
import slider6 from "./image/sliderimage6.jpg";
import slider7 from "./image/sliderimage7.jpg";
import slider8 from "./image/sliderimage8.jpg";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            {" "}
            <img src={slider2} class="d-block w-100" alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider1} alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider3} alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider4} alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider5} alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider6} alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider7} alt="..." />{" "}
          </div>
          <div class="carousel-item">
            {" "}
            <img src={slider8} alt="..." />{" "}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid products_container">
        <div class="container books row">
          <h2 className="text-center">Books</h2>
          <div class="col-sm col-md-4">
            <Product
              rating="5"
              title="The Lean Start-Up"
              imgsource="https://m.media-amazon.com/images/I/81luu9cp+xS._AC_UY218_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="120.00"
            />
          </div>
          <div class="col-sm col-md-4">
            <Product
              rating="5"
              title="Eat That Frog"
              imgsource="https://m.media-amazon.com/images/I/61ZNAnIrwwL._AC_UY218_.jpg"
              desc="There just isn't enough during hte lucnls time for everything on our to-do list—and there never will be."
              price="190.00"
            />
          </div>
          <div class="col-sm col-md-4">
            <Product
              rating="5"
              title="Rich Dad Poor Dad"
              imgsource="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_SX180_SY120_QL70_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="150.00"
            />
          </div>
        </div>

        <div class="row">
          <h2 className="text-center container">Electronics</h2>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="One-Plue 9 5G-Phone"
              imgsource="https://m.media-amazon.com/images/I/61urU8k2lFL._AC_SX180_SY120_QL70_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="17120.00"
            />
          </div>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="Samsung Galaxy M42 5G "
              imgsource="https://m.media-amazon.com/images/I/71LweCKOpFL._AC_UY218_.jpg"
              desc="There just isn't enough time for everything on our to-do list—and there never will be."
              price="22190.00"
            />
          </div>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="Nokia 105 Single SIM (Black)"
              imgsource="https://m.media-amazon.com/images/I/31Z2ee9oYQL._AC_UY218_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="2150.00"
            />
          </div>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="Redmi Note 9 Pro "
              imgsource="https://m.media-amazon.com/images/I/81fwKtv0VHL._AC_UL320_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="10150.00"
            />
          </div>
        </div>


        <div class="row">
          <h2 className="text-center container">Computers</h2>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="Lenovo Legion 5 10th Gen Intel Core i5 15.6 inch"
              imgsource="https://m.media-amazon.com/images/I/61p3lA4N3uL._AC_UY218_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="17120.00"
            />
          </div>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="HP 15 Entry Level 15.6-inch (39.62 cms) "
              imgsource="https://m.media-amazon.com/images/I/719F8WdfBzL._AC_UY218_.jpg"
              desc="There just isn't enough time for everything on our to-do list—and there never will be."
              price="22190.00"
            />
          </div>
          <div class="col col-md-3">
            <Product
              rating="5"
              title="Lenovo Ideapad S145 AMD RYZEN 3 3200U "
              imgsource="https://m.media-amazon.com/images/I/811w2pSQcnL._AC_UY218_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="2150.00"
            />
          </div>
          <div class="col-sm col-md-3">
            <Product
              rating="5"
              title="HP 15 AMD Athlon 15.6"
              imgsource="https://m.media-amazon.com/images/I/71FB8qoB78L._AC_UY218_.jpg"
              desc="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
              price="10150.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
