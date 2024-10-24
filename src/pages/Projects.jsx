import React from 'react';
import { FaReact, FaJsSquare, FaPhp, FaDatabase, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import calculadora from '../assets/img/calculadora2.png';
import veterinaria from '../assets/img/Veterinaria.png';
import tienda from '../assets/img/Tienda.png';

const Projects = () => {
    const projects = [
        {
            name: "Tienda de Mascotas",
            description: "Una tienda en línea donde los usuarios pueden comprar productos para sus mascotas. La tienda cuenta con un diseño moderno y una experiencia de usuario intuitiva.",
            image: tienda,
            technologies: [
                <FaReact className="text-blue-500" />,
                <FaJsSquare className="text-yellow-500" />,
                <SiTailwindcss className="text-sky-400" />
            ],
            link: "https://github.com/angelicaB1021/GRUPO-D.git", // Enlace a GitHub
        },
        {
            name: "Calculadora",
            description: "Una calculadora interactiva que permite realizar operaciones matemáticas básicas. Su diseño es sencillo y funcional, ideal para aprender JavaScript.",
            image: calculadora,
            technologies: [
                <FaJsSquare className="text-yellow-500" />
            ],
            link: "", // Enlace a GitHub
        },
        {
            name: "Veterinaria Nuevo Horizonte",
            description: "Un sistema de gestión para una veterinaria que incluye citas, historial médico y gestión de clientes. El frontend está construido con React, mientras que el backend utiliza PHP y MySQL.",
            image: veterinaria,
            technologies: [
                <FaPhp className="text-blue-500" />,
                <FaDatabase className="text-green-500" />,
                <FaReact className="text-blue-500" />,
                <FaBootstrap className="text-purple-600" />
            ],
            link: "", // Enlace a GitHub
        },
    ];

    return (
        <section className="p-6">
            <h2 className="text-5xl font-bold text-center text-gradient mb-4">Proyectos</h2>
            <div className="flex flex-wrap justify-center space-x-4">
                {projects.map((project) => (
                    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-lg shadow-md max-w-xs mb-4" key={project.name}>
                        <img src={project.image} alt={project.name} className="mb-6 rounded-lg h-60 object-contain mx-auto" />
                        <h3 className="text-2xl font-semibold text-fuchsia-300 mb-2 text-center">{project.name}</h3>
                        <p className="text-xl text-white mb-2 text-justify">{project.description}</p>
                        <div className="flex justify-center space-x-2 mb-4">
                            {project.technologies.map((icon, index) => (
                                <span key={index} className="text-2xl">{icon}</span>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center bg-fuchsia-500 text-white py-2 px-4 rounded hover:bg-fuchsia-600 transition"
                            >
                                <FaGithub className="mr-2" /> Ver en GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .text-gradient {
                    background: linear-gradient(90deg, #ff0080, #ff8c00); /* Degradado fucsia a naranja */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </section>
    );
};

export default Projects;

