import React from 'react';
import image from '../santiam.jpg';

export default function Home() {
    return (
        <main>
            <img 
             src={image} 
             alt="Santiam River, OR, USA" 
             className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 md: pt-40 px-8 lg:pt-64 px-8">
                <h1 className="text-6xl text-yellow-400 font-bold my_name leading-none lg:leading-snug home-name">
                    Hello, I am Peter.
                </h1>
            </section>
        </main>
    )
}