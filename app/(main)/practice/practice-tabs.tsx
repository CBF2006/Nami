import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoList } from "@/components/video-list";
import Flashcards from "./flashcards";
import VoiceRooms from "./voice-rooms";

const PracticeTabs = () => {
    return (
        <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="videos">Video</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                <TabsTrigger value="voicerooms">Voice Rooms</TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
                <VideoList />
            </TabsContent>

            <TabsContent value="flashcards">
                <Flashcards />
            </TabsContent>

            <TabsContent value="voicerooms">
                <VoiceRooms />
            </TabsContent>
            
        </Tabs>
    )
}

export default PracticeTabs;