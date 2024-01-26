import { GifItem } from './GifItem'
import { Loader } from './Loader'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)


    return (
        <>
        <h3>{category}</h3>
        
        { isLoading && <Loader /> }

        <div className='card-grid'>
            {
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        {...image /* el componente recibe todas las props de image iterando */}
                    />
                ))
            }
        </div>
        </>
    )
}
