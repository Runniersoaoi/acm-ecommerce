import { BannerCard } from "./BannerCard";
import { CardBannerPrincipal } from "./CardBannerPrincipal";

export const Banner = () => {
  return (
    <div className=" bg-[#E5EAF4] pt-5 flex justify-center ">
      <div className="grid grid-cols-3 gap-3 min-w-[1200px]">
        <div className="row-start-1 row-end-3 col-start-1 col-end-3 ">
          <CardBannerPrincipal />
        </div>
        <BannerCard />
        <BannerCard />
      </div>
    </div>
  );
};
