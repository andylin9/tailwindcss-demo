import Image from "next/image";

const Home = () => {
  return (
    <div>
      <header className="flex h-12 w-full justify-between bg-[#000000aa]">
        <div className="flex h-12 w-12 flex-col items-center justify-center gap-y-[6px]">
          <div className="navBorder"></div>
          <div className="navBorder"></div>
        </div>
        <div>
          <Image
            alt="apple logo"
            src={`https://www.apple.com/ac/globalnav/7/zh_TW/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg`}
            width={48}
            height={48}
            className="h-12"
          />
        </div>
        <div>
          <Image
            alt="cart"
            src={`https://www.apple.com/ac/globalnav/7/zh_TW/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_small.svg`}
            width={48}
            height={48}
            className="h-12"
          />
        </div>
      </header>
      <div className="block md:hidden">
        <Image
          src={`https://www.apple.com/tw/home/heroes/tv-plus-spirited/images/spirited_hero__dlcfsduexsya_small_2x.jpg`}
          alt="theme"
          width={1468}
          height={1096}
          className="min-h-[548px] object-cover object-[50%_50%]"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={`https://www.apple.com/tw/home/heroes/tv-plus-spirited/images/spirited_hero__dlcfsduexsya_mediumtall_2x.jpg`}
          alt="theme"
          width={2136}
          height={1388}
          className="min-h-[650px] object-cover object-[50%_50%]"
        />
      </div>
    </div>
  );
};

export default Home;
