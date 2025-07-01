import React, { useState } from "react";

interface ProfileCardProps {
  nama: string;
  instagram: string;
  foto: string;
  badge: string;
  warnaBadge: string;
  kutipan: string;
  karakterFavorit: string;
  funFact: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  nama,
  instagram,
  foto,
  badge,
  warnaBadge,
  kutipan,
  karakterFavorit,
  funFact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
<div className="max-w-sm mx-auto rounded-lg bg-black/20 backdrop-blur-xl ring-1 ring-white ring-opacity-20 border border-white border-opacity-10 shadow-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-2xl">
        <img
          src={foto}
          alt={nama}
          className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4 shadow-md cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 bg-gradient-to-r ${warnaBadge} shadow-md`}
        >
          {badge}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{nama}</h2>
        <p className="italic text-gray-700 mb-4 px-4">"{kutipan}"</p>
        <div className="w-full space-y-3 mb-4">
          <div className="bg-white/50 rounded-md p-3 shadow-inner">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
              Karakter Favorit
            </p>
            <p className="font-semibold text-gray-900">{karakterFavorit}</p>
          </div>
          <div className="bg-white/50 rounded-md p-3 shadow-inner">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
              Fun Fact
            </p>
            <p className="font-semibold text-gray-900">{funFact}</p>
          </div>
        </div>
        <a
          href={`https://instagram.com/${instagram.replace(/^@/, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${warnaBadge} shadow-md hover:brightness-110 transition`}
        >
          Instagram {instagram}
        </a>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={foto}
            alt={nama}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProfileCard;
