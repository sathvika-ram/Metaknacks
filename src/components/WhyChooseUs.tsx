import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto aspect-[16/9] w-full max-w-7xl">
        <Image
          src="/whychooseus.png"
          alt="Why enterprises trust METAKNACKS"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
