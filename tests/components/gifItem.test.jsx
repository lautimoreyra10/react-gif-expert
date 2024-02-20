import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {
    test('Debe hacer match con el snapshot', () => {
        const title = 'Hola';
        const url = 'https://hola.com/';
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        const title = 'Hola';
        const url = 'https://hola.com/';
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });
    test('Debe mostrar el título en el componente', () => { 
        const title = 'Hola';
        const url = 'https://hola.com/';
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
     });
});