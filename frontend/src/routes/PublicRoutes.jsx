import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export function PublicRoute() {
    const [tokenValido, setTokenValido] = useState(null); // Inicialmente null para mostrar el estado de carga

    useEffect(() => {
        const token = localStorage.getItem('token'); // Obtener el token de localStorage

        const validarSesion = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const informacion = response.data;
                if (informacion) {
                    setTokenValido(true);
                }
            } catch (error) {
                setTokenValido(false);
            }
        };

        if (token) {
            validarSesion();
        } else {
            setTokenValido(false);
        }
    }, []);

    if (tokenValido === null) {
        return <div>Cargando...</div>; // Mostrar un estado de carga mientras se valida el token
    }

    return tokenValido ? <Navigate to='/home' /> : <Outlet />;
}