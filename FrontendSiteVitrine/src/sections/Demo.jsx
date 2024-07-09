import React from 'react';
import demoImage from '../assets/demo-image.jpg'; // Assurez-vous d'avoir cette image ou remplacez-la par une autre

const Demo = () => {
    return (
        <section id="demo" className="bg-gray-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Démonstration</h2>
                <p className="text-lg text-gray-700 mb-6">Découvrez comment E-Reserve fonctionne grâce à une vidéo de démonstration ou des captures d'écran de la plateforme en action.</p>
                <img src={demoImage} alt="Démonstration E-Reserve" className="mx-auto rounded shadow-lg" />
            </div>
        </section>
    );
}

export default Demo;
