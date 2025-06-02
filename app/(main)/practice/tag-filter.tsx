type TagFilterProps = {
  availableTags: string[];
  selectedTags: string[];
  onChange: (newTags: string[]) => void;
};

export const TagFilter = ({ availableTags, selectedTags, onChange }: TagFilterProps) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {availableTags.map(tag => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 rounded-full border text-sm transition ${
            selectedTags.includes(tag)
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;