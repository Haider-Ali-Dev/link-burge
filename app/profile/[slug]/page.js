'use client'

import TopContent from "../../components/TopContent";
import SocialLinks from "../../components/SocialLinks";
import NonSocialLinks from "../../components/NonSocialLinks";
import React, { useEffect } from "react";
import { getSession } from "../../utils/auth";
import { useState } from "react";
import supabase from "../../supabase";
import { getLinks, getUserProfile } from "../../utils/data";
import AddUrl from "../../components/AddUrl";
import { useRouter } from "next/navigation";
import Spinner from "../../components/Spinner";

export default function Home({ params }) {
    const [user, setUser] = useState({})
    const router = useRouter()
    const [urls, setUrls] = useState([])
    useEffect(() => {
        async function getUserAndLinks() {
            const user = await supabase
                .from('profile')
                .select('*')
                .eq('id', params.slug)
                .single()

            const links = await getLinks(params.slug)
            console.log(user)
            setUser(user.data)
            setUrls(links)
        }
        getUserAndLinks()

    }, [])
    return (
        <main  className="mt-5 w-[100%] h-[100vh] flex justify-center ">
            {user.name ?
                <div className="flex justify-center flex-col">
                    <TopContent type={"view"} user={user} />
                    <SocialLinks urls={urls} />
                    <NonSocialLinks type={"view"} urlData={urls} />
                </div>
                : <div className="flex flex-col justify-center content-center">
                    <Spinner />
                </div>}

        </main>
    );
}