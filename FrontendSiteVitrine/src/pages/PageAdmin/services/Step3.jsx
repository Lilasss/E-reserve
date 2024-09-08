// Step3.js
import React from 'react';

const Step3 = ({ vip, setVip, price, setPrice, vipPrice, setVipPrice, normalSeats, setNormalSeats, vipSeats, setVipSeats }) => {
    return (
        <div className="space-y-6">
            <div className="mt-4 flex items-center">
                <input
                    type="checkbox"
                    checked={vip}
                    onChange={(e) => setVip(e.target.checked)}
                    className="mr-2"
                />
                <label>VIP</label>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {vip ? (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">Prix normal</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Définir le prix normal"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Prix VIP</label>
                            <input
                                type="text"
                                value={vipPrice}
                                onChange={(e) => setVipPrice(e.target.value)}
                                placeholder="Définir le prix VIP"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                            />
                        </div>
                    </>
                ) : (
                    <div>
                        <label className="block text-sm font-medium mb-2">Prix</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Définir le prix"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                        />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Nombre de places normales</label>
                    <input
                        type="number"
                        value={normalSeats}
                        onChange={(e) => setNormalSeats(e.target.value)}
                        placeholder="Places normales"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                    />
                </div>
                {vip && (
                    <div>
                        <label className="block text-sm font-medium mb-2">Nombre de places VIP</label>
                        <input
                            type="number"
                            value={vipSeats}
                            onChange={(e) => setVipSeats(e.target.value)}
                            placeholder="Places VIP"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Step3;
