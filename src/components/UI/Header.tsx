import { Link } from "react-router-dom";
import SeachBox from "./SeachBox";

export default function Header() {
  return (
    <div>
      <div className="flex">
        <Link to="/" reloadDocument={true}>
          <h1>Movie DB Api</h1>
        </Link>

        <SeachBox />
      </div>
      <div className="divider"></div>
    </div>
  );
}
