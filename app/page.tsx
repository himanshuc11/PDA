import Image from "next/image";
import { twMerge } from "tailwind-merge";

type CircleProps = {
  color: string;
  size: number;
};

function Circle({ color, size }: CircleProps) {
  return (
    <div
      className={twMerge("bg-transparent h-2.5 w-2.5 rounded-full border-2")}
    ></div>
  );
}

type CircleRowProps = { num: number };

function CircleRow({ num }: CircleRowProps) {
  const arr = Array.from(Array(num).keys());
  return (
    <div className="flex gap-2 pb-2">
      {arr.map((item) => (
        <Circle size={12} color="red" key={item} />
      ))}
    </div>
  );
}

function CircleGrid({ num }: CircleRowProps) {
  const arr = Array.from(Array(num).keys());
  return arr.map((item) => <CircleRow num={num} key={item} />);
}

function Header() {
  return (
    <div className="bg-black h-24 flex items-center justify-between px-5 w-full">
      <h3 className="font-semibold text-white text-xl">PDA.</h3>
      <p className="text-yellow-300 opacity-70">
        Join us and become a part of Professional Development Association!
      </p>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-yellow-100 flex flex-1 justify-center py-5 relative">
      <div className="min-w-md:w-7/10">
        <h1 className="text-5xl text-black font-semibold text-center">
          We help top 1% talent find
        </h1>
        <h1 className="text-5xl text-black font-semibold text-center pt-2">
          “The Job” they “Want”!
        </h1>
        <div className="absolute right-12 top-5">
          <CircleGrid num={8} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Banner />
    </main>
  );
}
