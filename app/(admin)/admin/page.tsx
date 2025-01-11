import { auth, signOut } from "@/auth";
import Signin from "@/components/Signin";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const session = await auth();

  // If there's no session, show the Signin component
  if (!session) return <Signin />;

  return (
    <div>
      <h1 className="text-white">Admin Dashboard</h1>
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