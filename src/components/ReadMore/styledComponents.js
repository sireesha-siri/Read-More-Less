// Style your elements here
import styled from 'styled-components'

export const ReadMoreLessContainer = styled.div`
  padding-top: 50px;
  padding: 30px;
  padding-bottom: 120px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 120vh;
`

export const ReactHooksHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 50px;

  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`

export const MiniDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`

export const ReactHooksImage = styled.img`
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ReactHooksDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  width: 50vw;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`

export const ShowButton = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  padding: 5px;
  border-radius: 5px;
  height: 40px;
  width: 120px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
`
