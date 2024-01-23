import carsList from "@/data/cars.json";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const DynamicPage = ({ slug, car }) => {
  return (
    <div style={{ margin: "50px" }} className={inter.className}>
      {car !== null && (
        <>
          <Head>
            <title>Details about {car.brand}</title>
          </Head>
          <div>
            <h1 style={{ marginTop: "10px", textAlign: "center" }}>
              {car.brand}
            </h1>
            <p>
              <strong>Brand: </strong>
              {car.brand}
            </p>

            <p>
              <strong>Model: </strong>
              {car.model}
            </p>

            <p>
              <strong>Year: </strong>
              {car.year}
            </p>

            <p>
              <strong>Top Speed (mph): </strong>
              {car.top_speed_mph}
            </p>

            <p>
              <strong>Acceleration (sec): </strong>
              {car.acceleration_sec}
            </p>

            <p>
              <strong>Engine: </strong>
              {car.engine}
            </p>

            <p>
              <strong>Horsepower: </strong>
              {car.horsepower}
            </p>

            <p>
              <strong>Price (USD): </strong>${car.price_usd.toLocaleString()}
            </p>

            <p style={{ marginTop: "30px" }}>
              The {car.model}, model of {car.brand}, is a high-performance{" "}
              {car.year} model known for its impressive top speed of{" "}
              {car.top_speed_mph} mph and acceleration time of{" "}
              {car.acceleration_sec} seconds from 0 to 60 mph. Powered by a{" "}
              {car.engine} engine producing {car.horsepower} horsepower, this
              masterpiece of engineering comes with a price tag of $
              {car.price_usd.toLocaleString()}.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  let car = carsList.supercars.filter((a) => a.brand === slug);

  car = car.length > 0 ? car[0] : null;
  return {
    props: {
      slug,
      car,
    },
  };
}

export default DynamicPage;
