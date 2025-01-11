import { auth, signOut } from "@/auth";
import Booking from "@/components/Booking";

export default async function Page() {
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden
    mx-auto sm:px-10 px-5 max-w-7xl w-full my-40">
      <h1 className='text-center text-[40px] md:text-5xl lg:text-6xl'>
        Buche jetzt deinen Termin:
      </h1>
      <Booking />
    </main>
  );
}