"use client";

import { useState } from "react";
import { Camera, MessageCircle } from "lucide-react";

export default function AudiovisualPortfolio() {
  const [seccion, setSeccion] = useState("inicio");
  const reels = [
  "reel1.mp4",
  "reel2.mp4",
  "reel3.mp4",
];

const youtube = [
  "youtube1.mp4",
  "youtube2.mp4",
  "youtube3.mp4",
  "youtube4.mp4"
];
  return (
    <div
      className="relative min-h-screen text-white bg-fixed bg-cover bg-center bg-no-repeat font-[Sora]"
      style={{
        backgroundImage: "url('/fondo.jpg')",
      }}
    >
      {/* OVERLAY GLOBAL */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* LLUVIA */}

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="raindrop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* HERO */}

      <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
        <div className="text-center space-y-6 px-6">
          <h1 className="text-7xl font-semibold tracking-[-0.06em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Portfolio
          </h1>

          <p className="text-2xl text-zinc-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            by Franco Raimondo
          </p>

          <p className="max-w-xl mx-auto text-zinc-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Editor Audiovisual / Video Creator
          </p>

          <a
            href="#proyectos"
            className="inline-block px-8 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 transition"
          >
            Ver trabajos
          </a>
        </div>
      </section>

      {/* ABOUT */}

      <section className="relative z-10 py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold tracking-[-0.04em] mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          About me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-zinc-900/80 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
            <img
              src="/foto.jpg"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div>
            <p className="text-zinc-100 mb-6 text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Franco Raimondo
            </p>

            <ul className="space-y-3 text-zinc-200 text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <li>Edad: 19 años</li>
              <li>Motion graphics</li>
              <li>Color grading</li>
              <li>Contenido para redes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}

      <section className="relative z-10 py-24 px-8">
        <h2 className="text-4xl font-semibold mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          My Portfolio
        </h2>

        <div
          id="proyectos"
          className="scroll-mt-32 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {/* CARD 1 */}

          <div
            onClick={() => setSeccion("reels")}
            className="cursor-pointer bg-zinc-900/80 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
            >
            <div className="h-56 bg-zinc-800 flex items-center justify-center">
              <img
                src="/proyecto1.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-medium">Reels/TikTok</h3>

              <p className="text-zinc-300 text-sm mt-2">
                videos for tiktok and instagram
              </p>

              <button className="mt-4 text-violet-400 hover:text-violet-300 transition">
                Ver videos
              </button>
            </div>
          </div>

          {/* CARD 2 */}

          <div
            onClick={() => setSeccion("youtube")}
            className="cursor-pointer bg-zinc-900/80 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <div className="h-56 bg-zinc-800 flex items-center justify-center">
              <img
                src="/proyecto2.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-medium">Videos Youtube</h3>

              <p className="text-zinc-300 text-sm mt-2">
                videos for youtube
              </p>

              <button className="mt-4 text-violet-400 hover:text-violet-300 transition">
                Ver videos
              </button>
            </div>
          </div>

          {/* CARD 3 */}

          <div className="bg-zinc-900/80 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
            <div className="h-56 bg-zinc-800 flex items-center justify-center">
              <img
                src="/proyecto3.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-medium">Carruseles</h3>

              <p className="text-zinc-300 text-sm mt-2">
                Carousels For Social Media
              </p>

              <button className="mt-4 text-violet-400 hover:text-violet-300 transition">
                Ver videos
              </button>
            </div>
          </div>
        </div>
      </section>
      {seccion === "reels" && (
  <section className="relative z-10 py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => setSeccion("inicio")}
        className="mb-8 px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition"
      >
        ← Volver
      </button>

      <h2 className="text-4xl font-semibold mb-8 text-center">
        Reels/TikTok
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reels.map((video) => (
          <video
            key={video}
            controls
            className="w-full rounded-2xl bg-black"
          >
            <source src={`/videos/${video}`} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  </section>
)}
    {seccion === "youtube" && (
  <section className="relative z-10 py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => setSeccion("inicio")}
        className="mb-8 px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition"
      >
        ← Volver
      </button>

      <h2 className="text-4xl font-semibold mb-8 text-center">
        Videos Youtube
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {youtube.map((video) => (
          <video
            key={video}
            controls
            className="w-full rounded-2xl bg-black"
          >
            <source src={`/videos/${video}`} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  </section>
)}
      {/* STATS */}

      <section className="relative z-10 py-24 px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-5xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            4
          </h3>

          <p className="text-zinc-200">Proyectos</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            7
          </h3>

          <p className="text-zinc-200">Clientes</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            +6
          </h3>

          <p className="text-zinc-200">Meses</p>
        </div>
      </section>

      {/* CONTACTO */}

      <section className="relative z-10 py-24 px-8">
        <h2 className="text-4xl font-semibold mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Contacto
        </h2>

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <a
            href="https://instagram.com/franq1606lwne"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-violet-600 transition"
          >
            <Camera size={20} />
            Instagram
          </a>

          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800">
            <MessageCircle size={20} />
            Discord: f_q
          </div>
        </div>
      </section>
    </div>
  );
}