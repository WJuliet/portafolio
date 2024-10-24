import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaDatabase, FaTools, FaJs, FaReact, FaBootstrap, FaCss3Alt } from 'react-icons/fa';
import { SiPhp, SiMysql, SiNodedotjs, SiHtml5, SiTailwindcss } from 'react-icons/si';

const Experience = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8">
            {/* Servicios Ofrecidos */}
            <section className="mt-8 mx-auto max-w-4xl">
                <h3 className="text-5xl font-bold text-gradient text-center mb-4">Servicios Ofrecidos</h3>
                <div className="flex justify-center">
                    {[
                        {
                            icon: <FaLaptopCode className="text-fuchsia-300 text-6xl" />, 
                            title: "Desarrollo Frontend",
                            description: "Creación de interfaces de usuario responsivas utilizando React, Tailwind CSS y JavaScript."
                        },
                        {
                            icon: <FaDatabase className="text-fuchsia-300 text-6xl" />, 
                            title: "Desarrollo Backend",
                            description: "Implementación de APIs y sistemas de gestión con PHP y MySQL."
                        },
                        {
                            icon: <FaTools className="text-fuchsia-300 text-6xl" />, 
                            title: "Mantenimiento de Sitios",
                            description: "Actualización y mantenimiento de sitios existentes utilizando herramientas como Git."
                        },
                    ].map((service, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center mx-2 flex-col text-center w-64">
                            {service.icon}
                            <h4 className="text-2xl font-semibold text-fuchsia-300 mt-4">{service.title}</h4>
                            <p className="text-xl text-white">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Iconos de habilidades con animación */}
            <div className="flex flex-wrap justify-center mt-8">
                {[
                    { icon: <SiHtml5 className="text-red-500 text-6xl m-4 animate-bounce" />, label: "HTML" },
                    { icon: <FaJs className="text-yellow-400 text-6xl m-4 animate-bounce" />, label: "JavaScript" },
                    { icon: <FaReact className="text-blue-400 text-6xl m-4 animate-bounce" />, label: "React" },
                    { icon: <FaBootstrap className="text-purple-600 text-6xl m-4 animate-bounce" />, label: "Bootstrap" },
                    { icon: <SiNodedotjs className="text-green-500 text-6xl m-4 animate-bounce" />, label: "Node.js" },
                    { icon: <FaCss3Alt className="text-blue-500 text-6xl m-4 animate-bounce" />, label: "CSS3" },
                    { icon: <SiPhp className="text-blue-600 text-6xl m-4 animate-bounce" />, label: "PHP" },
                    { icon: <SiMysql className="text-orange-600 text-6xl m-4 animate-bounce" />, label: "MySQL" },
                    { icon: <SiTailwindcss className="text-cyan-400 text-6xl m-4 animate-bounce" />, label: "Tailwind CSS" },
                ].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {skill.icon}
                        <span className="text-white mt-2">{skill.label}</span>
                    </div>
                ))}
            </div>

            {/* Experiencia Profesional */}
            <section className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mt-8 mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold text-center text-gradient mb-4">Experiencia Profesional</h2>
                <p className="text-xl text-white text-center mb-6">
                    Aunque estoy comenzando mi carrera, he trabajado en varios proyectos que me han permitido adquirir habilidades valiosas en desarrollo web.
                </p>

                {/* Botón para redirigir a proyectos */}
                <div className="text-center mb-6">
                    <button
                        onClick={() => navigate('/Projects')}
                        className="bg-fuchsia-500 text-white font-bold py-2 px-6 rounded hover:bg-fuchsia-600 transition"
                    >
                        Ver Proyectos
                    </button>
                </div>

                <div className="mb-6">
                    <h3 className="text-3xl font-semibold text-gradient text-center mb-4">Logros Académicos</h3>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h4 className="text-2xl font-semibold text-fuchsia-300">Curso de Desarrollo Web Frontend (Bootcamp con Keycode)</h4>
                        <p className="text-xl text-white">
                            Completé un curso enfocado en el desarrollo frontend, donde adquirí habilidades prácticas en programación web.
                        </p>
                    </div>
                </div>

                <p className="text-md text-white text-center">
                    Estoy entusiasmada por seguir aprendiendo y buscar oportunidades que me permitan contribuir y crecer profesionalmente.
                </p>
            </section>
        </div>
    );
};

export default Experience;

<style >{`
    .text-gradient {
        background: linear-gradient(90deg, #ff0080, #ff8c00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .animate-bounce {
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-15px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
`}</style>

