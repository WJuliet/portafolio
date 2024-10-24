import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import jsCertificate from "../assets/img/js.png"; 

const Education = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const courses = [
        { name: "JavaScript y Node.js", description: "Aprendí los fundamentos de JavaScript y su uso en aplicaciones web.", certificate: jsCertificate, date: "Ocrubre 2024" },
        { name: "Desarrollo Web FrontEnd", description: "Desarrollé aplicaciones interactivas utilizando React.", certificate: "https://example.com/certificado-react.jpg", date: "Noviembre 2024" },
        { name: "Ciberseguridad de Google", description: "Estudié técnicas para proteger sistemas informáticos.", certificate: "https://example.com/certificado-ciberseguridad.jpg", date: "Diciembre 2024" },
        { name: "Fundamentos de IA de Google", description: "Introducción a los conceptos y herramientas de IA.", certificate: "https://example.com/certificado-ai.jpg", date: "Diciembre 2024" },
    ];

    return (
        <section className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mt-8 mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold text-center text-gradient mb-4">Educación</h2>

            {/* Título del Tecnólogo */}
            <div className="mb-6 text-center">
                <h3 className="text-3xl font-semibold text-fuchsia-300 flex items-center justify-center">
                    Tecnólogo en Análisis y Desarrollo de Software 
                    <FaEye className="ml-2 cursor-pointer" onClick={() => handleImageClick("https://example.com/tu-titulo.jpg")} />
                </h3>
            </div>

            {/* Separador */}
            <hr className="border-t border-fuchsia-300 mb-6"/>

            {/* Certificados y Cursos */}
            <h4 className="text-4xl font-semibold text-gradient mb-4 text-center">Cursos</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {courses.map((course) => (
                    <div className="text-center bg-gray-800 p-4 rounded-lg" key={course.name}>
                        <h3 className="text-2xl font-semibold text-fuchsia-300 mb-2 flex items-center justify-center">
                            {course.name} <FaEye className="ml-2 cursor-pointer" onClick={() => handleImageClick(course.certificate)} />
                        </h3>
                        <p className="text-xl text-white mb-1">{course.description}</p>
                        <p className="text-md text-gray-400">{course.date}</p>
                    </div>
                ))}
            </div>

            {/* Modal para mostrar la imagen seleccionada */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-4">
                        <img src={selectedImage} alt="Certificado" className="max-w-md h-auto rounded-lg" />
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Education;

<style>{`
    .text-gradient {
        background: linear-gradient(90deg, #ff0080, #ff8c00); /* Degradado fucsia a naranja */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`}</style>
