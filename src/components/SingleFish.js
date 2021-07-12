import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SingleFish() {
    const [singleFish, setSingleFish] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSingleFish(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singleFish) return <div>Loading...</div>;
    
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-100 w-30 flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-50 rounded p-4">
                            <h1 className="my_name text-l lg:text-6xl mb-4">
                                {singleFish.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(singleFish.authorImage).url()}
                                 alt={singleFish.name}
                                 className="w-10 h-10 rounded-full"
                                />
                                <p className="my_name flex items-center pl-2 text-xl">
                                    {singleFish.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                     src={singleFish.mainImage.asset.url}
                     alt={singleFish.title}
                     className="h-full w-full object-cover rounded-t"
                     style={{ height: "full"}}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent 
                     blocks={singleFish.body} 
                     projectId="d7ibo5tv" 
                     dataset="production" 
                    />
                </div>
            </article>
        </main>
    );
}