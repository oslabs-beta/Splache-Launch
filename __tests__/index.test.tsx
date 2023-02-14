import React from 'react'
import { render, screen } from '@testing-library/react'
import Homepage from '../pages/index' 


describe ('Homepage', () => {
    it ('renders a heading', () => {
        render (<Homepage/>);
        const heading = screen.getByRole('heading', {
            name: 'Splache'
        })
    expect(heading).toBeInTheDocument();
    })
})