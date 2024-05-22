import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home 컴포넌트입니다.</div>
      {/* <Link to={`/detail/${id}`}>detail 페이지로 이동하기</Link>/ */}
      <Link to="/detail">detail 페이지로 이동하기</Link>
    </>
  );
};

export default Home;
