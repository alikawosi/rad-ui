"use client";

import { useEffect, useState } from "react";
import { Github, Star, StarIcon } from "lucide-react";
import Link from "next/link";
import { cn, buttonVariants } from "@/registry/web/ui";

export function GithubButton() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/QuarkComponent/rad-ui")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch((e) => console.error("Error fetching GitHub stars:", e));
  }, []);

  return (
    <Link
      href="https://github.com/QuarkComponent/rad-ui"
      target="_blank"
      rel="noreferrer"
      className={cn(
        buttonVariants({ variant: "outline", size: "sm" }),
        "flex flex-row-reverse items-center gap-2 group"
      )}
    >
      <Github className="h-4 w-4" />

      {stars !== null && (
        <>
          <span className="w-px h-3 bg-border mx-1" />
          <div className="flex items-center gap-1 text-muted-foreground group-hover:text-foreground transition-colors">
            {stars.toLocaleString()}
          </div>
        </>
      )}
    </Link>
  );
}
