import { SDeal } from "@/schemas/Deal.schema";
import Image from "next/image";

interface DealCardProps {
  deal: SDeal;
}

function DealCard({ deal }: DealCardProps) {
  const { title, imgURL, price, location, likesCount } = deal;

  return (
    <div>
      {/* fill을 쓰면 채우긴 채우는데 자기 위에 있는 position이 static하지 않은 친구 기준으로 채워준다. */}
      {/* aspect-square(원하는 비율= aspect-[4/3])=> 넓이 높이를 1:1 비율로 해준다.(위드가 300px? height 300px로 해줌) */}
      {/* object-cover, object-contain 이미지가 잘 나오도록 커버 또는 원래사이즈로 표현 */}
      <div className="relative aspect-square">
        <Image alt={title} src={imgURL} fill className="object-cover" />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
}

export default DealCard;
