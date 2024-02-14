import React from "react";
import styled from "styled-components";

function Categories() {
  const Categories = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
  `;

  const Featured = styled.div`
    display: flex;

    ul {
      display: flex;
    }

    li {
      list-style: none;
      padding: 20px 20px 0px 20px;
    }

    a {
      text-decoration: none;
      color: black;

      &:hover {
        color: green;
        font-size: 17px;
      }
    }
  `;

  const Icons = styled.div`
    img {
      margin: 10px;
      padding: 5px;
      border-radius: 50%;
      background: gray;

      &:hover {
        background: #3bb77e;
      }
    }
  `;

  const Products = styled.div`
    display: flex;
    margin: 20px 30px;
  `;

  const Card = styled.div`
    margin: 10px 5px;
    height: 180px;
    width: 120px;
    background: #f4f6fa;
    border: 2ps solid #f4f6fa;
    border-radius: 20px 20px;

    img {
      height: 100px;
      width: 100px;
    }

    h5 {
      color: #253d4e;
      margin: 5px;
      font-size: 17px;
    }

    div {
      text-align: center;
    }
  `;
  return (
    <div>
      <Categories>
        <Featured>
          <h1>Featured Categories</h1>
          <div>
            <ul>
              <li>
                <a href="/">Cake & Milk</a>
              </li>
              <li>
                <a href="/">Coffes & Teas</a>
              </li>
              <li>
                <a href="/">Pet Foods</a>
              </li>
              <li>
                <a href="/">Vegatables</a>
              </li>
            </ul>
          </div>
        </Featured>
        <Icons>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png"
            alt=""
            sizes=""
            srcset=""
            height={"30px"}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
            alt=""
            sizes=""
            srcset=""
            height={"30px"}
          />
        </Icons>
      </Categories>
      <Products>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-13.png"
            alt=""
            srcset=""
          />
          <h5>Cake & Milk</h5>
          <div>26 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-12.png"
            alt=""
            srcset=""
          />
          <h5>Oraganic Kiwi</h5>
          <div>28 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-11.png"
            alt=""
            srcset=""
          />
          <h5>Peach</h5>
          <div>14 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-9.png"
            alt=""
            srcset=""
          />
          <h5>Red Apple</h5>
          <div>54 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-3.png"
            alt=""
            srcset=""
          />
          <h5>Snack</h5>
          <div>56 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-1.png"
            alt=""
            srcset=""
          />
          <h5>Vegtables</h5>
          <div>72 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-2.png"
            alt=""
            srcset=""
          />
          <h5>Strawberry</h5>
          <div>36 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-4.png"
            alt=""
            srcset=""
          />
          <h5>Balck plum</h5>
          <div>123 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-5.png"
            alt=""
            srcset=""
          />
          <h5>Custard apple</h5>
          <div>34 items</div>
        </Card>
        <Card>
          <img
            src="https://nest-frontend.netlify.app/assets/imgs/shop/cat-14.png"
            alt=""
            srcset=""
          />
          <h5>Coffe & Tea</h5>
          <div>89 items</div>
        </Card>
      </Products>
    </div>
  );
}

export default Categories;
