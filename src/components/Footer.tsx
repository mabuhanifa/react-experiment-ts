import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsStackOverflow,
  BsTwitter,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-white py-10">
      <div>© 2023 Copyright: Mohammed Abu Hanifa</div>
      <div className="flex justify-center items-center gap-x-10 py-5 mt-10">
        <a
          href="https://github.com/mabuhanifa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-abu-hanifa-4611b515b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/18106759/mohammed-abuhanifa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsStackOverflow />
        </a>
        <a
          href="https://www.facebook.com/shourov.hanifa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://twitter.com/MohAbuhanifa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.instagram.com/shourovahmd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
}
