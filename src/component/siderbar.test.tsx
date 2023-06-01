export {}
import {render, screen} from '@testing-library/react'
import Siderbar from './siderbar'

it('SliderWar Render Correctly',()=>{
    render(<Siderbar/>)
    const textElement='Leanne Graham'
    expect(textElement).toBeInTheDocument()
})