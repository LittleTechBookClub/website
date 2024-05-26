import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-8 w-full min-h-screen">
      <section className="sticky max-h-fit col-span-5 bg-black flex justify-center items-center">
          <Image 
            className="absolute"
            src="/little-tech-book-club-logo.svg" 
            alt="The Little Tech Book Club logo"
            width={500}
            height={300}
            priority
          />
      </section>
      <section className="col-span-3 bg-gray-50 p-4">
        <h1 className="font-bold">Welcome to the club for learners, doers, and dreamers</h1>
        <p className="p-3">
          We consume technical books, articles, videos, and podcasts. We support each other with coding challenges and soft skills. Join us :) 
        </p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdgSMZQpdmcznSPL5SEsuEbwEr_mUJDQOIsaQRS4M5XRyoVsQ/viewform?embedded=true" className="col-span-3" width="430" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </section>
    </main>
  );
}
