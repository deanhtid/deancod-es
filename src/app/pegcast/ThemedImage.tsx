import { getImageProps } from "next/image";

type ThemedImageProps = {
  light: string;
  dark: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/** One screenshot with a light and a dark version. The browser picks the one for its appearance. */
export default function ThemedImage({
  light,
  dark,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
}: ThemedImageProps) {
  const common = { alt, width, height, sizes };
  const { props: darkProps } = getImageProps({ ...common, src: dark });
  const { props: lightProps } = getImageProps({ ...common, src: light, priority });

  return (
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcSet={darkProps.srcSet ?? darkProps.src}
      />
      {/* getImageProps supplies the attributes. A <picture> needs a plain <img> inside it. */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...lightProps} className={className} />
    </picture>
  );
}
