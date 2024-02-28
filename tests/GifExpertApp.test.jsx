import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from '../src/components/AddCategory';
describe('Pruebas en el componente ', () => { 
    test('La funcion onAddCategory actualiza correctamente el estado de categories', () => { 

        render(<GifExpertApp onAddCategory = {newCategory}/>);

        expect(screen.getByText('Messi')).toBeTruthy();
        const inputElement = screen.getByPlaceholderText('Buscar gifs');

        screen.debug();
        
     })
 })