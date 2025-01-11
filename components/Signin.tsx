import React from 'react';
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from '@/auth';

const Signin = () => {
  return (
    <div className='bg-black-200 flex flex-col rounded-2xl shadow-xl p-8 space-y-8 max-w-2xl
    justify-center items-center'>
      <h1 className='text-center text-[40px] md:text-5xl lg:text-6xl uppercase dark'>
        Admin Login
      </h1>
      <form action={async () => {
        "use server";
        await signIn('google');
      }}>
        <Button type="submit">
          <MailOpen /> Login with Google
        </Button>
      </form>
    </div>
  );
};

export default Signin;