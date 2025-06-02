import TopicSection from "./topic-section";

const japaneseVideos = [
  { videoId: "6p9Il_j0zjc?si=AzV7OUCNt8xXf3oh", title: "Hiragana" },
  { videoId: "s6DKRgtVLGA?si=zCVJ37DGyiNZy4pe", title: "Katakana" },
];

const koreanVideos = [
  { videoId: "62_RhIsdqhw?si=cuuq-bk0tFEb2pHF", title: "Learn Korean Consonants" },
  { videoId: "twPeQ3xHy3U?si=xsstIJ4QJ00HyTCk", title: "Learn Korean Vowels" },
];

type VideoListProps = {
  activeCourseId: number;
};

export const VideoList = ({ activeCourseId }: VideoListProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {activeCourseId === 1 && <TopicSection title="Korean" videos={koreanVideos} />}
      {activeCourseId === 2 && <TopicSection title="Japanese" videos={japaneseVideos} />}
    </div>
  );
};

export default VideoList;