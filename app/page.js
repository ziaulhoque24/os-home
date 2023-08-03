import LandingPage from "@/components/LandingPage/LandingPage";

export const metadata = {
  title: "OMEGA SOLUTION &#8211; AI-Based Software Company in Bangladesh",
  description:
    "OMEGA SOLUTION is a subsidiary of OMEGA which was established in 2014. In 2019, we started our IT company OMEGA SOLUTION. We work on many projects after our initiative starts. In 2021 we officially start our Journey of OMEGA SOLUTION as an AI-based software company.",
    
};
export default function Home() {
  return (
    <div className='mb-20'>
      <LandingPage />
    </div>
  );
}
