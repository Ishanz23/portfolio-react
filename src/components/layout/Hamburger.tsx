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

export const StyledHamburger = styled(Hamburger)<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  position: relative;
  div {
    position: absolute;
    background: ${props => props.theme.primaryFont};
    width: 100%;
    height: 3px;
    border-radius: 0.25rem;
    margin: 2px 0rem;
    box-shadow: ${props => (props.open ? 'none' : `2px 2px 2px ${darken(0.45, props.theme.accent)}`)};
    transition: all 0.5s ease;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  div:nth-child(1) {
    top: 0;
    transform: ${props => (props.open ? 'rotate(45deg) scale(1.05)' : 'rotate(0deg) scale(1)')};
  }

  div:nth-child(2) {
    top: 0.75rem;
    transform: ${props => (props.open ? 'scale(0)' : 'scale(1)')};
    opacity: ${props => (props.open ? '0' : '1')};
  }

  div:nth-child(3) {
    top: 1.5rem;
    transform: ${props => (props.open ? 'rotate(-45deg) scale(1.05)' : 'rotate(0deg) scale(1)')};
  }
`
