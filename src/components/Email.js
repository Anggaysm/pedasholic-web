import { BiLogoGmail } from "react-icons/bi";

export default function Email({ email }) {
  const emailLink = `mailto:${email}`;

  return (
    <a
      className="text-centers px-5 text-4xl"
      href={emailLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BiLogoGmail />
    </a>
  );
}
