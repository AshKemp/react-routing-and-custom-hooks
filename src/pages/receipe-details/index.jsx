import { useParams } from "react-router-dom";

function ReceipeDetails() {
  const params = useParams();
  console.log(params);
  const { id } = params;
  return (
    <div>
      <h1>Receipe Details of receipt with id: {id}</h1>
    </div>
  );
}

export default ReceipeDetails;
