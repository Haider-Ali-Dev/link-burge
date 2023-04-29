import supabase from "../supabase";
import { useState, useEffect } from "react";
import { deleteUrlFromLinks } from "../utils/data";
const NonSocialLinks = ({ urlData, type }) => {

    const [links, setLinks] = useState(urlData);
    const deleteUrl = async (id) => {
        deleteUrlFromLinks(id, setLinks)
    }

    return (
        <div className="flex justify-center">
            <div className="mt-3 flex flex-col gap-5">
                {urlData.map((url) => {
                    if (
                        url.url.includes("snapchat") ||
                        url.url.includes("facebook") ||
                        url.url.includes("twitter") ||
                        url.url.includes("instagram")
                    ) {
                        return null;
                    }
                    return (
                        <div key={url.id} className="flex flex-col">

                            <div className="bg-[#F2C00F] border-black box-border shadow-[4px_4px_0px_#000000] border-4 w-[311px] h-[70px]">
                                <p className="mb-2 w-[auto] h-[auto] text-center text-[48px] ff1 font-extrabold">
                                    <a  href={url.url}>{url.title}</a>
                                </p>

                            </div>
                            {
                                type !== "view" && type === "edit" ? 
                                <p onClick={() => deleteUrl(url.id)} className="text-red-400 text-center font-bold text-[20px] cursor-pointer">
                                    Delete Link
                                </p> 
                                : null
                            }
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default NonSocialLinks;
