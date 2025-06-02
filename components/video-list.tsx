import TopicSection from "./topic-section";

const japaneseVideos = [
  { videoId: "6p9Il_j0zjc?si=AzV7OUCNt8xXf3oh", title: "Hiragana" },
  { videoId: "s6DKRgtVLGA?si=zCVJ37DGyiNZy4pe", title: "Katakana" },
];

const koreanVideos = [
  { videoId: "NtQhb3EJcOM?si=9Y-S0hx7G2Ek6FPS", title: "Time to Twice", tags: ["K-pop 🎤"] },
  { videoId: "bk50RC7XGlc?si=2JR-42-leb9OUaaw", title: "NewJeans Vlog", tags: ["K-pop 🎤", "Travel ✈️"] },
];

type Video = {
  videoId: string;
  title: string;
  tags?: string[];
};

type VideoListProps = {
  activeCourseId: number;
  filterTags: string[];
};

export const VideoList = ({ activeCourseId, filterTags }: VideoListProps) => {
  const getFilteredVideos = (videos: Video[]) => {
    if (filterTags.length === 0) return videos;

    return videos.filter(video =>
      video.tags?.some(tag => filterTags.includes(tag))
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {activeCourseId === 1 && (
        <TopicSection
          title="Korean"
          videos={getFilteredVideos(koreanVideos)}
        />
      )}
      {activeCourseId === 2 && (
        <TopicSection
          title="Japanese"
          videos={getFilteredVideos(japaneseVideos)}
        />
      )}
    </div>
  );
};

export default VideoList;