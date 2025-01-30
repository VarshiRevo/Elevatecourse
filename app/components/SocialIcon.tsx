import { SocialIconProps } from './types';

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 rounded-none aspect-square w-[34px]"
  />
);