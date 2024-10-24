import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Video from '../assets/img/Video.mp4';
import { FaRegCommentDots, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const SocialLinks = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col space-y-4 items-center">
            <button
                onClick={() => navigate('/Contact')}
                className="text-fuchsia-500 hover:text-white transition"
                title="Contáctame"
            >
                <FaRegCommentDots size={30} />
            </button>
            <button
                onClick={() => window.location.href = 'mailto:tuemail@example.com'}
                className="text-fuchsia-500 hover:text-white transition"
                title="Correo Electrónico"
            >
                <FaEnvelope size={30} />
            </button>
            <a
                href="/Celula.pdf"
                download
                className="text-fuchsia-500 hover:text-white transition"
                title="Hoja de Vida"
            >
                <FaFilePdf size={30} />
            </a>
        </div>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "¡Hola! Soy Wanda";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index += 1;
            if (index === fullText.length) clearInterval(interval);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-white p-6 mx-4 md:mx-10 relative overflow-hidden">
            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={Video} type="video/mp4" />
                Tu navegador no soporta videos.
            </video>

            {/* Contenedor de opacidad */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenedor para el texto */}
            <div className="relative z-10 bg-black bg-opacity-90 p-6 rounded-lg flex flex-col md:flex-row">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold mb-6 text-gradient text-center">¡Bienvenidos a Mi Portafolio!</h1>

                    {/* Sección de Introducción */}
                    <div className="flex flex-col md:flex-row items-center mb-10">
                        <div className="relative mb-6 md:mb-0">
                            <img
                                src="https://th.bing.com/th/id/OIP.x1gRD1SuOKe3PRCLp3oKTwHaI6?w=1596&h=1920&rs=1&pid=ImgDetMain"
                                alt="Avatar de Wanda"
                                className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-purple-500 glow"
                            />
                            <style>{`
                                .glow {
                                    box-shadow: 0 0 20px rgba(128, 0, 128, 0.7);
                                }
                            `}</style>
                        </div>
                        <div className="flex flex-col items-start md:ml-8">
                            <h2 className="text-5xl font-bold mb-2 text-gradient animate-pulse">{displayedText}</h2>
                            <h3 className="text-3xl font-semibold mb-4 text-fuchsia-500">Analista y Desarrolladora Web Creativa</h3>
                            <p className="text-lg mb-4 text-orange-400 text-xl">
                                Soy una apasionada desarrolladora web que se dedica a crear soluciones innovadoras y eficientes.
                            </p>
                            <button
                                onClick={() => navigate('/Projects')}
                                className="bg-fuchsia-500 text-white font-bold py-2 px-6 rounded hover:bg-fuchsia-600 transition"
                            >
                                Ver Proyectos
                            </button>
                        </div>
                    </div>

                    {/* Mensaje Inspirador */}
                    <div className="mb-10 text-center">
                        <h3 className="text-4xl font-semibold mb-6 text-gradient">¡Transforma tus ideas en realidades!</h3>
                        <p className="text-lg text-gray-300 mb-4 text-xl">
                            Estoy aquí para ayudarte a hacer que tus sueños digitales se hagan realidad.
                            La creatividad y la tecnología son mis pasiones.
                        </p>
                    </div>

                    {/* Enlace a la página de habilidades */}
                    <div>
                        <button
                            onClick={() => navigate('/About#habilidades')}
                            className="bg-fuchsia-500 text-white font-bold py-2 px-6 rounded hover:bg-fuchsia-600 transition"
                        >
                            Ver Mis Habilidades
                        </button>
                    </div>
                </div>
            </div>

            {/* Componente de redes sociales a la derecha del contenedor del video */}
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 md:right-10 md:top-1/3">
                <SocialLinks />
            </div>

            <style>{`
                .text-gradient {
                    background: linear-gradient(90deg, #ff0080, #ff8c00);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </section>
    );
};

export default Home;

