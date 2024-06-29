import Image from 'next/image';
import PaddingX from '../ui/PaddingX';
import Container from '../ui/Container';
import Button from '../ui/Button';

import placeholder from '@/app/assets/placeholder.jpg';

const HeroSection = () => {
  return (
    <section className='relative z-20 bg-dark-green text-light-green'>
      <PaddingX>
        <Container>
          <div className='flex min-h-dvh flex-col gap-y-6 py-5 lg:py-12 2xl:gap-y-9 2xl:py-16'>
            <figure className='h-[60vh] w-full overflow-hidden rounded-xl border border-light-green/50 lg:rounded-3xl'>
              <Image
                className='h-full w-full object-cover'
                src={placeholder}
                alt=''
                priority
              />
            </figure>
            <div className='flex flex-col gap-y-9'>
              <div className='flex flex-col gap-y-2'>
                <h1 className='text-balance text-5xl font-bold lg:text-7xl 2xl:text-9xl'>
                  אוסטריה עם יעקב
                </h1>
                <p className='text-pretty text-lg lg:text-2xl'>
                  סיורים מודרכים ברחבי אוסטריה, המדינות השכנות ואיסוף משדה
                  התעופה
                </p>
              </div>
              <div className='flex'>
                <Button />
              </div>
            </div>
          </div>
        </Container>
      </PaddingX>
    </section>
  );
};

export default HeroSection;
