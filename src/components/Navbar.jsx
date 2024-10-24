import React from 'react';
import { NavLink } from 'react-router-dom';
import Logow from "../assets/img/Logow.png"; 

const Navbar = () => {
    return (
        <nav className="bg-gray-900 py-4"> {/* Fondo oscuro para el Navbar */}
            <div className="flex items-center justify-between px-4"> {/* Justificar entre espacio y agregar padding */}
                <NavLink to="/" className="flex items-center"> {/* Hacer clickeable el logo */}
                    <img src={Logow} alt="Logo" className="h-20 mr-7" /> {/* Aumentar el tamaño del logo */}
                </NavLink>
                <ul className="flex space-x-8"> {/* Espacio entre los enlaces */}
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-white font-bold' // Cambia a blanco si está activo
                                    : 'text-gradient font-bold hover:text-white'
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-white font-bold'
                                    : 'text-gradient font-bold hover:text-white'
                            }
                        >
                            Acerca de Mi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-white font-bold'
                                    : 'text-gradient font-bold hover:text-white'
                            }
                        >
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Education"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-white font-bold'
                                    : 'text-gradient font-bold hover:text-white'
                            }
                        >
                            Educación
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Projects"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-white font-bold'
                                    : 'text-gradient font-bold hover:text-white'
                            }
                        >
                            Projectos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Experience"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-white font-bold'
                                    : 'text-gradient font-bold hover:text-white'
                            }
                        >
                            Servicios & Experiencia
                        </NavLink>
                    </li>
                </ul>
            </div>

            <style>{`
                .text-gradient {
                    background: linear-gradient(90deg, #ff0080, #ff8c00); /* Degradado fucsia a naranja */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;


