"use client";

import { useRouter } from "next/navigation";

type PostButtonProps = {
  id: string;
};

export default function PostButton({ id }: PostButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push("/blogs/" + id);
  }

  return (
    <button
      onClick={handleClick}
      className="block border-2 border-white rounded-2xl px-2"
    >
      Press Me
    </button>
  );
}
