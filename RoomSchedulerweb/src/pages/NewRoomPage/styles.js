import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1;
  width: 100%;
`;
export const Form = styled.form`
  background-color: #c5dbd0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 30px;
  width: 100%;
  h5 {
    color: #f04141;
    margin-bottom: 10px;
    text-align: center;
  }
  .react-datepicker__input-container {
    width: 100%;
  }
`;
export const Text = styled.text`
  color: #7ea6a5;
  font-size: 20px;
  margin-bottom: 20px
`;

export const Paper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 70%;
  .react-datepicker__input-container {
    width: 100%;
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  background-color: #ffffe3;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 90%;
  font-size: 17px;
  height: 30px;
  border: 0;
  border-radius: 25px;
`;

export const Button = styled.button`
  border: 0;
  padding: 10px;
  background-color: #7ea6a5;
  height: 50px;
  width: 100%;
  border-radius: 25px; 
  font-size: 19px;
  color: #fff;
  margin-top: 10px
`;