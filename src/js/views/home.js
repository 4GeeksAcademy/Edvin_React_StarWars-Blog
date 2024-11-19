import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { GeneralCard } from "../component/generalCard.jsx";

export const Home = () => {	
	const { store, actions } = useContext(Context);

	useEffect(()=> {
		actions.clearSingle()
	},[])

	return (
		<div className="text-center mt-5">
			<div className="row">

			<h2>People</h2>
			{store.people?.map(person => <GeneralCard
			key={person.uid}  
			uid={person.uid}
			name={person.name}
			type={'people'}
			img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
			/>)}

			<h2>Planets</h2> 
			{store.planets?.map(planet => <GeneralCard
			key={planet.uid}  
			uid={planet.uid}
			name={planet.name}
			type={'planets'}
			img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
			/>)}
			
			<h2>Vehicles</h2> 
			{store.vehicles?.map(vehicle => <GeneralCard
			key={vehicle.uid}  
			uid={vehicle.uid}
			name={vehicle.name}
			type={'vehicles'}
			img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
			/>)}

			<h2>Starships</h2> 
			{store.starships?.map(starship => <GeneralCard
			key={starship.uid}  
			uid={starship.uid}
			name={starship.name}
			type={'starships'}
			img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
			/>)}

			
			

			</div>
	
		</div>
	)
};
