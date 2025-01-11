import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // List of allowed emails
      const allowedEmails = ["pascalharting98@gmail.com", "another-admin@example.com"];

      // Check if the user's email is in the allowed list
      if (user.email && allowedEmails.includes(user.email)) {
        return true; // Allow sign-in
      } else {
        // Redirect unauthorized users to the homepage
        return "/"; // Redirect to the homepage
      }
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirects are relative to the base URL
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});