// src/components/Hero.tsx
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Merhaba, ben Tuna 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Frontend ve AI geliştiricisiyim. React, Next.js ve LLM'ler üzerinde çalışıyorum. AI entegreli PWA'ler oluşturmak en büyük tutkularımdan. 
      </p>
    </section>
  );
};

export default Hero;
