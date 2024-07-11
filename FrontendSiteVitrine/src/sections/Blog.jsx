import React from 'react';

const blogPosts = [
    {
        title: 'Comment optimiser vos réservations avec E-Reserve',
        excerpt: 'Découvrez comment notre plateforme peut améliorer votre processus de réservation...',
        date: '2024-07-01',
        link: '/blog/post1'
    },
    {
        title: 'Les tendances actuelles dans le secteur des réservations',
        excerpt: 'Nous explorons les dernières tendances et innovations dans l\'industrie des réservations...',
        date: '2024-06-15',
        link: '/blog/post2'
    }
];

const BlogPage = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white p-8 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-2 text-blue-600">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <a href={post.link} className="text-yellow-500 hover:text-yellow-600 transition">Lire la suite</a>
                        <p className="text-gray-400 mt-2">{post.date}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
