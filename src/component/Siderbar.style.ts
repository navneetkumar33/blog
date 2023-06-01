import styled from "styled-components"; 

export const StyledDiv=styled.div`
    width: 100%;
    height: 30px;
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const StyledDivImage=styled.div`
    width: 100%;
    height: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   .ant-image-img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 40px;
   } 
  span{
    margin-top: -125px;
  } 
`