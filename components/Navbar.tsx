import { auth, signOut, signIn } from '@/auth'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <p>ARSENSUS</p>
        </Link>

        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <Link href="/admin/dashboard">
                <span>Dashboard</span>
              </Link>
              <form action={async() => {
                "use server";
                await signOut();
              }}>
                <button type="submit">
                Logout
              </button>
              </form>
            </>
          ) : (
            <form action={async () => {
              "use server";
              await signIn('google');
            }}>
              <button type="submit">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar