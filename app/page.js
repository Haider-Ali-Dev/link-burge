'use client'

import TopContent from "./components/TopContent";
import SocialLinks from "./components/SocialLinks";
import NonSocialLinks from "./components/NonSocialLinks";
import pfp from '../public/person.jpg'
import React, { useEffect } from "react";
import { getSession } from "./utils/auth";
import { useState } from "react";
import supabase from "./supabase";

export default function Home() {
  const [user, setUser] = useState({})
  useEffect(() => {
    async function getUser() {
      const session = await supabase.auth.getSession()
      if (session.data.session.user) {
        setUser(session.data.session.user)
        return
      }
    }
    getUser()

  }, [])
  return (
    <main className="mt-5 w-[100%] h-[100vh] flex justify-center ">
      <div className="flex justify-center flex-col">
        <TopContent user={{}} />
        <SocialLinks />
        <NonSocialLinks urlData={[]} />
        {/* Not Part of lesson 2*/}
        {/* <AddUrl/> */}
      </div>

    </main>
  );
}
