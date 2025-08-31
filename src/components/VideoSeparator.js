import React from 'react';

export function VideoSeparator() {
  return (
    <section className="mx-auto max-w-md px-4 py-8 flex justify-center">
      <video src="/video-gota.mp4" autoPlay muted loop playsInline className="w-24 h-24 rounded-full border-2 border-sky-300 object-cover shadow-md" />
    </section>
  );
}
