import { appActions } from "@/app/store/userSearchSlice";
import { getUser } from "@/shared/api";

export const setUser = async (username: string) => {
  const res = await getUser(username);
  const {
    name,
    created_at,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
    html_url,
  } = res.data;

  return {
    name,
    created_at,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
    html_url,
  };
};
