import Styled from 'styled-components'

export const Container = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${prop => prop.theme.bg};
    transition: all .5s ease-out;
`

export const StyledMain = Styled.main`
    width: 100%;
    height: 100%;
    margin-top: 8vh;
    color: ${prop => prop.color};
    display: flex;
    align-items: center;
    padding: 2rem;
`
