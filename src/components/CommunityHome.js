import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:#1f1b2c;
    position:relative;
    overflow:hidden;
`;



const Left = styled.div`
  flex: 1;

 

  display: flex;
  align-items:center;
  flex-direction: column;
 
  
`;

const Right = styled.div`
  flex: 1;
  padding: 20px
  
  `;
  

const Center = styled.div`
   flex: 3;
   padding: 20px;
  
 `;

 const Button=styled.button`
    margin-top:30px;
     font-size:20px;
     background-color:#6c45b3;
    padding:10px;
    cursor:pointer;
    width:80%;
    color:white;
    border-radius:10px;

    &:hover {
        
        cursor: pointer;
        transition: all 0.3s ease;
        transform:scale(1.1);
        
    }
    

`;


const List=styled.ul`
    background-color:yellow;

    height:30vh;

    display:flex;
    width:90%;
    flex-direction:column;

    margin: 10px 10px;

`;


const ListItem=styled.li`

    width:70%;
    

`;

const CommunityHome = () => {
  return (
    <Container>

        
            <Left>
                    <Button>
                        Create A QUIZ
                    </Button>



                    <List>

                        <ListItem>
                            Upcomming Quizes
                        </ListItem>


                        <ListItem>
                            Past Quizes
                        </ListItem>

                        <ListItem>
                             Present Quizes
                        </ListItem>
                        
                    </List>

                    
            </Left>

            <Center>
                Center
            </Center>

            <Right>
                Right
            </Right>


        
        
    </Container>
  )
}



export default CommunityHome