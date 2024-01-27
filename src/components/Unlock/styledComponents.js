// Style your elements here
import styled from 'styled-components'

export const MainBg = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#0b0c1e, #3c2940);
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LockImage = styled.img`
  width: 100px;
  height: 100px;
`

export const LockText = styled.p`
  color: #ffffff;
  font-size: 23px;
  font-family: 'Roboto';
`
export const Button = styled.button`
  height: 30px;
  width: 100px;
  background-color: #06b6d4;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  margin-top: 30px;
`
