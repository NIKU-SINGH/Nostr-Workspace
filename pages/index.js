import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
    </main>
  );
}
