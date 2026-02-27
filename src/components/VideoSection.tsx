import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();

  const videos = [
    {
      id: "xyQpzjvWgVY",
      title: t('videos.video1_title'),
      params: "si=6yjut-ZNP9hgi8_D"
    },
    {
      id: "9htb31OrIUY",
      title: t('videos.video2_title'),
      params: "si=6RpRiOs9bguKivlR"
    },
    {
      id: "EVjJb2zg3JM",
      title: "Sri NandiGram Overview", // You can add this key to your i18n file later
      params: "si=TCuy3C30xmtiJdmg"
    }
  ];

  return (
    <section className="py-20 bg-[#FDFBF7]"> 
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-4">
              <span className="text-[#C5A059]">{t('videos.title_start')}</span> {t('videos.title_end')}
            </h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
          </div>

          {/* Updated grid to support 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-lg border-[6px] border-white transition-transform duration-300 group-hover:scale-[1.02]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?${video.params}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-[#4A3728] opacity-80">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;