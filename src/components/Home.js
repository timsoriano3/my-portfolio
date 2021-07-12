import React from 'react';
import image from '../santiam.jpg';
import me from '../Peter.jpg';

export default function Home() {
    return (
        <main>
            <img 
             src={image} 
             alt="Santiam River, OR, USA" 
             className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 md: pt-20 px-8 lg:pt-30 px-8">
                <div className="relative bg-white bg-opacity-50 rounded p-12 h-full">
                    <h1 className="text-6xl text-center text-yellow-400 font-bold my_name leading-none lg:leading-snug home-name">
                        Hello, I am Peter.
                    </h1>
                    <div className="relative flex justify-center pt-10">
                        <img
                            src={me}
                            alt="Peter Tim Soriano"
                            className="w-auto h-32 rounded-full"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}