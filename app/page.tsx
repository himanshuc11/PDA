import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CircleProps = {
  color: string;
  size: number;
};

type Step = {
  number: number;
  title: string;
  description: string;
};

const DATA: Step[] = [
  {
    number: 1,
    title: "Create Profile",
    description: `Create your detailed profile. This will help us
    find your the desired roles and match with
    the right recruiters`,
  },
  {
    number: 2,
    title: "PDA verifies profile",
    description: `Our team vets the profile (24 to 48 hours)
    this may involve helping candidates improve
    their resume by our IIM mentors
    `,
  },
  {
    number: 3,
    title: "Get fast-track access",
    description: `Based on your inputs about preferred
    companies, CTC expectation and desired
    location, we will talk to recruiters on your
    behalf and schedule interviews`,
  },
];

function StepItem(props: Step & { isLast: boolean }) {
  return (
    <div className="flex h-28">
      <div className="h-full flex flex-1 flex-col">
        <span
          className={twMerge(
            "rounded-full bg-yellow-500 flex justify-center items-center mr-6",
            props?.isLast ? "h-8 w-8" : "h-11 w-8"
          )}
        >
          <p className="text-black font-semibold px-3">0{props.number}</p>
        </span>
        {!props?.isLast ? (
          <div className="h-full">
            <div className="h-full w-1 bg-red-500 mx-[15px]" />
          </div>
        ) : null}
      </div>
      <div>
        <h1 className="text-black font-semibold text-xl">{props.title}</h1>
        <p className="text-black font-medium">{props.description}</p>
      </div>
    </div>
  );
}

function HighlightText() {
  return <div className="h-2 bg-yellow-500 absolute bottom-0 w-full z-0"></div>;
}

function Footer() {
  return (
    <div className="w-full bg-black flex px-8 py-4 justify-between">
      <p className="text-white">getmehired@pda.com</p>
      <p className="text-white">
        Copyright Hopify Technologies Pvt. Ltd. | All rights reserved
      </p>
      <div className="text-white flex">
        <p className="pr-4">Privacy</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
}

function WastingTime() {
  return (
    <div className="flex justify-center mt-5 pt-2">
      <div className="w-8/12 bg-yellow-500 rounded-sm">
        <div
          className="border border-black h-full w-full bg-white p-5 rounded-sm  "
          style={{ transform: `translate(-6px, -6px)` }}
        >
          <p className="text-black font-bold text-2xl">
            Stop wasting time applying to 100s of jobs. Just tell us what you
            want, and we will do all the work for you!
          </p>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <span>
      <div className="relative">
        <p className="font-bold z-10 relative text-2xl">How It Works?</p>
        <HighlightText />
      </div>
    </span>
  );
}

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
    <div className="bg-yellow-100 justify-center py-5 relative pt-12">
      <div>
        <h1 className="text-5xl text-black font-semi  bold text-center">
          We help top 1% talent find
        </h1>
        <h1 className="text-5xl text-black font-semibold text-center pt-2">
          “The Job” they “Want”!
        </h1>
        <div className="absolute right-12 top-5">
          <CircleGrid num={8} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <p>
          We work with 200+ VC backed startups, 10+ Fortune 500 companies and
          help them hire top talent.
        </p>
        <p>
          If you are amazing at what you do, we will help you find your dream
          job
        </p>
        <div className="relative">
          <p className="font-bold z-10 relative">
            We are Your “Personal Hiring Managers”
          </p>
          <HighlightText />
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-2">
        <Button>Join PDA</Button>
        <Button variant={"ghost"} className="border-b border-black">
          Hire Talent
        </Button>
      </div>
      <div className="flex justify-center mt-2 mb-6 ">
        <p>Looking for to hire instead?</p>
        <p>Submit your requirements</p>
      </div>
      <div className="absolute right-0">
        <Image
          src={"/assets/swiggly.png"}
          height={50}
          width={100}
          alt="Decoration"
        />
        <Image
          src={"/assets/swiggly.png"}
          height={50}
          width={100}
          alt="Decoration"
        />
      </div>
    </div>
  );
}

function StepsTab() {
  return (
    <Tabs defaultValue="candidates">
      <TabsList className="flex flex-1">
        <TabsTrigger value="candidates">For Candidates</TabsTrigger>
        <TabsTrigger value="recruiter">For Recruiters</TabsTrigger>
      </TabsList>
      <TabsContent value="candidates">
        <div className="w-full flex justify-center">
          <div className="max-w-[30%]">
            {DATA.map((item, idx) => (
              <StepItem {...item} isLast={idx === DATA.length - 1} />
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="recruiter">Change your recruiter here.</TabsContent>
    </Tabs>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Banner />
      <WastingTime />
      <HowItWorks />
      <StepsTab />
      <Footer />
    </main>
  );
}
