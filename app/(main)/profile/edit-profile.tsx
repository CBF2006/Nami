"use client";
import React from "react";

import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Interest {
  label: string;
  color: string;
}

interface EditProfileProps {
  interests: Interest[];
  onSave: (interests: Interest[]) => void;
}

const allInterests: Interest[] = [
  { label: "Travel ✈️", color: "sky" },
  { label: "Food 🍔", color: "red" },
  { label: "Reading 📚", color: "green" },
  { label: "TV 📺", color: "purple" },
  { label: "Movies 🎬", color: "pink" },
  { label: "Anime 🐉", color: "orange" },
  { label: "K-Dramas 🎭", color: "indigo" },
  { label: "K-pop 🎤", color: "rose" },
  { label: "Music 🎵", color: "emerald" },
  { label: "Gaming 🎮", color: "cyan" },
];

const EditProfile = ({ interests, onSave }: EditProfileProps) => {
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(interests.map(i => i.label));

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSave = () => {
    const selectedWithColors = selectedInterests
      .map(label => allInterests.find(i => i.label === label))
      .filter(Boolean) as Interest[];
      
    onSave(selectedWithColors);
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
        {allInterests.map(({ label, color }) => (
          <Badge
            key={label}
            variant={selectedInterests.includes(label) ? "secondary" : "outline"}
            onClick={() => toggleInterest(label)}
            className={`
              cursor-pointer
              transition-colors duration-200
              ${
                selectedInterests.includes(label)
                  ? `bg-${color}-600 text-white shadow-lg`
                  : `bg-white text-gray-700 border border-${color}-400`
              }
            `}
          >
            {label}
          </Badge>
        ))}
      </div>
      <Button onClick={handleSave} className="mt-4">
        Save
      </Button>
    </div>
  );
};

export default EditProfile;