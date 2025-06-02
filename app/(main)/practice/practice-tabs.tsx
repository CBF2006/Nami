"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoList } from "@/components/video-list";
import Flashcard from "./flashcard";
import VoiceRooms from "./voice-rooms";
import TagFilterDialog from "./tag-filter-dialog";

type PracticeTabsProps = {
  activeCourseId: number;
};

const PracticeTabs = ({ activeCourseId }: PracticeTabsProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <Tabs defaultValue="videos" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
        <TabsTrigger value="voicerooms">Voice Rooms</TabsTrigger>
      </TabsList>

      <TabsContent value="videos">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filter by Tags</h2>
          <TagFilterDialog selected={selectedTags} onSave={setSelectedTags} />
        </div>

        <VideoList activeCourseId={activeCourseId} filterTags={selectedTags} />
      </TabsContent>

      <TabsContent value="flashcards">
        <Flashcard />
      </TabsContent>

      <TabsContent value="voicerooms">
        <VoiceRooms />
      </TabsContent>
    </Tabs>
  );
};

export default PracticeTabs;