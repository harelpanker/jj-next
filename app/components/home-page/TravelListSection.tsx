import PaddingX from '../ui/PaddingX';
import Container from '../ui/Container';
import { data } from './travel/data';
import Item from './travel/Item';

const TravelListSection = () => {
  return (
    <section className='relative z-20 bg-light-green text-dark-green'>
      <PaddingX>
        <Container>
          <div className='flex min-h-dvh flex-col gap-y-9 py-16'>
            <aside className='flex flex-wrap gap-2'>
              {data.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`rounded bg-dark-green/20 px-3 py-1 text-xs font-bold transition duration-300 hover:bg-dark-green/0 lg:text-sm`}>
                  {item.title}
                </a>
              ))}
            </aside>
            <div className='flex flex-col gap-y-12 lg:gap-y-36'>
              {data.map((item) => (
                <Item
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  src={item.src}
                  isOdd={item.isOdd}
                  id={item.id}
                  price={item.price}
                  length={item.length}
                />
              ))}
            </div>
          </div>
        </Container>
      </PaddingX>
    </section>
  );
};

export default TravelListSection;
