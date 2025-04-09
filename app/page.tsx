import Image from "next/image";
import NavBar from "./ui/nav-bar";
import Greeting from "./ui/greeting";
import Experience from "./ui/experience";

export default function Home() {
  return (
    <main className="container px-2 mx-auto sm:px-12 md:px-24 lg:px-48 xl:px-72">
      <NavBar />
      <Greeting />
    </main>
  );
}
