import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          // scope: ["openid", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile",
          // "https://www.googleapis.com/auth/contacts", "https://www.googleapis.com/auth/user.addresses.read",
          // "https://www.googleapis.com/auth/user.birthday.read", "https://www.googleapis.com/auth/user.organization.read",
          // "https://www.googleapis.com/auth/user.phonenumbers.read", "https://www.googleapis.com/auth/contacts.other.readonly",
          // "https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/calendar.events.readonly"].join(' ')
          scope: ["openid", "https://www.googleapis.com/auth/userinfo.email"].join(' ')
        }
      }
    })
  ],
  callbacks: {
    redirect({ baseUrl }) {
      return baseUrl
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      console.log(JSON.stringify(token), 'tokentoken');
      console.log(token, 'tokentoken');
      console.log(account, 'accountaccount');
      
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  },
  session: { strategy: "jwt" },
  secret: process.env.SECRET,
  // debug: true,
})

// поймать токен с гугла при редикректе, нужен токен чтобы на бэк отдать
