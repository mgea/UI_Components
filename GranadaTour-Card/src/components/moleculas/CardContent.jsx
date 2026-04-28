// CardContent.jsx
import CardTitle from "../atomos/CardTitle";
import CardDescription from "../atomos/CardDescription";

function CardContent({ title, description }) {
  return (
    <div className="card-content">

      <CardTitle title={title} />

      <hr />

      <CardDescription text={description} />

    </div>
  );
}

export default CardContent;
