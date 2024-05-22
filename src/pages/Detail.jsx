import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(`받은 id: ${param.id}`);

  return <div>Detail 컴포넌트입니다.</div>;
};

export default Detail;
