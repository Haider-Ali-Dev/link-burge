import supabase from "../supabase";

const getCurrentUser = () => {
  return {
    id: 1,
    email: "mgargano@gmail.com",
    name: "Mat Gargano",
    bio: "The quick brown fox.....",
  };
};
const getLinks = async (userId) => {
  const { data, error } = await supabase.from("links").select("*").eq("userId", userId);
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

const createLink = async ({ userId, linkType, url, title, order }) => {
  const { data, error } = await supabase
    .from("links")
    .insert({ userId, linkType, url, title, order });
  if (error) {
    console.error(error);
    return false;
  }
  return data;
}


const  getLinksFiltered = async (userId, by) => {
  if (!["social", "link"].includes(by)) {
    return false;
  }

  return await getLinks()
    .filter(({ linkType }) => linkType === by)
    .sort((a, b) => a.order - b.order);
};

const getSocialLinks = (userId) => {
  return getLinksFiltered(userId, "social");
};

const getLinksLinks = (userId) => {
  return getLinksFiltered(userId, "link");
};
