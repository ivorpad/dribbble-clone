import Link from "next/link";
import Nav from "./Nav";

const Header = () => (
  <div>
    <div className="bar">
      <div>
        <Link href="/">
          <a>Dribbble</a>
        </Link>
      </div>
      <Nav />
    </div>
  </div>
);

export default Header;
