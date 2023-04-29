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
import { getUserProfileAndLinks } from "../../utils/data";
export default function Home({ params }) {
    const [user, setUser] = useState({})
    const router = useRouter()
    const [isErrored, setIsErrored] = useState(false)
    const [urls, setUrls] = useState([])
    useEffect(() => {
        async function getUserAndLinks() {
            getUserProfileAndLinks(params.slug, setUser, setUrls, setIsErrored)
        }
        getUserAndLinks()

    }, [])
    if (isErrored) {
        return (
            <main className="mt-5 w-[100%] h-[100vh] flex justify-center ">
                <p className="text-center text-[30px] ff1">User not found.</p>
            </main>
        )
    }
    return (
        <main className="mt-5 w-[100%] h-[100vh] flex justify-center ">
            {user.name ?
                <div className="flex justify-center flex-col">
                    <TopContent type={"view"} user={user} />
                    <SocialLinks urls={urls} />
                    <NonSocialLinks type={"view"} urlData={urls} />
                </div>
                : <div className="flex flex-col justify-center content-center">
                    <Spinner />
                </div>
            }

        </main>
    );
}