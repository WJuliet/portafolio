import React, { useState } from 'react';
import { FaReact, FaJs, FaBootstrap, FaCss3Alt, FaPhp, FaTools, FaUserFriends, FaServer, FaArrowDown, FaArrowRight, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { SiTailwindcss, SiHtml5, SiNodedotjs, SiMysql } from 'react-icons/si';

const About = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const skillsData = {
        interfaz: [
            { label: "HTML", icon: <SiHtml5 className="text-red-500 text-4xl" /> },
            { label: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
            { label: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
            { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
            { label: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
            { label: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
        ],
        backend: [
            { label: "Node.js", icon: <SiNodedotjs className="text-green-500 text-4xl" /> },
            { label: "Express.js", icon: <FaServer className="text-gray-500 text-4xl" /> },
            { label: "PHP", icon: <FaPhp className="text-blue-600 text-4xl" /> },
            { label: "MySQL", icon: <SiMysql className="text-orange-600 text-4xl" /> },
        ],
        herramientas: [
            { label: "GitHub", icon: <FaTools className="text-gray-400 text-4xl" /> },
            { label: "Visual Studio Code", icon: <FaTools className="text-gray-400 text-4xl" /> },
            { label: "Paquete Web", icon: <FaTools className="text-gray-400 text-4xl" /> },
        ],
        habilidadesBlandas: [
            { label: "Resolución de Problemas", icon: <FaUserFriends className="text-gray-400 text-4xl" /> },
            { label: "Colaboración", icon: <FaUserFriends className="text-gray-400 text-4xl" /> },
            { label: "Atención al Cliente", icon: <FaUserFriends className="text-gray-400 text-4xl" /> },
        ],
    };

    const handleToggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className="max-w-6xl mx-auto text-justify mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sección Acerca de Mí */}
                <section className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
                    <h2 className="text-5xl font-extrabold text-center text-gradient mb-4 font-serif">Acerca de Mí</h2>
                    <div className="flex justify-center mb-4">
                        <img 
                            src="https://via.placeholder.com/150" // foto perfil
                            alt="Wanda"
                            className="rounded-full w-32 h-32 object-cover shadow-lg"
                        />
                    </div>
                    <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                        ¡Hola! Soy Wanda, una apasionada de la tecnología y el desarrollo web. 
                        Me encanta crear aplicaciones que no solo sean funcionales, sino también visualmente atractivas.
                        Con experiencia en React, JavaScript y diseño de interfaces, siempre busco aprender 
                        y mejorar mis habilidades. 
                    </p>
                    <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                        Mi objetivo es transformar ideas en realidades digitales y ofrecer experiencias excepcionales 
                        a los usuarios. Estoy emocionada por la oportunidad de colaborar y crecer en este emocionante campo.
                    </p>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        Fuera del trabajo, disfruto de la fotografía, la lectura y explorar nuevas tecnologías, 
                        lo que me ayuda a mantenerme creativa y motivada.
                    </p>
                </section>

                {/* Sección de Habilidades */}
                <div className="mt-8">
                    <h3 className="text-3xl font-semibold text-center text-gradient mb-6 font-serif">Habilidades Técnicas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {/* Interfaz */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleToggleCategory('interfaz')}>
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-semibold text-fuchsia-300">Interfaz <FaLaptopCode  className="ml-2" /></h4>
                                {openCategory === 'interfaz' ? <FaArrowDown className="text-fuchsia-300" /> : <FaArrowRight className="text-fuchsia-300" />}
                            </div>
                            {openCategory === 'interfaz' && (
                                <div className="mt-2">
                                    {skillsData.interfaz.map(({ label, icon }, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded-lg mt-2">
                                            <div className="flex items-center">
                                                {icon}
                                                <span className="text-gray-300 ml-2">{label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Backend */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleToggleCategory('backend')}>
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-semibold text-fuchsia-300">Backend <FaDatabase className="ml-2" /></h4>
                                {openCategory === 'backend' ? <FaArrowDown className="text-fuchsia-300" /> : <FaArrowRight className="text-fuchsia-300" />}
                            </div>
                            {openCategory === 'backend' && (
                                <div className="mt-2">
                                    {skillsData.backend.map(({ label, icon }, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded-lg mt-2">
                                            <div className="flex items-center">
                                                {icon}
                                                <span className="text-gray-300 ml-2">{label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Herramientas */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleToggleCategory('herramientas')}>
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-semibold text-fuchsia-300">Herramientas <FaTools className="ml-2" /></h4>
                                {openCategory === 'herramientas' ? <FaArrowDown className="text-fuchsia-300" /> : <FaArrowRight className="text-fuchsia-300" />}
                            </div>
                            {openCategory === 'herramientas' && (
                                <div className="mt-2">
                                    {skillsData.herramientas.map(({ label, icon }, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded-lg mt-2">
                                            <div className="flex items-center">
                                                {icon}
                                                <span className="text-gray-300 ml-2">{label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Habilidades Blandas */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => handleToggleCategory('habilidadesBlandas')}>
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-semibold text-fuchsia-300">Habilidades Blandas <FaUserFriends className="ml-2" /></h4>
                                {openCategory === 'habilidadesBlandas' ? <FaArrowDown className="text-fuchsia-300" /> : <FaArrowRight className="text-fuchsia-300" />}
                            </div>
                            {openCategory === 'habilidadesBlandas' && (
                                <div className="mt-2">
                                    {skillsData.habilidadesBlandas.map(({ label, icon }, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded-lg mt-2">
                                            <div className="flex items-center">
                                                {icon}
                                                <span className="text-gray-300 ml-2">{label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

<style>{`
    .text-gradient {
        background: linear-gradient(90deg, #ff0080, #ff8c00); /* Degradado fucsia a naranja */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`}</style>










