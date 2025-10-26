// ./auth.ts
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // 👇 This controls redirects after sign-in
  pages: {
    signIn: "/login", // custom login page if you have one
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // if user comes from a callback URL, go there
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // otherwise always go to dashboard
      return `${baseUrl}/dashboard`
    },
  },
})
