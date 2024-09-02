import Image, { StaticImageData } from "next/image";

type CardImageProps = {
  src: StaticImageData;
  className: string;
};

const CardImage = ({ src, className }: CardImageProps) => {
  return (
    <Image
      src={src}
      alt="Imagem do Vitor"
      className={className}
      width={420}
      height={520}
      quality={100}
      priority
    />
  );
};

export default CardImage;
