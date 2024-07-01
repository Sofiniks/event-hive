import { signOut } from "@/auth";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div>
         <h1>HOME PAGE</h1>
      </div>
     <div>
      <form action={async () => {
        "use server";
        await signOut()
      }}><button type="submit">Logout</button></form>
     </div>
      
      
    </div>
  );
}
