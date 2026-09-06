import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="relative mx-auto aspect-[16/9] w-full max-w-7xl">
        <Image
          src="/aboutus.png"
          alt="About METAKNACKS"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
