import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_tnun9nc', 'template_vkny8yi', formData, 'mR-0fzyXSPwLl938m')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensaje enviado!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            }, (err) => {
                console.log('FAILED...', err);
                alert('Error al enviar el mensaje. Inténtalo de nuevo.');
            });
    };

    return (
        <section className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mt-8">
            <h2 className="text-4xl font-bold text-center text-fuchsia-500 mb-6">Contáctame</h2>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                {/* Formulario */}
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded-md border border-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu Correo"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded-md border border-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        required
                    />
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="p-3 rounded-md border border-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        required
                    >
                        <option value="" disabled>Selecciona un Asunto</option>
                        <option value="consulta">Consulta</option>
                        <option value="soporte">Soporte</option>
                        <option value="colaboración">Colaboración</option>
                    </select>
                    <textarea
                        name="message"
                        placeholder="Tu Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 rounded-md border border-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-md hover:bg-purple-600 transition duration-200"
                    >
                        Enviar Mensaje
                    </button>
                </form>

                {/* Mapa de Google */}
                <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-fuchsia-500 text-center mb-4">Ubicación</h3>
                    <div className="w-full h-80 mb-4"> {/* Aumenta la altura aquí */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3468589782056!2d-74.4480267854746!3d5.210814235647362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3c3748f75f4b5b%3A0x78f15409c4706c2b!2sPacho%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1617965025416!5m2!1ses-419!2sco"
                            width="100" 
                            height="100%"  // Cambia a 100% para que ocupe todo el contenedor
                            allowFullScreen="" 
                            loading="lazy" 
                            className="rounded-lg shadow-md w-full h-full"
                        ></iframe>
                    </div>
                    <p className="text-white text-center mb-2">¡Siempre estoy aquí para ayudarte!</p>
                    <p className="text-fuchsia-300 text-center mb-2 font-semibold">Horario de Atención:</p>
                    <p className="text-white text-center">Lunes a Viernes: <span className="font-bold">9 AM - 5 PM</span></p>
                    <p className="text-white text-center">Sábado: <span className="font-bold">10 AM - 2 PM</span></p>
                </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
                <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:underline">
                    <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:underline">
                    <FaGithub className="text-3xl" />
                </a>
                <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:underline">
                    <FaWhatsapp className="text-3xl" /> {/* Ícono de WhatsApp */}
                </a>
            </div>
        </section>
    );
};

export default Contact;
