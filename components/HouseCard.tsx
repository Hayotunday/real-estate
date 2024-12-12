"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export function HouseCard() {
  return (
    <Link href={"/listings/1"}>
      <Card className="w-full h-[350px] bg-slate-100 rounded-xl shadow hover:shadow-lg">
        <CardContent className="w-full h-full rounded-xl p-0">
          <div className="relative w-full h-2/3 rounded-xl">
            <Image
              src={"/images/house-background.jpeg"}
              alt="house background"
              fill
              priority
              className="object-cover rounded-xl z-0"
            />
          </div>

          <div className="p-3 text-blue-950">
            <p className="text font-semibold text-base">
              Nigeria &middot; Ogun
            </p>
            <p className="text font-medium text-sm">Duplex</p>
            <p className="text font-medium text-sm">3 Rooms</p>

            <div className="flex flex-row justify-between items-center">
              <p className="text font-extrabold text-xl">$1,000</p>

              <FavoriteButton />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default HouseCard;
