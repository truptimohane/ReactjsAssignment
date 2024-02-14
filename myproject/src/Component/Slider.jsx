import React from "react";
import styled from "styled-components";

// Styled Components

const CarouselIndicators = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderDots = styled.button`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #3bb77e;
  border-color: #3bb77e;
  border: 2px solid black;
`;

const ImgContainer = styled.div`
  height: 400px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 25px 15px;
`;

const MainHeading = styled.h2`
  font-weight: bold;
  color: #333;
  position: relative;
  top: 30px;
  left: 80px;
  font-size: 60px;
  font-family: "Quicksand", sans-serif;
  color: #253d4e;
  font-weight: 700;
  text-align: start;
  margin-bottom: 50px;
`;

const SubHeading = styled.h6`
  font-size: 10px;
  color: gray;
  position: relative;
  top: 30px;
  left: 80px;
  font-size: 30px;
  font-family: "Quicksand", sans-serif;
  color: #253d4e;
  font-weight: 100;
  text-align: start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 80px;
  left: -27%;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 30px;
  padding-left: 40px;
  padding: 20px 45px 20px 25px;
  outline: none;
  width: 300px; /* Adjust the width as needed */
`;

const PlaceholderImage = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url("https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-plane.png");
  background-size: cover;
  pointer-events: none;
`;

const SubscribeButton = styled.button`
  background-color: #3bb77e;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 20px 40px;
  cursor: pointer;
  position: relative;
  top: 0;
  left: -50px;
`;

// Slider Component
function Slider() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <CarouselIndicators>
          <SliderDots
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <SliderDots
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            style={{ margin: "0 10px" }}
          />
        </CarouselIndicators>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ImgContainer
              style={{
                borderRadius: "20px",
                backgroundImage:
                  "url('https://nest-frontend.netlify.app/assets/imgs/slider/slider-1.png')",
              }}
            >
              <MainHeading>
                Don't miss amazing <br /> grocery deals
              </MainHeading>
              <SubHeading>Sign up for the daily newsletter</SubHeading>
              <div>
                <Container>
                  <InputContainer>
                    <Input type="text" placeholder="   Enter your email" />
                    <PlaceholderImage />
                    <SubscribeButton>Subscribe</SubscribeButton>
                  </InputContainer>
                </Container>
              </div>
            </ImgContainer>
          </div>
          <div className="carousel-item">
            <ImgContainer
              style={{
                borderRadius: "20px",
                backgroundImage:
                  "url('https://nest-frontend.netlify.app/assets/imgs/slider/slider-2.png')",
              }}
            >
              <MainHeading>
                Fresh Vegetables <br /> Big Discount
              </MainHeading>
              <SubHeading>Save 50% off on your first order</SubHeading>
              <div>
                <Container>
                  <InputContainer>
                    <Input type="text" placeholder="   Enter your email" />
                    <PlaceholderImage />
                    <SubscribeButton>Subscribe</SubscribeButton>
                  </InputContainer>
                </Container>
              </div>
            </ImgContainer>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
