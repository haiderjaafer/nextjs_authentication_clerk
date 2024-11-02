import SignInPage from "@/components/shad-signin";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";


export  default async function Home() {

  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }



  return (
    <section className='py-24 flex items-center justify-center flex-col h-screen font-extrabold text-fuchsia-600'>
      <h2>welcome , {user.firstName}</h2>
    {/* <div className='container'>
      <h1 className='font-serif text-3xl font-bold'>NextJs Clerk Starter</h1>
      <p className='mt-3 text-muted-foreground'>
        A NextJs starter template with Clerk authentication, shadcn/ui and
        Tailwind CSS.
      </p>
    </div> */}
    {/* <SignInPage/> */}
  </section>
  );
}
