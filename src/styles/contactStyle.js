import styled from 'styled-components'

export const ContactWrapper = styled.div`
  margin: 10% auto;
  @media (max-width: 700px) {
    margin: 15% auto;
  }
`;
export const ContactHeader = styled.h1`
  text-align: CENTER;
  color:  #AC3B61;
  margin-bottom: 5%;
  font-weight: 300;
`
export const ContactDetails = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  h3{
    font-size: 30px;
    color: #123C69;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
