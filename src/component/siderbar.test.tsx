
import {render, screen} from '@testing-library/react'
import Siderbar from './siderbar'
test('SliderWar Render Api Call correctly',async ()=>{
    render(<Siderbar/>)
    const textElement= await screen.findByText('Ervin Howell')
    expect(textElement).toBeInTheDocument()
})