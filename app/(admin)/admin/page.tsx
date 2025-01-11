import { auth, signOut } from "@/auth";
import Signin from "@/components/Signin";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const session = await auth();

  // If there's no session, show the Signin component
  if (!session) return <Signin />;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-center text-[40px] md:text-5xl lg:text-6xl uppercase dark'>
        Admin Dashboard
      </h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        {/* Use the shadcn Button component */}
        <Button type="submit">
          Logout
        </Button>
      </form>
    </div>
  );
}