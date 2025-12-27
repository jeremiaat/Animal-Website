// Layout.js
import React from 'react';
// 🛑 IMPORTANT: Replace '../components/Navbar' and '../components/Footer' 
// with the actual path to your existing components.

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        // Use min-h-screen and flex to ensure the footer stays at the bottom
        <div className="flex flex-col min-h-screen bg-gray-950">
            <Navbar /> {/* Your existing Navbar component */}
            
            <main className="flex-grow">
                {children} {/* The main content (e.g., AnimalDetail) goes here */}
            </main>
            
            <Footer /> {/* Your existing Footer component */}
        </div>
    );
}