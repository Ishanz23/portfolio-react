import React, { Props } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

export const Hamburger = (props: any) => {
  return (
    <div className={props.className} onClick={props.toggleSidePanel}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export const StyledHamburger = styled(Hamburger)`
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: auto;
  margin: 0rem 1rem;
  cursor: pointer;
  div {
    background: ${props => props.theme.primaryFont};
    width: 100%;
    height: 0.25rem;
    border-radius: 0.25rem;
    margin: 0.2rem 0rem;
    box-shadow: 2px 2px 2px ${props => darken(0.5, props.theme.accent)};
  }
`
