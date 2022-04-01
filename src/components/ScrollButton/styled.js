import styled from 'styled-components'


export const TopButton = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 100px;
  background-color: white;
  padding: 0.5rem;
  border: 1.5px solid #fff;
  border-radius: 100%;
  display: flex;
  box-shadow: -1px 0 4px rgba(14, 55, 63, 0.15);
  transition: 0.6s;
  right: 8%
`

export const DisabledButton = styled.button`
  display: none

`
export const Img = styled.img`
    &: hover {
        cursor: pointer;
    }
`
