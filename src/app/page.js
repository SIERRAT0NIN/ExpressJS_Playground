"use client";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const db = new PrismaClient();

export default function Home() {
  const prisma = new PrismaClient();

  return (
    <main className="flex-1  min-h-screen flex-col items-center justify-between ">
      <div className="mt-20">
        <Button>Test</Button>
        <Link
          className="bg-black text-white p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl "
          href="/userpage"
        >
          User Page
        </Link>
        <Link
          className="bg-black text-white p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl "
          href="/userpage/1"
        >
          User Page 1
        </Link>
        <Link
          className="bg-black text-white p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl "
          href="/article"
        >
          Article
        </Link>
        <Link
          className="bg-black text-white p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl "
          href="/setting"
        >
          Setting
        </Link>
      </div>
    </main>
  );
}
