import AuthForm from "@/components/auth-form/auth-form";


export default function Home() {
  return (
    <div className="h-screen flex items-center flex-col justify-center font-mono">
        <div 
          className='bg-gradient-to-br max-w-6xl md:max-h-[700px] max-h-screen  h-full w-full items-center flex justify-center md:rounded-2xl'
          style={{
              backgroundImage: `url('/noise.svg'), linear-gradient(to bottom right, #7c3aed, #f97316, #ec4899)`,
              backgroundBlendMode: 'overlay',
          }}
         >
            <div className="rounded-2xl bg-black border max-w-[380px] w-full py-6 px-4 flex flex-col items-center justify-between gap-7">
                <h1 className="font-bold text-xl">ВОЙТИ В СИСТЕМУ</h1>
                <AuthForm/>
            </div>
        </div>
    </div>
  );
}
