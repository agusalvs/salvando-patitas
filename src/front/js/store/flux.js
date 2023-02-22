import Swal from "sweetalert2";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      mascotas: [],
      Swal: require("sweetalert2"),
      user_id: null,
      mascota: {},
      auth: false,
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
        fetch(
          "https://3001-agusalvs-salvandopatita-qzngnibyhp6.ws-us87.gitpod.io/api/registro",
          {
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
        fetch(
          "https://3001-agusalvs-salvandopatita-qgdzse0gyv0.ws-us87.gitpod.io/api/autenticacion",
          {
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
                title: data.msg,
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
        const store = getStore();
        fetch(
          "https://3001-agusalvs-salvandopatita-qgdzse0gyv0.ws-us87.gitpod.io/api/publicacion/" +
            store.user_id,
          {
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
        fetch(
          "https://3001-agusalvs-salvandopatita-qzngnibyhp6.ws-us87.gitpod.io/api/recuperar-contraseña",
          {
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
        fetch(
          "https://3001-agusalvs-salvandopatita-5gl3yjykzfl.ws-us87.gitpod.io/api/mascotas"
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

      // CAMBIAR CONTRASEÑA
      cambiar: (userContraseñagmail, userNuevacontraseña) => {
        let ID = localStorage.getItem("ID");
        fetch(
          "https://3001-agusalvs-salvandopatita-qzngnibyhp6.ws-us87.gitpod.io/api/cambiar-contrasena/" +
            ID,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              viejacontrasena: userContraseñagmail,
              nuevacontrasena: userNuevacontraseña,
            }), // body data type must match "Content-Type" header
          }
        )
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
        fetch(
          "https://3001-agusalvs-salvandopatita-qzngnibyhp6.ws-us87.gitpod.io/api/mascotas/" +
            id
        )
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
    },
  };
};
export default getState;
