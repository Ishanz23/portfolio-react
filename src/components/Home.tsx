import React from 'react'
import { StyledBackdrop } from './styled-components/StyledBackdrop'
import styled from 'styled-components'
import { lighten } from 'polished'

export const Home = ({ className }: any) => {
  return (
    <div className={className}>
      <StyledBackdrop />
      <StyledIntro />
    </div>
  )
}

export const StyledHome = styled(Home)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`

const Intro = ({ className }: any) => {
  return (
    <div className={className}>
      <h1>HI! I'M SAYANTAN...</h1>
      <h3>A Web Developer on a mission to make the Internet a better place...</h3>
    </div>
  )
}

const StyledIntro = styled(Intro)`
  background: ${props => lighten(0.15, props.theme.primary)};
  color: ${props => props.theme.primaryFont};
  padding: 1rem;
  z-index: 1;
  width: 80%;
  border-radius: 0.5rem;
  align-self: flex-start;
  box-shadow: 2px 4px 8px black;
`
