const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			planets: [],
			vehicles:[],
			single: {},
			favourites: []

		},
		actions: {
			addToFavourite: (item) => {
				const store = getStore();
				const newFavourite = [...store.favourites, item];
				setStore({favourites: newFavourite})
			},

			
			
			getData: async(type) =>{
				try {
					const store = getStore();
					const resp = await fetch(store.url+`/${type}`);
					if (!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					setStore({[type]: data.results	})
				} catch (error) {
					console.error(error);
					  
				}
			},

			getOne: async(type, uid) =>{
				try {
					const store = getStore();
					const resp = await fetch(store.url+`/${type}/${uid}`);
					if (!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					setStore({single: data.result})
				} catch (error) {
					console.error(error);
					  
				}
			},



			clearSingle: () => setStore({single: {}})
		}
	};
};
 
export default getState;
