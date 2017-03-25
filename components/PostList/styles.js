import styled from 'styled-components'

export const Container = styled.section`
  padding-bottom: 20px;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  display: block;
  margin-bottom: 10px;
`

export const ListItemContainer = styled.div`
  align-items: center;
  display: flex;
`

export const Num = styled.span`
  font-size: 14px;
  margin-right: 5px;
`

export const A = styled.a`
  font-size: 14px;
  margin-right: 10px;
  text-decoration: none;
  padding-bottom: 0;
  borer: 0;
`

export const Button = styled.button`
  &:before {
    align-items: center;
    border-color: #ffffff transparent transparent transparent;
    border-style: solid;
    borderWidth: 6px 4px 0 4px;
    content: '';
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`
