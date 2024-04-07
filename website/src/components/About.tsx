import { FC } from 'react';
import useAboutData from '../util/data/useAboutData';
import Image from './common/Image';
import getUrlFor from '../util/getUrlFor';
import LoadingSignal from './common/LoadingSignal';
import CustomBlockContent from './blockContent/CustomBlockContent';

const About: FC = () => {
  const aboutData = useAboutData();

  return (
    <div className="w-full flex items-center justify-center">
      {!aboutData && <LoadingSignal />}
      {aboutData && (
      <div className="max-w-screen-2xl flex flex-row flex-wrap items-top justify-center p-4 gap-4">
        {aboutData.mainImage && (
          <Image
            src={getUrlFor(aboutData.mainImage).url()}
            alt={aboutData.mainImage?.caption ?? ''}
            className="object-cover w-full lg:w-[calc(50%-8px)]"
          />
        )}
        <div className="w-full lg:w-[calc(50%-8px)]">
          <div className="font-bold text-xl md:text-5xl xl:text-6xl text-PRIMARY">{aboutData.title}</div>
          <div className="md:text-3xl xl:text-4xl text-justify font-extralight text-PRIMARY">
            <CustomBlockContent blocks={aboutData.text} />
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default About;
