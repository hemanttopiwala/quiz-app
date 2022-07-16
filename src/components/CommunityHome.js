import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #1f1b2c;
  position: relative;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Center = styled.div``;

const Bottom = styled.div`
  flex: 2;
  padding: 20px;

  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 20px;
  background-color: #6c45b3;
  padding: 10px;
  cursor: pointer;
  width: 80%;
  color: white;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
`;

const List = styled.ul`
  background-color: white;

  height: 30vh;

  display: flex;
  width: 75%;
  min-width: 250px;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 40px;
  justify-content: space-around;
  list-style-type: none;
`;

const ListItem = styled.li`
  width: 80%;

  padding: 10px;

  background-color: #9c27b0;
  border-radius: 7px;

  color: white;
  text-align: center;
`;

const Info = styled.div`
  flex: 6;
  overflow: scroll;
`;

const Product = styled.div`
  display: flex;
  background-color: teal;
  justify-content: space-between;

  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Contest = styled.div`

    width 100%;

    display :flex;

    justify-content: space-around;
    
    align-items:center;
    font-color:blue;

    font-size:40px;
    
    
    flex:1;

`;

const Summery = styled.div`
  flex: 1;

  background-color: white;

  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 80vh;
  overflow: scroll;
`;

const SummeryTitle = styled.h1`
  font-weight: 200;
`;

const SummeryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  font-weight: ${(props) => props.type === 'total' && 500};

  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummeryItemText = styled.span``;

const SummeryItemPrice = styled.span``;

const Button1 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CommunityHome = () => {
  return (
    <Container>
      <Left>
        <Button>Create A QUIZ</Button>

        <List>
          <ListItem>Upcomming Quizes</ListItem>

          <ListItem>Past Quizes</ListItem>

          <ListItem>Present Quizes</ListItem>
        </List>
      </Left>

      <Bottom>
        <Contest>Contest</Contest>
        <Info>
          <Product>
            <ProductDetails>
              <Image src="https://www.rxcalculations.com/wp-content/uploads/2016/01/red-quiz.jpg" />

              <Details>
                <ProductName>
                  <b>QUIZ-TITLE:</b> DENIM THUNDER SHOES
                </ProductName>

                <ProductId>
                  <b>QUIZ ID:</b> 8949081906
                </ProductId>

                <ProductSize>
                  <b>QUIZ DESC:</b> 40
                </ProductSize>
              </Details>
            </ProductDetails>
          </Product>
          <Hr />
          <Product>
            <ProductDetails>
              <Image src="https://www.rxcalculations.com/wp-content/uploads/2016/01/red-quiz.jpg" />

              <Details>
                <ProductName>
                  <b>Product:</b> DENIM THUNDER SHOES
                </ProductName>

                <ProductId>
                  <b>ID:</b> 8949081906
                </ProductId>

                <ProductColor color="black" />

                <ProductSize>
                  <b>SIZE:</b> 40
                </ProductSize>
              </Details>
            </ProductDetails>
          </Product>
        </Info>
      </Bottom>

      <Right>
        <Summery>
          <SummeryTitle>All Your Past quizes</SummeryTitle>

          <SummeryItem>
            <SummeryItemText>
              <b>Quiz Title</b>
            </SummeryItemText>

            <SummeryItemPrice>
              <b>Score</b>
            </SummeryItemPrice>
          </SummeryItem>

          <SummeryItem>
            <SummeryItemText>Quiz 1</SummeryItemText>

            <SummeryItemPrice>20/20</SummeryItemPrice>
          </SummeryItem>

          <SummeryItem>
            <SummeryItemText>Quiz 1</SummeryItemText>

            <SummeryItemPrice>20/20</SummeryItemPrice>
          </SummeryItem>
          <SummeryItem>
            <SummeryItemText>Quiz 1</SummeryItemText>

            <SummeryItemPrice>20/20</SummeryItemPrice>
          </SummeryItem>
          <SummeryItem>
            <SummeryItemText>Quiz 1</SummeryItemText>

            <SummeryItemPrice>20/20</SummeryItemPrice>
          </SummeryItem>
          <SummeryItem>
            <SummeryItemText>Quiz 1</SummeryItemText>

            <SummeryItemPrice>20/20</SummeryItemPrice>
          </SummeryItem>
          <SummeryItem>
            <SummeryItemText>Quiz 1</SummeryItemText>

            <SummeryItemPrice>20/20</SummeryItemPrice>
          </SummeryItem>
        </Summery>
      </Right>
    </Container>
  );
};

export default CommunityHome;
