import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import river from '../river.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main>
            <img 
             src={river}
             alt="Autumn Forest River"
             className="absolute object-cover h-full w-full"
            />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                     src={urlFor(author.authorImage).url()}
                     className="rounded w-64 h-64 lg:w-96 lg:h-96 mr-8"
                     alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="my_name text-6xl text-blue-300 mb-4">
                            Hello. I'm{" "}
                            <span className="text-blue-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent 
                             blocks={author.bio}
                             projectId="d7ibo5tv"
                             dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}