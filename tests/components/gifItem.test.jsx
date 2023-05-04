import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => { 
    test('Debe hacer match con el snapshot', () => { 
        const title = 'Hola';
        const url = 'https://hola.com'
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
     });
 })