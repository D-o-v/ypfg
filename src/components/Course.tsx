import { MdOutlineArrowOutward } from "react-icons/md";
import savingImage from '../assets/SAVING.jpg'
import { useState } from "react";

interface CourseProps {
    course: {
        id: string;
        title: string;
        description: string;
        image: string;
        newPrice: string;
        oldPrice: string;
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


const Course = ({ course }: CourseProps) => {
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
        <div className="card max-w-90 bg-base-100 shadow-xl rounded-none">
            <figure className="px-5 pt-5 lg:px-10 lg:pt-10">
                <img src={savingImage}  alt="budgeting image" className="h-[230px] w-[400px]" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="flex items-center justify-between w-full">
                    <h2 className="card-title text-wrap">{course.title}</h2>
                    <MdOutlineArrowOutward className="text-xl" />
                </div>
                <p className="text-wrap my-1">{course.description}</p>
                <div className="flex w-fit flex-wrap gap-2 text-md">
                    {course.tags.map(tag => (
                        <div key={tag} className={`badge ${getTagColor(tag.toLowerCase())}`}>{tag}</div>
                    ))}
                </div>
                <div className="flex w-full my-2 flex-wrap gap-2 text-md text-start">
                    <span className="mx-1">{course.newPrice}</span>
                    <span className="line-through mx-1">{course.oldPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Course;
