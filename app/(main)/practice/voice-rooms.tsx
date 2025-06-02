import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const VoiceRooms = () => {
  return (
    <div className="space-y-4 py-4">
    {/* Room 1 */}
      <div className="relative border-2 rounded-xl p-4 space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <img
              src="/kr.svg"
              alt="Korean"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold">Chill Vibes</h1>
              <h3 className="text-lg text-gray-600">Korean</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>5</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" size="lg">
            Join Room
          </Button>
        </div>
      </div>

    {/* Room 2 */}
      <div className="relative border-2 rounded-xl p-4 space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <img
              src="/fr.svg"
              alt="French"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold">Chill Vibes</h1>
              <h3 className="text-lg text-gray-600">French</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>6</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" size="lg">
            Join Room
          </Button>
        </div>
      </div>

    {/* Room 3 */}
      <div className="relative border-2 rounded-xl p-4 space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <img
              src="/mx.svg"
              alt="Spanish"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold">Chill Vibes</h1>
              <h3 className="text-lg text-gray-600">Spanish</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>4</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" size="lg">
            Join Room
          </Button>
        </div>
      </div>

    </div>
  );
};

export default VoiceRooms;