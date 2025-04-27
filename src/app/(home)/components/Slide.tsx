import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

type Content = {
  id: number;
  image: StaticImageData;
  subtitle: string;
  title: string;
};

const Slide = ({ content }: { content: Content }) => {
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="flex items-center container mx-auto">
        <Image
          src={content.image}
          alt={content.title}
          height={0}
          width={0}
          className="w-[600px]"
        />

        <div className="space-y-4">
          <h4 className="border-b border-black/10 w-1/2 text-lg tracking-wider pb-1 font-medium">
            {content.subtitle}
          </h4>
          <h1 className="text-6xl font-semibold tracking-wider">
            {content.title}
          </h1>
          <div className="mt-8">
            <Button className="rounded-full text-xl p-6">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
