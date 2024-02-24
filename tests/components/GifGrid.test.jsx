import { getAllByRole, render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'Messi';
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });
    test('debe mostrar items cuando se cargan las imágenes mediante useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Messi',
            url: 'https://localhost/Messi.jpg'
        },
        {
            id: 'AC',
            title: 'Neymar',
            url: 'https://localhost/Neymar.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category = {category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
});