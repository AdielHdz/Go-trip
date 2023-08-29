import CardPopularPlace from "./CardPopularPlace";
const PopularPlaces = () => {
  const UrlImages = [
    {
      num: 1,
      url: "https://i.pinimg.com/736x/09/61/fa/0961fa67ad3de23fe8da3683d0d915d4.jpg",
    },
    {
      num: 2,
      url: "https://menteurbana.mx/wp-content/uploads/2016/08/2tmJdmCA-vbVZrmvG-Destacada-13.jpg",
    },
  ];

  return (
    <section>
      <h2 className="font-poppins font-700 tracking-wide mb-3">
        Popular places
      </h2>

      <div className="grid  gap-4 ">
        {UrlImages.map((place) => (
          <CardPopularPlace urlImage={place.url} key={place.num} />
        ))}
      </div>
    </section>
  );
};

export default PopularPlaces;
