import { FC } from 'react';
import useAboutData from '../util/data/useAboutData';
import Image from './common/Image';
import getUrlFor from '../util/getUrlFor';
import LoadingSignal from './common/LoadingSignal';

const About: FC = () => {
  const aboutData = useAboutData();

  return (
    <div className="flex flex-row flex-wrap items-top justify-center p-4 gap-4">
      {!aboutData && <LoadingSignal />}
      {aboutData && (
      <>
        {aboutData.mainImage && (
          <Image
            src={getUrlFor(aboutData.mainImage).url()}
            alt={aboutData.mainImage?.caption ?? ''}
            className="object-cover w-full md:w-[calc(50%-8px)]"
          />
        )}
        <div className="w-full md:w-[calc(50%-8px)]">
          <div className="pb-4 font-bold text-xl md:text-3xl text-PRIMARY">{aboutData.title}</div>
          <div className="md:text-xl font-extralight text-PRIMARY">{aboutData.text}</div>
        </div>
      </>
      )}
    </div>
  );
};

export default About;
