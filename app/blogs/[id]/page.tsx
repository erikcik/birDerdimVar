import prisma from "@/lib/prisma";
import { Post as PostType, User } from "@prisma/client"; // Import types from Prisma client

type ParamsType = {
  id: string;
};
type PostWithAuthor = PostType & {
  author: User | null;
};

const getSpecificPost = async (
  params: ParamsType
): Promise<PostWithAuthor | null> => {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });
  return post;
};

type PropsType = {
  params: ParamsType;
};

// Define the component with proper type for props
const Post: React.FC<PropsType> = async ({ params }) => {
  const onePost = await getSpecificPost(params);
  return <div className="">{onePost?.title}</div>;
};

export default Post;
