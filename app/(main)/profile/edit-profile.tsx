"use client";
import React from "react";

import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface EditProfileProps {
    interests: string[];
    onSave: (interests: string[]) => void;
}

const allInterests = [
    "Travel",
    "Food",
    "Reading",
    "TV",
    "Movies",
    "Anime",
    "K-Dramas",
    "K-pop",
    "Music",
    "Gaming",
];

const EditProfile = ({ interests, onSave }: EditProfileProps) => {
    const [selectedInterests, setSelectedInterests] = React.useState<string[]>(interests);
    
    const toggleInterest = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
            ? prev.filter((i) => i !== interest)
            : [...prev, interest]
        );
    };

    return (
    <div>
        <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>Edit Profile</DialogTitle>
            <Separator className="my-4"/>
            <DialogDescription className="text-neutral-900 font-semibold">
              Interests
            </DialogDescription>
        </DialogHeader>

    <div className="flex flex-wrap gap-2 mt-4">
        {allInterests.map((interest) => (
            <Badge
                key={interest}
                variant={selectedInterests.includes(interest) ? "secondary" : "outline"}
                onClick={() => toggleInterest(interest)}
                className="cursor-pointer"
            >
                {interest}
            </Badge>
        ))}
    </div>
        <Button
            onClick={() => onSave(selectedInterests)}
            className="mt-4"
        >
            Save
        </Button>
    </div>
    );
}

export default EditProfile;