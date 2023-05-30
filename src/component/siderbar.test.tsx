export {}
import {render, screen} from '@testing-library/react'
import AppContainer from './appContainer'

it('SliderWar Render Correctly',()=>{
    render(<AppContainer/>)
    const textElement=screen.getAllByText('et ea vero quia laudantium autem')
    expect(textElement).toBeInTheDocument()
})