"use client";

import { useMemo, useState } from "react";
import { Camera, MessageCircle, Mail, Play, X } from "lucide-react";

const proyectos = [
  {
    titulo: "Reels / TikTok",
    descripcion: "Edits dinámicos para Instagram, TikTok y contenido vertical.",
    imagen: "/proyecto1.jpg",
    videos: [
      "https://www.youtube.com/embed/aVTSV1cfTT8",
      "https://www.youtube.com/embed/aVTSV1cfTT8",
      "https://www.youtube.com/embed/aVTSV1cfTT8",
    ],
  },
  {
    titulo: "Videos YouTube",
    descripcion: "Videos largos, storytelling, ritmo visual y edición limpia.",
    imagen: "/proyecto2.jpg",
    videos: [
      "https://www.youtube.com/embed/Q9l4F5s_Itc",
      "https://www.youtube.com/embed/aVTSV1cfTT8",
      "https://www.youtube.com/embed/V_MhRlokJoI",
      "https://www.youtube.com/embed/aVTSV1cfTT8",
    ],
  },
  {
    titulo: "Carruseles",
    descripcion: "Contenido visual para redes sociales.",
    imagen: "/proyecto3.jpg",
    videos: ["https://www.youtube.com/embed/ID_CARRUSEL_1"],
  },
];

export default function AudiovisualPortfolio() {
  const [proyectoActivo, setProyectoActivo] =
    useState<(typeof proyectos)[number] | null>(null);

  const gotas = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${1 + Math.random() * 2}s`,
        delay: `${Math.random() * 2}s`,
      })),
    []
  );

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo.jpg')" }}
    >
      <div className="fixed inset-0 bg-black/75" />

      {gotas.map((gota) => (
        <div
          key={gota.id}
          className="raindrop"
          style={{
            left: gota.left,
            animationDuration: gota.duration,
            animationDelay: gota.delay,
          }}
        />
      ))}

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-violet-300">
            Creative Video Editor
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.08em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Franco Raimondo
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-200">
            Motion Graphics • Color Grading • Social Content
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#proyectos"
              className="px-8 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 transition shadow-lg shadow-violet-950/40"
            >
              Ver trabajos
            </a>

            <a
              href="#contacto"
              className="px-8 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/70 shadow-2xl">
            <img
              src="/foto.jpg"
              alt="Franco Raimondo"
              className="w-full h-[420px] object-cover grayscale"
            />
          </div>

          <div>
            <p className="text-violet-300 uppercase tracking-[0.35em] text-sm mb-4">
              About me
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] mb-6">
              Edición audiovisual con estética moderna, ritmo y detalle.
            </h2>

            <ul className="space-y-3 text-zinc-200 text-lg">
              <li>Creative Video Editor</li>
              <li>Motion Graphics</li>
              <li>Color Grading</li>
              <li>Contenido para redes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="proyectos" className="relative z-10 py-24 px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-violet-300 uppercase tracking-[0.35em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-12 text-center tracking-[-0.06em]">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {proyectos.map((proyecto) => (
              <article
                key={proyecto.titulo}
                onClick={() => setProyectoActivo(proyecto)}
                className="group cursor-pointer bg-zinc-950/80 rounded-3xl overflow-hidden border border-white/10 hover:border-violet-400/60 transition duration-300 hover:-translate-y-2 shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
                      <Play size={28} fill="white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
                  <p className="text-zinc-400 text-sm mt-2">
                    {proyecto.descripcion}
                  </p>
                  <p className="mt-4 text-violet-300 text-sm">Ver videos</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-5xl font-bold">4+</h3>
          <p className="text-zinc-300 mt-2">Proyectos</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-5xl font-bold">7+</h3>
          <p className="text-zinc-300 mt-2">Clientes</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-5xl font-bold">6+</h3>
          <p className="text-zinc-300 mt-2">Meses</p>
        </div>
      </section>

      <section id="contacto" className="relative z-10 py-24 px-8">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center tracking-[-0.05em]">
          Trabajemos juntos
        </h2>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="https://instagram.com/franq1606lwne"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-violet-600 transition border border-white/10"
          >
            <Camera size={20} />
            Instagram
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-violet-600 transition border border-white/10"
          >
            <Mail size={20} />
            Email
          </a>

          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-white/10">
            <MessageCircle size={20} />
            Discord: f_q
          </div>
        </div>
      </section>

      {proyectoActivo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto px-4 py-20">
          <button
            onClick={() => setProyectoActivo(null)}
            className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <X size={28} />
          </button>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold mb-8 text-center">
              {proyectoActivo.titulo}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {proyectoActivo.videos.map((video) => (
                <iframe
                  key={video}
                  src={`${video}?autoplay=0&rel=0&modestbranding=1`}
                  className="w-full aspect-video rounded-3xl bg-black border border-white/10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}