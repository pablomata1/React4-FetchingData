import React from "react";
import UseFetch from "./UseFetch";


const FetchYogaData = () => {

    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return (
        <div>
            <ul className="list_data_main">
                {data && data.map(item => 
                    <li className="list_data">
                        <h1>{item.name}</h1>
                        <p><strong>Benefits: </strong> {item.benefits}</p>
                    </li>
                )}
                
            </ul>
        </div>
    )
}

export default FetchYogaData