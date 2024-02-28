import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe regresar el estado inicial', () => { 

        const {result} = renderHook( () => useFetchGifs('Messi'));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        //const { images, isLoading  = useFetchGifs();

     });
     test('Debe retornar un arreglo de imágenes y el isLoading false', async() => { 
        const {result} = renderHook( () => useFetchGifs('Messi'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
 /*            {
    se puede prgramar un timeout  timeout: 2000 (viene en 1000 por defecto)
                } */
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
      })

 })