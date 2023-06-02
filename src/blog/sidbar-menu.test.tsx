import {screen, render} from '@testing-library/react'
import MenuList from './sidbar-menu'

describe("test for side bar panel",()=>{
  
  test('Menu List Component Render Correctly',()=>{
    render(<MenuList/>)
    const buttonElement=screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
  }),

   test('User name Render correctly', async ()=>{
     render(<MenuList/>)
     const userName=await screen.findByText('Ervin Howell')
     expect(userName).toBeInTheDocument()
   })
  
})