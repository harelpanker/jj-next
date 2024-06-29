import { FC } from 'react';
import Link from 'next/link';

type LinkProps = {
  variant?: 'primary' | 'secondary';
  href?: string;
  text?: string;
};

const Button: FC<LinkProps> = ({
  variant = 'primary',
  href = '/',
  text = 'שמור את מקומך',
}) => {
  return (
    <div className='flex'>
      <Link
        className={`flex items-center justify-center rounded-full px-5 py-2 text-lg transition duration-300 ${
          variant === 'primary'
            ? 'bg-light-green text-dark-green hover:bg-light-green/70'
            : 'bg-dark-green text-light-green hover:bg-light-green hover:text-dark-green'
        }`}
        href={href}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
