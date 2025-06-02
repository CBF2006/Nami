import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoList } from "@/components/video-list";
import Flashcard from "./flashcard";
import VoiceRooms from "./voice-rooms";

type PracticeTabsProps = {
    activeCourseId: number;
};

const PracticeTabs = ({ activeCourseId }: PracticeTabsProps) => {
    return (
        <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                <TabsTrigger value="voicerooms">Voice Rooms</TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
                <VideoList activeCourseId={activeCourseId}/>
            </TabsContent>

            <TabsContent value="flashcards">
                <Flashcard
                />
            </TabsContent>

            <TabsContent value="voicerooms">
                <VoiceRooms />
            </TabsContent>
            
        </Tabs>
    )
}

export default PracticeTabs;