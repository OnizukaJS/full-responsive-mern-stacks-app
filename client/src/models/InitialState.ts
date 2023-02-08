import User from "./User";
import Post from "./Post";

interface InitialState {
  mode: "light" | "dark";
  user: User | null;
  token: string | null;
  posts: Post[];
}

export default InitialState;
