import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_CLIENTID as string,
            clientSecret:process.env.GITHUB_CLIENTSECRET as string,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{label:"Username", type:"text", placeholder:"your username"},
                password:{label:"Password",type:"password", placeholder:"your password"},
            },
            async authorize(credentials, req) {
                // find the user based on the credentials

                const user = {id:"1",name:"Dennis",password:"dingo28"};

                if(user)
                    return user;
                return null;
            },
        }),
    ],
    callbacks:{
        async signIn({user,account}){
            console.log("user",user,"account",account);
            return true;
        },
        async jwt({token,account,profile}){
            console.log("token",token);
            
            return token;
        },
        async session({session,token,user}){
            console.log("session",session,"token",token,"user",user);
            return session;
        }
    }
}