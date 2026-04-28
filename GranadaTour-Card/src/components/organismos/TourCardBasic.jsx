import CardImage from "../atomos/CardImage";
import CardContent from "../moleculas/CardContent";
import CardActions from "../moleculas/CardActions";

function TourCardBasic() {
  return (
    <div className="tour-card">

      <CardImage
        src="https://walkingranada.com/wp-content/uploads/2023/01/Alhambra-card-walkin.webp"
        alt="Alhambra"
      />

      <CardContent
        title="Alhambra"
        description="Descubre la Alhambra, sus jardines y palacios.
        Visita guiada privada o en grupo"
      />

      <CardActions />

    </div>
  );
}

export default TourCardBasic;