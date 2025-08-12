import Background from "@/components/about-us/background";
import Star from "@/components/about-us/star";
import Terminal from "@/components/about-us/terminal";



export default function Home() {
  return (
    <div className="h-screen flex items-center flex-col justify-between">
      <Star/>
      <Background>
        <Terminal/>
      </Background>
    </div>
  );
}
