import supabase from "../supabase";



const getUserProfile = async (user_id) => {

  let { data: profile, error } = await supabase
    .from('profile')
    .select('*')
    .eq('id', user_id)

  return { name: profile[0].name, picture: profile[0].picture, bio: profile[0].bio }


}

const getCurrentUser = async () => {
  const user = (await supabase.auth.getSession()).data.session.user;
  return user;
};
const getLinks = async (user_id) => {
  const { data, error } = await supabase.from("links").select("*").eq("user_id", user_id);
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

const createLink = async ({ user_id, linkType, url, title, order }) => {
  const { data, error } = await supabase
    .from("links")
    .insert({ user_id, linkType, url, title, order })
    .select("*")
    .eq("user_id", user_id);
  if (error) {
    console.error(error);
    return false;
  }
  return data;
}


const getUserProfileAndLinks = async (slug, setUser, setUrls, setIsErrored) => {
  try {
    const user = await supabase
      .from('profile')
      .select('*')
      .eq('id', slug)
      .single()

    const links = await getLinks(slug)
    setUser(user.data)
    setUrls(links)
  } catch (e) {
    setIsErrored(true)
  }

}


const uploadImage = async (file, user, setPicture) => {
  try {
    const path = `${user.id}/${v4()}`;
    await supabase.storage.from('images').upload(path, file)
    setPicture(`https://ukctpgutqywmhmykntls.supabase.co/storage/v1/object/public/images/${path}`)
    await supabase.from('profile')
      .update({ picture: path })
      .eq('id', user.id)
  } catch (error) {
    console.error(error)
  }
}

const getLinksFromSlug = async (slug) => {
  const { data, error } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', slug)
  if (error) {
    console.error(error)
    return []
  }
  return data
}



const deleteUrlFromLinks = async (id, setLinks) => {
  const data = await supabase
    .from("links")
    .delete()
    .eq("id", id)
    .select("*");

  setLinks(data.data);
}




const getLinksFiltered = async (user_id, by) => {
  if (!["social", "link"].includes(by)) {
    return false;
  }

  return await getLinks()
    .filter(({ linkType }) => linkType === by)
    .sort((a, b) => a.order - b.order);
};

const getSocialLinks = (user_id) => {
  return getLinksFiltered(user_id, "social");
};

const getLinksLinks = (user_id) => {
  return getLinksFiltered(user_id, "link");
};

export { createLink, getCurrentUser, getLinks, getSocialLinks, getLinksLinks, getUserProfile, getUserProfileAndLinks, uploadImage, deleteUrlFromLinks, getLinksFromSlug }
