import Swal from "sweetalert2";
import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      mascotas: [],
      Swal: require("sweetalert2"),
      user_id: null,
      mascota: {},
      mercadopago: {},
      auth: false,
      localizacion: {},
      url: "https://3001-agusalvs-salvandopatita-29i687tsudv.ws-us88.gitpod.io",
    },
    actions: {
      // Use getActions to call a function within a fuction
      // REGISTRARSE
      signup: (
        userNombre,
        userCorreo,
        userCelular,
        userContraseña,
        userDireccion
      ) => {
        const store = getStore();
        fetch(store.url + "/api/registro", {
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
        })
          .then((response) => {
            console.log(response.status);
            if (response.status === 201) {
              Swal.fire({
                position: "center",
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

      // INICIAR SESIÓN
      login: (userEmail, userPassword) => {
        const store = getStore();
        fetch(store.url + "/api/autenticacion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email: userEmail,
            contraseña: userPassword,
          }), // body data type must match "Content-Type" header
        })
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              setStore({
                auth: true,
              });
              Swal.fire({
                position: "center",
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
            } else if (data.msg === "El usuario no existe") {
              Swal.fire({
                title: data.msg + ". Necesitas registrarte",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            } else if (store.auth === true) {
              setStore({
                user_id: data.user_id,
              });
            }
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("ID", data.user_id);
          })
          .catch((err) => console.log(err));
      },
      // PUBLICAR
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
        let ID = localStorage.getItem("ID");
        const store = getStore();
        const localizacion = store.localizacion;
        fetch(store.url + "/api/publicacion/" + ID, {
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
            localizacion: localizacion["lat"] + ", " + localizacion["lng"],
            foto1: "",
            foto2: "",
            foto3: "",
          }), // body data type must match "Content-Type" header
        })
          .then((response) => {
            console.log(response.status);
            if (response.status === 201) {
              Swal.fire({
                position: "center",
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

      // ENVIAR CORREO CON NUEVA CONTRASEÑA
      enviarcorreo: (userCorreo) => {
        const store = getStore();
        fetch(store.url + "/api/recuperar-contraseña", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email: userCorreo,
          }), // body data type must match "Content-Type" header
        })
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

      // CERRAR SESIÓN
      logout: () => {
        localStorage.removeItem("token");
        setStore({
          auth: false,
        });
      },

      // OBTENER INFORMACIÓN DE LAS MASCOTAS
      mascotasHome: () => {
        const store = getStore();
        fetch(store.url + "/api/mascotas")
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

      // CAMBIAR CONTRASEÑA
      cambiar: (userContraseñagmail, userNuevacontraseña) => {
        let ID = localStorage.getItem("ID");
        const store = getStore();
        fetch(store.url + "/api/cambiar-contrasena/" + ID, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            viejacontrasena: userContraseñagmail,
            nuevacontrasena: userNuevacontraseña,
          }), // body data type must match "Content-Type" header
        })
          .then((response) => {
            console.log(response.status);
            if (response.status === 201) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Contraseña cambiada correctamente",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            if (response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Contraseña incorrecta",
              });
            }

            return response.json();
          })
          .catch((err) => console.log(err));
      },

      // OBTENER INFORMACIÓN DE UNA MASCOTA
      getSingleMascota: (id) => {
        const store = getStore();
        fetch(store.url + "/api/mascotas/" + id)
          .then((res) => res.json())
          .then(
            (data) =>
              setStore({
                mascota: data,
              }),
            console.log(id)
          )
          // .then((data) => console.log(data))
          .catch((err) => console.error(err));
      },

      // VERIFICAR AUTORIZACIÓN
      checkAuth: () => {
        if (localStorage.getItem("token")) {
          setStore({
            auth: true,
          });
        } else {
          setStore({
            auth: false,
          });
        }
      },
      localizacion: (latLong) => {
        console.log(latLong);
        setStore({
          localizacion: "",
        });
        setStore({
          localizacion: latLong,
        });
      },
      filterSearch: (tipodeanimal, raza, tamaño, genero) => {
        const store = getStore();
        const results = store.mascotas.filter((item) => {
          if (
            item.categoria
              ?.toString()
              ?.toLowerCase()
              ?.includes(tipodeanimal.toLowerCase()) &&
            item.raza
              ?.toString()
              ?.toLowerCase()
              ?.includes(raza.toLowerCase()) &&
            item.tamaño
              ?.toString()
              ?.toLowerCase()
              ?.includes(tamaño.toLowerCase()) &&
            item.genero
              ?.toString()
              ?.toLowerCase()
              ?.includes(genero.toLowerCase())
          ) {
            console.log(item.categoria);
            return item;
          }
        });
        console.log(results);
        console.log(store.mascotas);
      },
      // MERCADO PAGO
      pagoMercadoPago: async () =>
        /*aca deberian ir los productos
         */
        {
          const store = getStore();
          try {
            const response = await axios.post(
              store.url + "/api/createPreference",
              {}
            );
            setStore({
              mercadopago: response.data,
            });
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        },
    },
  };
};

export default getState;
