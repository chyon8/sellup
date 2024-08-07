
import User from "@/models/User";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const dynamic = 'force-dynamic'


const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

   
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {

      if (account.provider === "google") {
        const { name, email,image } = user;

        try {
  
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch(`${process.env.BASE_URL}/api/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                image
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
    
    async session({ session, token, user }) {
      const userData = await User.findOne({ email: session.user.email });
      if (userData) {
        session.user.id = userData._id;
    
      }
      return session;
    },
  
    
  },

 

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
