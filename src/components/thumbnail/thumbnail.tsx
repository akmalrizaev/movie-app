import Image from 'next/image';
import { image_base } from 'src/helpers/constants';
import { ThumbnailProps } from './thumbnail.props';
import ReactStars from 'react-stars';
import { useInfoStore } from 'src/store';

const Thumbnail = ({ movie, isBig = false }: ThumbnailProps) => {
  const { setModal, setCurrentMovie } = useInfoStore();

  const handleCurrentMovie = () => {
    setModal(true);
    setCurrentMovie(movie);
  };

  return (
    <div
      onClick={handleCurrentMovie}
      className={`relative ${
        isBig
          ? 'h-[400px] md:h-[550px] min-w-[350px] md:min-w-[470px]'
          : 'h-[330px] md:h-[440px] min-w-[200px] md:min-w-[292px]'
      }    cursor-pointer transition duration-200 ease-out   md:hover:scale-110`}
    >
      <Image
        src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        fill
        className="rounded-sm md:rounded object-cover"
      />

      <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/40 w-full h-full "></div>

      <div className="absolute bottom-5 left-4 right-2">
        {/* <div className="py-[4px] px-[8px] text-center rounded-bl-[8px] rounded-tr-[4px] w-[111px] bg-[#e5e5e5]/50 inline-block">
          {movie.media_type}
        </div> */}

        <div className="flex items-center space-x-2">
          <ReactStars
            edit={false}
            count={10}
            value={movie.vote_average}
            color2={'#fff'}
          />
          <p>({movie.vote_count})</p>
        </div>
        <h1 className="text-xl font-bold md:text-2xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
      </div>
    </div>
  );
};

export default Thumbnail;
