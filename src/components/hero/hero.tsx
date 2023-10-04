import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IMovie } from 'src/interfaces/app.interface';
import { HeroProps } from './hero.props';

const Hero = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie);
  }, [trending]);
  return (
    <div>
      <div>
        <Image
          src={movie?.backdrop_path || movie?.poster_path}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};

export default Hero;
