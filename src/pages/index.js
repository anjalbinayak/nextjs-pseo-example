import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import cars from "@/data/cars.json";
import Link from "next/link";
export default function Home() {
  return (
    <div style={{ margin: "50px" }} className={inter.className}>
      <h1>List of Super Cars</h1>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {cars.supercars.map((car) => (
          <Link
            href={`/${car.brand}`}
            style={{
              marginTop: "5px",
              display: "block",
              color: "orange",
            }}
          >
            {car.brand}
          </Link>
        ))}
      </div>
    </div>
  );
}
