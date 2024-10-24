import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaClock } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Footer = () => {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString(); // Formato de fecha
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString(); // Formato de hora
    };

    const toggleCalendar = () => {
        setShowCalendar((prev) => !prev);
    };

    return (
        <footer className="bg-gray-900 text-white py-6 mt-10 relative">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="mr-4 cursor-pointer" onClick={toggleCalendar}>
                        <span className="font-semibold">{formatDate(date)}</span>
                    </div>
                    {showCalendar && (
                        <div className="absolute bottom-full mb-2 bg-gray-800 rounded-md shadow-lg z-10 w-full max-w-[300px]">
                            <Calendar 
                                onChange={setDate} 
                                value={date} 
                                className="bg-gray-800 rounded-md"
                                tileClassName={({ date, view }) => {
                                    if (view === 'month') {
                                        const day = date.getDay();
                                        if (day === 0 || day === 6) {
                                            return 'react-calendar__tile--weekend'; // Clase para sábados y domingos
                                        }
                                    }
                                    return null;
                                }}
                                onClickDay={() => setShowCalendar(false)} // Cierra el calendario al seleccionar un día
                            />
                        </div>
                    )}
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-green-500 hover:text-green-400 transition-colors" size={30} />
                    </a>
                    <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-gray-400 hover:text-gray-300 transition-colors" size={30} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 hover:text-blue-500 transition-colors" size={30} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-400 hover:text-gray-300 transition-colors" size={30} />
                    </a>
                </div>

                <div className="flex items-center text-lg font-semibold">
                    <FaClock className="mr-2" />
                    {formatTime(date)}
                </div>
            </div>

            <p className="text-sm text-gray-400 text-center mt-4">© 2024 Wanda Morelo. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;









