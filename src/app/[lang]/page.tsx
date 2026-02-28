import Hero from "@/components/Hero";
import { getDictionary } from "@/utils/getDictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }>;
}) {
  // URL'den dili al ve sözlüğü çek
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      {/* dict ve lang verilerini Hero componentine gönderiyoruz */}
      <Hero dict={dict} lang={lang} />
    </main>
  );
}