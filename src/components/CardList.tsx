"use client";

import {LATEST_TRANSACTIONS, POPULAR_CONTENT} from "@/components/card-list";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "lucide-react";

export function CardList({title}: { title: string }) {
  const list = title === "Popular Content" ? POPULAR_CONTENT : LATEST_TRANSACTIONS;

  return (
      <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Badge fontVariant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
