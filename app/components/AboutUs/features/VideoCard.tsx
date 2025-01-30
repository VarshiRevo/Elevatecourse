import * as React from 'react';

interface VideoCardProps {
  title: string;
  description: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description
}) => {
  return (
    <article className="flex flex-col justify-center self-stretch p-12 my-auto bg-white min-w-[240px] rounded-[37px] shadow-[0px_0px_63px_rgba(0,0,0,0.07)] w-[900px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 justify-center items-center px-80 py-28 w-full rounded-2xl bg-stone-50 max-w-[800px] min-h-[359px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <button className="flex gap-2.5 justify-center items-center self-stretch px-14 my-auto border-solid shadow-2xl bg-zinc-300 border-[12px] border-zinc-100 h-[129px] min-h-[127px] rounded-[1032px] w-[130px] max-md:px-5" aria-label="Play video">
          <span className="flex overflow-hidden gap-2.5 items-center self-stretch my-auto w-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e73a8840a6c63cc4ce66028008447ddba44b2db9732d6861f9d290498fabc07e?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="" className="object-contain self-stretch my-auto w-4 aspect-[0.94]" />
          </span>
        </button>
      </div>
      <div className="flex flex-col mt-8 max-w-full w-[798px]">
        <h2 className="text-3xl font-bold text-black max-md:max-w-full">{title}</h2>
        <p className="mt-6 text-2xl text-neutral-400 max-md:max-w-full">{description}</p>
      </div>
    </article>
  );
};