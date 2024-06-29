import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import placeholder from '@/app/assets/placeholder.jpg';

type ItemProps = {
  title: string;
  text: string;
  src?: StaticImageData;
  isOdd: boolean;
  id: string;
  price: number;
  length: string;
};

const Item: FC<ItemProps> = ({
  title,
  text,
  src = placeholder,
  isOdd,
  id,
  price,length
}) => {
  return (
    <div
      className={`row relative flex flex-col items-center gap-y-6 lg:flex-row lg:gap-x-20 ${
        isOdd ? '' : 'lg:justify-end'
      }`}>
      <figure
        className={`order-first w-full overflow-hidden rounded-lg lg:h-[70dvh] lg:max-w-[50%] lg:shrink-0 lg:rounded-2xl ${
          isOdd ? '' : 'lg:order-last'
        }`}>
        <Image className='h-full w-full object-cover' src={src} alt={title} />
      </figure>
      <div className='mx-auto flex w-full max-w-md flex-col gap-y-3'>
        <h2 className='text-3xl font-bold lg:text-6xl'>{title}</h2>
        <p>{text}</p>
        <div className='lg:flex'>
          <div className='mt-4 flex w-full justify-around gap-x-6 bg-dark-green p-2 font-bold text-light-green lg:w-auto lg:px-6'>
            <div>
              <h3 className='text-lg'>אורך טיול:</h3>
              <p className='text-xl'>{length}</p>
            </div>
            <div>
              <h3 className='text-lg'>סכום לאדם:</h3>
              <p className='text-xl'>{price}€</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- id --> */}
      <div className='absolute -top-20 left-0 w-full' id={id}></div>
    </div>
  );
};

export default Item;
