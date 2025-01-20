import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen bg-yellow justify-center items-center px-6  sm:px-0">
      <div
        className="flex flex-col w-[384px] bg-white rounded-[20px] p-6 border border-gray-950 gap-y-6"
        style={{ boxShadow: "8px 8px 0px rgb(0, 0, 0)" }}
      >
        {/* Image Card */}
        <div className="flex rounded-[10px] w-fit h-[200px] overflow-hidden">
          <Image
            src={"/images/illustration-article.svg"}
            alt="article"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full gap-y-[12px]">
          {/* Tag */}
          <div className="flex w-fit h-fit bg-yellow px-[12px] py-1 rounded text-gray-950 font-[800] text-[12px] sm:text-[14px]">
            Learning
          </div>

          {/* Publish date */}
          <p className="text-[12px] sm:text-[14px]">Published 21 Dec 2023</p>

          {/* Title */}
          <h1 className="text-[20px] sm:text-[24px] font-[800] text-gray-950 cursor-pointer hover:text-yellow">
            HTML & CSS foundations
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-x-[12px]">
          <Image
            src={"/images/image-avatar.webp"}
            alt="author"
            width={32}
            height={32}
          />
          <p className="font-[800] text-gray-950 text-[14px]">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}
