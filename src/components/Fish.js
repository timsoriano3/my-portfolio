import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import sanityClient from '../client.js';

export default function Fish() {
    const [fishData, setFishData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "fish"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data) => setFishData(data))
        .catch(console.error);
    }, []);
    
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center my_name">
                    Fish Gallery
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my Fish Catch Gallery!
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fishData && fishData.map((fish, index) => (
                        <article>
                        <Link to={"/fish/" + fish.slug.current} key={fish.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400" key={index}>
                                <img 
                                 src={fish.mainImage.asset.url}
                                 alt={fish.mainImage.alt}
                                 className="w-full h-full rounded-r object-cover absolute"
                                />
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 text-blue-100 bg-opacity-75 rounded">
                                        {fish.title}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}