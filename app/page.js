'use client'

import TopContent from "./components/TopContent";
import SocialLinks from "./components/SocialLinks";
import NonSocialLinks from "./components/NonSocialLinks";
import pfp from '../public/person.jpg'
import React, { useEffect } from "react";
import { getSession } from "./utils/auth";
import { useState } from "react";
import supabase from "./supabase";
import { getLinks, getUserProfile } from "./utils/data";
import AddUrl from "./components/AddUrl";
import { useRouter } from "next/navigation";
import Spinner from "./components/Spinner";

export default function Home() {
  const [user, setUser] = useState({})
  const router = useRouter()
  const [urls, setUrls] = useState([])
  useEffect(() => {
    async function getUserAndLinks() {
      const session = await supabase.auth.getSession()
      if (session.data.session.user.id) {
        const userProfile = await getUserProfile(session.data.session.user.id)
        setUser({ ...session.data.session.user, ...userProfile })
        console.log({ ...session.data.session.user, ...userProfile })
        const links = await getLinks(session.data.session.user.id)
        console.log(links, "FROM PAGE")
        setUrls(links)
        return
      } else {
        router.push('/login')
      }
    }
    getUserAndLinks()

  }, [])
  return (
    <main className="mt-5 w-[100%] h-[100vh] flex justify-center ">
      {user.name ?
        <div className="flex justify-center flex-col">
          <TopContent user={user} />
          <SocialLinks  urls={urls} />
          <NonSocialLinks type={"edit"}  urlData={urls} />
          <AddUrl user={user} />
        </div>
        : <div className="flex flex-col justify-center content-center">
          <Spinner/>
        </div>}

    </main>
  );
}