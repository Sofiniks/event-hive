import { signOut, auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div>
         <h1>HOME PAGE</h1>
      </div>
     {session?.user && <div>
      <form action={async () => {
        "use server";
        await signOut()
      }}><button type="submit">Logout</button></form>
     </div>}
      
      
    </div>
  );
}
