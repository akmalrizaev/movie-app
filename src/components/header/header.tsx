import Image from 'next/image';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={'/logo.svg'}
          alt={'logo'}
          width={56}
          height={56}
          className={'cursor-pointer object-contain'}
        />
        <ul className="space-x-4 md:flex hidden">
          <li className="navLink">Home</li>
          <li className="navLink">Movies</li>
          <li className="navLink">TV Show</li>
          <li className="navLink">New</li>
          <li className="navLink">Popular</li>
        </ul>
      </div>
      <div className="flex item-center space-x-4 text-sm font-light">
        <AiOutlineSearch />
        <VscAccount />
      </div>
    </header>
  );
};

export default Header;
