import Link from "next/link";
import "../styles/style.scss";

const Home = () => {
  return (
    <div className="example">
      Hello World!
      <Link href="/test">
        <a>Test</a>
      </Link>
    </div>
  );
};

export default Home;
