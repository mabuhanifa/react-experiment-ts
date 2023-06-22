import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-white py-10">
      <div>© 2023 Copyright: Mohammed Abu Hanifa</div>
      <div className="flex justify-center items-center gap-x-10 py-5 mt-10">
        <div className="icons">
          <CiFacebook size={25} />
        </div>
        <div className="icons">
          <CiTwitter size={25} />
        </div>
        <div className="icons">
          <CiLinkedin size={25} />
        </div>
        <div className="icons">
          <VscGithubAlt size={25} />
        </div>
      </div>
    </footer>
  );
}
