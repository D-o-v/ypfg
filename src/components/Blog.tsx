import { MdOutlineArrowOutward } from "react-icons/md";
import budgettingImage from "../assets/budgeting.jpg";
import { useState } from "react";

interface BlogProps {
    blog: {
        id: string;
        title: string;
        description: string;
        date: string;
        image: string;
        tags: string[];
    };
}

// Define an object that maps tags to color classes
const tagColorMap: { [key: string]: string } = {
    budgeting: "badge-primary",
    savings: "badge-secondary",
    marketing: "badge-accent",
    finance: "badge-neutral",
    technology: "badge-info",
    investing: "badge-success",
    management: "badge-warning",
    error: "badge-error"
};

const Blog = ({ blog }: BlogProps) => {
    // Local state to keep track of tag colors
    const [tagColors, setTagColors] = useState<{ [key: string]: string }>({});

    const getTagColor = (tag: string): string => {
        if (!tagColors[tag]) {
            // Check if the tag has a specific color mapped in tagColorMap, otherwise assign a default color
            const newColor = tagColorMap[tag.toLowerCase()] || "badge-primary";
            setTagColors(prev => ({ ...prev, [tag]: newColor }));
            return newColor;
        }
        return tagColors[tag];
    };

    return (
        <div className="card max-w-90 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5 lg:px-10 lg:pt-10">
                <img src={budgettingImage} alt="budgeting image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p className="text-wrap text-start self-start font-medium">{blog.date}</p>
                <div className="flex items-center justify-between w-full">
                    <h2 className="card-title text-wrap">{blog.title}</h2>
                    <MdOutlineArrowOutward className="text-xl" />
                </div>
                <p className="text-wrap my-1">{blog.description}</p>
                <div className="flex w-fit flex-wrap gap-2 text-md">
                    {blog.tags.map(tag => (
                        <div key={tag} className={`badge ${getTagColor(tag.toLowerCase())}`}>{tag}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
