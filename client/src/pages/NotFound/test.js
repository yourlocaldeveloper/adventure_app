import NotFound from '.';
import { screen } from '@testing-library/react';

describe('NotFound', () => {
    test('it renders', () => {
        renderWithProviders(<NotFound />)
        const message = screen.getByText(/Oops/)
        expect(message).toBeInTheDocument()
    })
})