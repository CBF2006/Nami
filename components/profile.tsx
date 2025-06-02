"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import EditProfile from "@/app/(main)/profile/edit-profile";
import React from "react";
import { Badge } from "./ui/badge";

interface Interest {
  label: string;
  color: string;
}

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [interests, setInterests] = React.useState<Interest[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      setInterests([]);
    }
  }, [user]);

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn || !user) return <div>Please sign in to view your profile.</div>;

  return (
    <div className="border-2 rounded-xl p-4 space-y-4 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <img
          src={user.imageUrl}
          alt="User profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold">{user.fullName || user.firstName || "User"}</h1>
          <h3 className="text-lg text-gray-600">
            {user.username || user.firstName || "User"}
          </h3>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2">
          {interests.length > 0 && interests.map((interest) => (
            <Badge 
            key={interest.label} 
            variant="secondary"
            className={`bg-${interest.color}-500 text-white`}
            >
              {interest.label}
            </Badge>
          ))}
        </div>
      </div>

    <div className="flex gap-2">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="primary" size="lg">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent>
          <EditProfile 
            interests={interests}
            onSave={(newInterests) => {
              setInterests(newInterests);
              setIsDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      <Button 
        variant="ghost" 
        size="lg"
        >
        Manage Account
      </Button>
    </div>

  </div>
  );
};

export default Profile;
