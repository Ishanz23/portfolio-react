import React from 'react'
import styled from 'styled-components'

export const Backdrop = ({ className, childen }: any) => {
  return (
    <div className={className}>
      <span>{`import React, { useState } from 'react'`}</span>
      <span>{`import styled from 'styled-components'`}</span>
      <span>{`export const Backdrop = ({ className, childen }: any) => {`}</span>
      <span>{`return ('`}</span>
      <span>{`<div className={className}>`}</span>
      <span>{`<StyledBackdrop />`}</span>
      <span>{`</div>`}</span>
      <span>{`)`}</span>
      <span>{'export const StyledBackdrop = styled(Backdrop)`'}</span>
      <span>{`opacity: 0.05;`}</span>
      <span>{`position: absolute;`}</span>
      <span>{`line-height: 4rem;`}</span>
      <span>{`display: flex;`}</span>
      <span>{`flex-direction: column;`}</span>
    </div>
  )
}

export const StyledBackdrop = styled(Backdrop)`
  opacity: 0.05;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  z-index: 0;
`
