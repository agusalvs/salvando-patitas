import Swal from "sweetalert2";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            mascotas: [],
            Swal: require("sweetalert2"),
        },
        actions: {
            // Use getActions to call a function within a fuction

            signup: (
                userNombre,
                userCorreo,
                userCelular,
                userContraseña,
                userDireccion
            ) => {
                fetch(
                        "https://3001-agusalvs-salvandopatita-k1ohxz9phha.ws-us86.gitpod.io/api/registro", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({
                                nombre: userNombre,
                                email: userCorreo,
                                celular: userCelular,
                                contraseña: userContraseña,
                                direccion: userDireccion,
                            }), // body data type must match "Content-Type" header
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 201) {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Te registraste correctamente",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            setStore({
                                auth: true,
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.msg === "Bad email or password") {
                            alert(data.msg);
                        }
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            login: (userEmail, userPassword) => {
                fetch(
                        "https://3001-agusalvs-salvandopatita-k1ohxz9phha.ws-us86.gitpod.io/api/autenticacion", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({
                                email: userEmail,
                                contraseña: userPassword,
                            }), // body data type must match "Content-Type" header
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            // setStore({
                            //     showModal: "show"
                            // });
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Has iniciado sesión",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            setStore({
                                auth: true,
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.msg === "Usuario o contraseña incorrectos") {
                            Swal.fire({
                                icon: "error",
                                title: "Opa, qué rompimo'?...",
                                text: data.msg,
                                // footer: '<a href="">Why do I have this issue?</a>'
                            })(data.msg);
                        } else if (data.msg === "Necesitas registrarte") {
                            Swal.fire({
                                title: data.msg,
                                showClass: {
                                    popup: "animate__animated animate__fadeInDown",
                                },
                                hideClass: {
                                    popup: "animate__animated animate__fadeOutUp",
                                },
                            });
                        }
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },

            // para cerrar sesion:
            logout: () => {
                localStorage.removeItem("token");
                setStore({
                    auth: false,
                });
            },

            mascotasHome: () => {
                let store = getStore();
                fetch(
                        "https://3001-agusalvs-salvandopatita-k1ohxz9phha.ws-us86.gitpod.io/api/mascotas"
                    )
                    .then((res) => res.json())
                    // .then((data) => console.log(data))
                    .then((data) =>
                        setStore({
                            mascotas: data,
                        })
                    )
                    .catch((err) => console.error(err));
                return store.mascotas;

                // console.log(store.mascotas);
            },
        },
    };
};
export default getState;