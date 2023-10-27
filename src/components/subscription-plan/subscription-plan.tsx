import Image from 'next/image';
import { useAuth } from 'src/hooks/useAuth';
import { RiVipCrown2Line } from 'react-icons/ri';

const SubscriptionPlan = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen">
      <div className="border-b-2 border-gray-300/20  h-[10vh] flex justify-between items-center px-4 md:px-10">
        <Image
          src={'/logo.svg'}
          alt={'logo'}
          width={56}
          height={56}
          className={'cursor-pointer object-contain'}
        />

        <div onClick={logout} className="cursor-pointer hover:underline">
          Logout
        </div>
      </div>
      <div className="flex flex-col space-y-4 text-center pt-5">
        <h1 className="text-2xl md:text-5xl text-shadow-sm">
          Flexible pricing for teams of any size
        </h1>
        <p className="text-xl text-shadow">
          Relaxing with watching your favourite movies and tv
        </p>
      </div>
      <div className="flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {/* Card Plan */}
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#E10856]">Starter</h3>
            <div className="relative">
              {/* eslint-disable-next-line */}
              <img
                src="https://unsplash.com/photos/a-close-up-of-a-plant-with-a-blurry-background-cd_w-y2tzjs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
                alt="Colors"
                className="rounded-xl w-full"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                $10
              </p>
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full bg-[#E10856] py-4 rounded hover:opacity-80 font-semibold">
              BUY PLAN
            </button>
            <div className="my-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>VIP plan</p>
              </div>
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>HD Format</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#E10856]">Starter</h3>
            <div className="relative">
              {/* eslint-disable-next-line */}
              <img
                src="https://unsplash.com/photos/a-close-up-of-a-plant-with-a-blurry-background-cd_w-y2tzjs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
                alt="Colors"
                className="rounded-xl w-full"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                $10
              </p>
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full bg-[#E10856] py-4 rounded hover:opacity-80 font-semibold">
              BUY PLAN
            </button>
            <div className="my-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>VIP plan</p>
              </div>
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>HD Format</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#E10856]">Starter</h3>
            <div className="relative">
              {/* eslint-disable-next-line */}
              <img
                src="https://unsplash.com/photos/a-close-up-of-a-plant-with-a-blurry-background-cd_w-y2tzjs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
                alt="Colors"
                className="rounded-xl w-full"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                $10
              </p>
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full bg-[#E10856] py-4 rounded hover:opacity-80 font-semibold">
              BUY PLAN
            </button>
            <div className="my-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>VIP plan</p>
              </div>
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>HD Format</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
