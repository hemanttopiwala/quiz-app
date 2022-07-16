import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
import { question } from '../Data';
const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
      center;

  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  //   flex-direction: column;

  width: 70%;
  //   height: 70%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-bottom:60px;
  ${mobile({ width: '75%' })};
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width:100%;
  // height:40%;
  flex: 1;
  //   background-color: yellow;
  padding: 20px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
  //bakground-color:yellow;
`;

const Option = styled.ul`
  flex: 2;
  //   background-color: teal;
  display: flex;
  width:80%;
  flex-direction: column;
  margin-bottom:10px;
`;

const Options = styled.li`
  width: 100%;
  // background-color: yellow;
  display:flex;
  justify-content:space-between;

  margin: 10px;
  padding: 10px;
`;

const Submit = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  font-size: 20px;
  background-color: ${props=>props.color};
  cursor: pointer;
  height: 40px;
  width: 30%;
  border-radius: 7px;
  align-items: center;
  disabled:true;


`;


const Input=styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;

`;


const Input1=styled.input`
    width:30%;
    padding:10px;

`;

const Input2=styled.select`
    width:30%;
    
`;

const Op=styled.option`
    padding:5px;
`;


const QuizAdd = () => {
  const [slideidx, setSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlide(slideidx > 0 ? slideidx - 1 : 0);
    } else {
      setSlide(slideidx < question.length-1 ? slideidx + 1 : question.length-1);
    }
  };

  return (
    <>


   
    {
        <Container slideIndex={slideidx}>
        <Wrapper>
          <Slide>
            <Title >
              <Input placeholder='Enter the question...'/>
            </Title>
    
            <Option>
              <Options>
                <Input1 />
                <Input2>
                    <Op>

                        True;
                    </Op>
                    <Op>

                        False;
                    </Op>
                </Input2>
              </Options>

              <Options>
                <Input1 />
                <Input2>
                    <Op>

                        True;
                    </Op>
                    <Op>

                        False;
                    </Op>
                </Input2>
              </Options>


              <Options>
                <Input1 />
                <Input2>
                    <Op>

                        True;
                    </Op>
                    <Op>

                        False;
                    </Op>
                </Input2>
              </Options>

              <Options>
                <Input1 />
                <Input2>
                    <Op>

                        True;
                    </Op>
                    <Op>

                        False;
                    </Op>
                </Input2>
              </Options>
    
             
              
             
            </Option>
    
            <Submit>

                {
                     slideidx===0 ? <Button disabled color="transparent" onClick={() => handleClick('left')}>Add another question</Button>:<Button color="transparent" onClick={() => handleClick('left')}>Add Another question</Button>
                }


                {
                     slideidx===question.length-1 ? <Button disabled color="transparent" onClick={() => handleClick('right')}>Next</Button>:<Button  color="transparent" onClick={() => handleClick('right')}>Submit</Button>
                }


               


             
    
              
    
    
             
    
    
              
            </Submit>

          </Slide>
        </Wrapper>

        {
                     slideidx===question.length-1 && <Button style={{width:"21%"}}  color="teal" onClick={() => handleClick('right')}>Submit</Button>
        }
      </Container>

    }

    

        


     
       


        </>
    
   
  );
};

export default QuizAdd;