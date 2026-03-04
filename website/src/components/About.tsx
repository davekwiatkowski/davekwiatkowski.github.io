import { FC } from 'react';
import useAboutData from '../util/data/useAboutData';
import Image from './common/Image';
import getUrlFor from '../util/getUrlFor';
import LoadingSignal from './common/LoadingSignal';
import CustomBlockContent from './common/blockContent/CustomBlockContent';
import FadeIn from './common/FadeIn';
import ScrollFade from './common/ScrollFade';

const About: FC = () => {
  const aboutData = useAboutData();

  return (
    <section className="w-full h-full" aria-label="About">
      {!aboutData && <LoadingSignal />}
      {aboutData && (
        <ScrollFade className="w-full h-full" showIndicator>
          <div className="px-5 sm:px-10 md:px-14 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
            {aboutData.mainImage && (
              <FadeIn delay={100} className="shrink-0 lg:w-2/5 xl:w-1/3">
                <Image
                  src={getUrlFor(aboutData.mainImage).url()}
                  alt={aboutData.mainImage?.caption ?? ''}
                  className="object-cover w-full rounded-xl mb-8 lg:mb-0 max-h-[40vh] sm:max-h-[45vh] lg:max-h-none lg:sticky lg:top-0"
                />
              </FadeIn>
            )}
            <div className="min-w-0">
              <FadeIn delay={200}>
                <h2 className="font-HEADING font-semibold text-2xl sm:text-3xl md:text-4xl text-TEXT tracking-tight leading-tight">
                  {aboutData.title}
                </h2>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="text-base sm:text-lg text-TEXT_DE_EMP leading-relaxed mt-5 sm:mt-6">
                  <CustomBlockContent blocks={aboutData.text} />
                </div>
              </FadeIn>
            </div>
          </div>
        </ScrollFade>
      )}
    </section>
  );
};

export default About;
