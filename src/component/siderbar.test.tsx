export {}
import {render, screen} from '@testing-library/react'
import Siderbar from './siderbar'

it('SliderWar Render Correctly',async ()=>{
    render(<Siderbar/>)
    const textElement= await screen.findByText('Leanne Graham')
    expect(textElement).toBeInTheDocument()
})