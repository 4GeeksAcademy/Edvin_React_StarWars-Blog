import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { Context } from "../store/appContext.js";
import {PlanetDetails} from "../component/planetDetails.jsx"
import { VehicleDetails } from "../component/vehicleDetails.jsx";

export const NewDetails = () => {
    
    const {store, actions} = useContext(Context);

    const  {type, uid} = useParams()
    useEffect(()=>{
        actions.getOne(type, uid)
    },[])
    return(
        <>  
        {type === 'people' && <PeopleDetails
        name={store.single?.properties?.name}
        img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        height={store.single?.properties?.height}
        mass={store.single?.properties?.mass}
        hair_color={store.single?.properties?.hair_color}
        skin_color={store.single?.properties?.skin_color}
        eye_color={store.single?.properties?.eye_color}
        birth_year={store.single?.properties?.birth_year} 
        />
    }
            
        {type === 'planets' && <PlanetDetails
            name={store.single?.properties?.name}
            img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
            population={store.single?.properties?.population}
            climate={store.single?.properties?.climate}
            diameter={store.single?.properties?.diameter}
            terrain={store.single?.properties?.terrain}


            
        />}

        {type === 'vehicles' && <VehicleDetails
            name={store.single?.properties?.name}
            img={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
            model={store.single?.properties?.model}
            vehicle_class={store.single?.properties?.vehicle_class}
            length={store.single?.properties?.length}
            crew={store.single?.properties?.crew}
            max_atmosphering_speed={store.single?.properties?.max_atmosphering_speed}

            
        />}

        {type === 'planets' && <>People </>}
        {type === 'vehicles' && <>Planets </>}
        {type === 'planets' && <>Vehicles </>}

        
        </>
    )
} 