import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePost() {
    const [singleFish, setSinglePost] = useState(null);
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
            }
            alt
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;
    
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
                <img
                    src={singlePost.mainImage.asset.url}
                    alt={singlePost.title}
                    className="h-full w-full object-cover rounded-t"
                    style={{ height: "100%", width: "auto"}}
                />
            </article>
        </main>
    );
}