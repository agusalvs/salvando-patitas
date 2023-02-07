const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            mascotas: [],
        },
        actions: {
            // Use getActions to call a function within a fuction

            mascotas: () => {
                /**
                                fetch().then().then(data => setStore({ "foo": data.bar }))
                                */
                fetch(
                        "https://3001-agusalvs-salvandopatita-wx8864spzly.ws-us85.gitpod.io/mascota"
                    )
                    .then((res) => res.json())
                    // .then(data => console.log(data))
                    .then((data) =>
                        setStore({
                            characters: data.results,
                        })
                    );
                // .catch(err => console.error(err))
            },
        },
    };
};

export default getState;