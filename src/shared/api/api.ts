import axios from "axios";
import { GitHubUser } from "../types/response";

export const instance = axios.create({
  baseURL: "https://api.github.com/users",
});

export const getUser = () => instance.get<GitHubUser>("");
