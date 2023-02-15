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
            user_id: null,
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
                        "https://3001-agusalvs-salvandopatita-dvamqb7fbf2.ws-us87.gitpod.io/api/registro", {
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
                        "https://3001-agusalvs-salvandopatita-dvamqb7fbf2.ws-us87.gitpod.io/api/autenticacion", {
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
                        setStore({
                            auth: true,
                            user_id: data.user_id,
                        });
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            publicar: (
                titulo,
                nombre,
                contacto,
                genero,
                ubicacion,
                raza,
                estado,
                descripcion,
                edad,
                categoria,
                tamaño,
                foto1,
                foto2,
                foto3
            ) => {
                //get the store
                const store = getStore();
                fetch(
                        "https://3001-agusalvs-salvandopatita-dvamqb7fbf2.ws-us87.gitpod.io/api/publicacion/" +
                        store.user_id, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({
                                titulo,
                                nombre,
                                contacto,
                                genero,
                                ubicacion,
                                edad,
                                raza,
                                estado,
                                descripcion,
                                categoria,
                                tamaño,
                                foto1: "",
                                foto2: "",
                                foto3: "",
                            }), // body data type must match "Content-Type" header
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 201) {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Has publicado correctamente",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.msg === "Intente nuevamente") {
                            alert(data.msg);
                        }
                        // localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            // TERMINA PUBLICAR
            enviarcorreo: (userCorreo) => {
                fetch(
                        "https://3001-agusalvs-salvandopatita-dvamqb7fbf2.ws-us87.gitpod.io/api/recuperar-contraseña", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({
                                email: userCorreo,
                            }), // body data type must match "Content-Type" header
                        }
                    )
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            Swal.fire(
                                "Se enviara un correo electrónico con la nueva contraseña"
                            );
                        }

                        if (response.status === 401) {
                            Swal.fire("Debe ingresar un correo electrónico");
                        }

                        if (response.status === 400) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "El correo electrónico ingresado no existe en nuestros registros",
                            });
                        }
                        return response.json();
                    })
                    .catch((err) => console.log(err));
            },

            // getMessage: async () => {
            //     try {
            //         // fetching data from the backend
            //         const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
            //         const data = await resp.json();
            //         setStore({
            //             message: data.message,
            //         });
            //         // don't forget to return something, that is how the async resolves
            //         return data;
            //     } catch (error) {
            //         console.log("Error loading message from backend", error);
            //     }
            // },

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
                const store = getStore();
                fetch(
                        "https://3001-agusalvs-salvandopatita-dvamqb7fbf2.ws-us87.gitpod.io/api/mascotas"
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