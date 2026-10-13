import { getImageProps } from "next/image";
import styles from "./pegcast.module.css";

/** One value for each appearance. */
export type Themed = { light: string; dark: string };

type ThemedImageProps = {
  src: Themed;
  alt: Themed;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/**
 * One screenshot with a light and a dark version, each with its own alt text.
 * CSS hides the version for the other appearance with `display: none`, so screen readers
 * read only the alt text of the image on screen. Both versions get the same priority.
 */
export default function ThemedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ThemedImageProps) {
  return (["light", "dark"] as const).map((appearance) => {
    const { props } = getImageProps({
      src: src[appearance],
      alt: alt[appearance],
      width,
      height,
      priority,
    });
    const visibility = appearance === "light" ? styles.lightOnly : styles.darkOnly;
    return (
      // A <picture> cannot give each source its own alt text, so each version is an <img>.
      // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
      <img key={appearance} {...props} className={`${visibility} ${className}`} />
    );
  });
}
