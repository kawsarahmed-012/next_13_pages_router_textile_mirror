import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Icon = ({ url, alt }) => {
  return <Image width={30} height={30} src={url} alt={alt} />;
};

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap gap-6">
        {FOOTER_LINKS.map((LINKS, index) => (
          <ul key={index}>
            {LINKS.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="flex justify-between">
        <p>Copyright @ 2023 BUTEX</p>
        <ul className="flex gap-2">
          {SOCIAL_MEDIA_LINKS.map((media) => (
            <li key={media.id}>
              <a href={media.href}>
                <Icon url={media.icon} alt={media.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
