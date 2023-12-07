import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, No posts available.</p>;
  }

  return (
    <section className="mt-6 mx-auto max-w-3xl">
      <h2 className="text-4xl font-bold dark:text-white/90">
        Tech explanations with witty humor
      </h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
