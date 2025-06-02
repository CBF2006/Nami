"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Interest {
  label: string;
  color: string;
}

interface TagFilterDialogProps {
  selected: string[];
  onSave: (tags: string[]) => void;
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

const TagFilterDialog: React.FC<TagFilterDialogProps> = ({ selected, onSave }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedTags, setSelectedTags] = React.useState<string[]>(selected);

  const toggleTag = (label: string) => {
    setSelectedTags((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
  };

  const handleSave = () => {
    onSave(selectedTags);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Filter by Interest</DialogTitle>
          <Separator className="my-4" />
          <DialogDescription className="text-neutral-900 font-semibold">
            Choose the tags you're interested in:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 mt-4">
          {allInterests.map(({ label, color }) => (
            <Badge
                key={label}
                variant={selectedTags.includes(label) ? "secondary" : "outline"}
                onClick={() => toggleTag(label)}
                className={`cursor-pointer transition-colors duration-200 ${
                    selectedTags.includes(label)
                    ? `bg-${color}-600 text-white shadow-lg`
                    : `bg-white text-gray-700 border border-${color}-400`
                }`}
            >
                {label}
            </Badge>
          ))}
        </div>
        <Button onClick={handleSave} className="mt-4">
          Apply
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TagFilterDialog;