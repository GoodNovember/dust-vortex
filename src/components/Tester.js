import React from 'react'
import styled from 'styled-components'

const Hugger = styled.div`
  border: 1px solid black;
  background: pink
  padding: 1rem;
`

const Description = styled.div`
  border: 1px solid black;
  background: yellow;
  padding: 1rem;
  white-space: pre-line;
`

const Title = styled.div`
  border: 1px sold black;
  background: teal;
  padding: 1rem;
  color: white;
`

const IdElm = styled.div`
  border: 1px solid black;
  background: azure;
  color: red;
  padding: 1rem;
`

const Tester = ({ id, description, title }) => (
  <Hugger>
    <IdElm>{ id }</IdElm>
    <Title>{ title }</Title>
    <Description>{ description }</Description>
  </Hugger>
)

export default Tester
