
const NonSocialLinks = ({ urlData }) => {

    return (
        <div className="flex justify-center">
            <div className="mt-3 flex flex-col gap-5">
                {
                    urlData.map((url) => {
                        return (
                            <div className=" bg-[#F2C00F] border-black box-border shadow-[4px_4px_0px_#000000] border-4 w-[311px] h-[70px]">
                                <p className="mb-2 w-[auto] h-[auto] text-center text-[48px]  ff1 font-extrabold">
                                    <a href={url.url}>{url.title}</a>
                                </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default NonSocialLinks;