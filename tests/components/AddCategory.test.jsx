import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {

    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        screen.debug();

    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Taylor';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory    } />);

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        //screen.debug()
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
    });

});