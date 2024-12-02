import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {

    const [data]= UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);

    return (
        <>
            <ul className='list_data_main'>
                {/* conditional rendering */}
                {data && data.map((item, index)=> 
                    <li className='list_data' key={index}>
                        <h3>{item.name}</h3>
                        <p><strong>Importance: </strong>{item.importance}</p>
                        <p><strong>Benefits: </strong>{item.benefits6}</p>
                        <p><strong>Time to eat: </strong>{item.best_time_to_intake}</p>           
                    </li>
                )}
            </ul>
        </>
    )
}

export default FetchData