import Image from "next/image";
import Link from "next/link";

import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebaritem";
import { Button } from "./ui/button";

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
            )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" width={60} height={60} alt="Nami" />
                    <h1 className="text-3xl font-extrabold text-brand-light tracking-wide">
                        Nami
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                label="Learn" 
                href="/learn"
                iconSrc="/learn.svg"
                />

                <SidebarItem 
                label="Practice" 
                href="/practice"
                iconSrc="/practice.svg"
                />
                
                <SidebarItem 
                label="Leaderboard" 
                href="/leaderboard"
                iconSrc="/leaderboard.svg"
                />

                <SidebarItem 
                label="Quests" 
                href="/quests"
                iconSrc="/quests.svg"
                />

                <SidebarItem 
                label="Shop" 
                href="/shop"
                iconSrc="/shop.svg"
                />

                <SidebarItem 
                label="Profile" 
                href="/profile"
                iconSrc="/profile.svg"
                />
                
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                    <Link href="/about">
                        <Button variant="ghost">
                            About
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};