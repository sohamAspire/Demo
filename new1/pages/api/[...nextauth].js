import React from 'react'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'

export default Auth({
    provider :[
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ]
})