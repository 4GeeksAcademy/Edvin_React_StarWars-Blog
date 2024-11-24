const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		url: "https://www.swapi.tech/api",
		people: [],
		planets: [],
		vehicles: [],
		single: {},
		favourites: [],
	  },
	  actions: {
		addToFavourite: (item) => {
		  const store = getStore();
  
		  // Verificar si ya existe en favoritos
		  const isAlreadyFavorite = store.favourites.some(
			(fav) => fav.uid === item.uid && fav.type === item.type
		  );
  
		  let updatedFavourites;
		  if (isAlreadyFavorite) {
			// Si ya existe, eliminarlo
			updatedFavourites = store.favourites.filter(
			  (fav) => !(fav.uid === item.uid && fav.type === item.type)
			);
		  } else {
			// Si no existe, agregarlo
			updatedFavourites = [...store.favourites, item];
		  }
  
		  // Actualizar el estado global
		  setStore({ favourites: updatedFavourites });
		},
  
		getData: async (type) => {
		  try {
			const store = getStore();
			const resp = await fetch(store.url + `/${type}`);
			if (!resp.ok) throw new Error("Error fetching data");
			const data = await resp.json();
			setStore({ [type]: data.results });
		  } catch (error) {
			console.error(error);
		  }
		},
  
		getOne: async (type, uid) => {
		  try {
			const store = getStore();
			const resp = await fetch(store.url + `/${type}/${uid}`);
			if (!resp.ok) throw new Error("Error fetching data");
			const data = await resp.json();
			setStore({ single: data.result });
		  } catch (error) {
			console.error(error);
		  }
		},
  
		clearSingle: () => setStore({ single: {} }),
	  },
	};
  };
  
  export default getState;
  