function CardImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="card-image"
    />
  );
}

export default CardImage;