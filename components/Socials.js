// links
import Link from "next/link";

// icons
import {
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiGithubFill,
  RiInstagramFill,
  RiMailAddFill,
  RiMailCheckFill,
  RiMailFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"mailto:rajiv620019@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/rajiv-s-2bb454199/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://twitter.com/rajiv_17_"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterFill />
      </Link>
      <Link
        href={"https://github.com/Rajiv620019"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.instagram.com/rjr_786/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </Link>
    </div>
  );
};

export default Socials;
