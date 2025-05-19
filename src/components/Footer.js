import React from 'react';

const Footer = () => {
return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Movie Streaming App. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
        </div>
        </div>
    </footer>
);
};

export default Footer;