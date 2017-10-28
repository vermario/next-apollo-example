import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 25px;
`

export const LinkText = styled.span`
  font-size: 14px;
  margin-right: 15px;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
`
