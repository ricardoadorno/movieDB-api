import HomeList from "../components/HomeList";
import SeachBox from "../components/UI/SeachBox";

function Home() {
  return (
    <>
      <div className="container">
        <div className="flex">
          <h1>Movie DB Api</h1>

          <SeachBox />
        </div>
        <div className="divider"></div>
        <div>
          <HomeList />
        </div>
      </div>
    </>
  );
}

export default Home;
