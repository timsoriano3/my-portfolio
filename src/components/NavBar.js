import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                     to="/" 
                     exact 
                     className="inflex-flex items-center py-6 px-3 mr-4 text-blue-200 hover:text-yellow-400 text-4xl font-bold my_name tracking-widest"
                     activeClassName="text-yellow-400"
                    >
                        Peter
                    </NavLink>
                    <NavLink 
                     to="/post" 
                     className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-400"
                     activeClassName="text-yellow-400 bg-blue-900"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                     to="/project"
                     className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-400"
                     activeClassName="text-yellow-400 bg-blue-900"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                     to="/about" 
                     className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-400"
                     activeClassName="text-yellow-400 bg-blue-900"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                     url="https://www.linkedin.com/in/peter-soriano-38b199173/" 
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#fff" 
                     style={{height: 35, width: 35}} />
                    <SocialIcon 
                     url="https://github.com/timsoriano3" 
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#fff" 
                     style={{height: 35, width: 35}} />
                    <SocialIcon 
                     url="https://twitter.com/timsoriano3" 
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#fff" 
                     style={{height: 35, width: 35}} />
                    <SocialIcon 
                     url="https://www.facebook.com/tim.soriano.33/" 
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#fff" 
                     style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}