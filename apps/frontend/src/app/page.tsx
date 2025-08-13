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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0" />
    </div>
  );
}
