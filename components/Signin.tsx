import React from 'react';
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from '@/auth';

const Signin = () => {
  return (
    <div>
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