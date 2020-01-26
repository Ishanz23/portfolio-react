import Styled from 'styled-components'

export const Container = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${prop => prop.theme.bg}
`

export const StyledMain = Styled.main`
    color: ${prop => prop.color};
    flex: 1;
    display: flex;
    align-items: center;
    padding: 2rem;
`
