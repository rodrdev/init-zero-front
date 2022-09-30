import { useParams } from "react-router-dom";

const ListPerson = () => {
  let { slug } = useParams();
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
};

export default ListPerson;
