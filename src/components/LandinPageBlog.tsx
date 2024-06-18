
import Blog from "./Blog";

interface BlogType {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    tags: string[];
}

const LandinPageBlog = () => {

    const blogsData: BlogType[] = [
        {
            id: "1",
            title: "Budgeting for Beginners",
            description: "Learn the basics of budgeting and how to manage your finances effectively.",
            date: "June 12, 2024",
            image: "https://example.com/path/to/image1.jpg",
            tags: ["Budgeting", "Finance"]
        },
        {
            id: "2",
            title: "Advanced Investment Strategies",
            description: "Explore advanced strategies for investing in the stock market.",
            date: "June 15, 2024",
            image: "https://example.com/path/to/image2.jpg",
            tags: ["Investing", "Finance"]
        },
        {
            id: "3",
            title: "Saving Money on Groceries",
            description: "Tips and tricks for saving money on your grocery bill.",
            date: "June 20, 2024",
            image: "https://example.com/path/to/image3.jpg",
            tags: ["Savings", "Budgeting"]
        }
    ];

    return (
        <div className="flex flex-col justify-center w-full p-4 lg:p-7 gap-2 bg-slate-50">
            <div className='text-select my-4 lg:my-5'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-start text-xl lg:text-2xl mb-3'>Our blog</p>
                    <button className='btn btn-primary'>View all posts</button>
                </div>
                <p className='font-bold text-start text-xl lg:text-3xl mb-3 text-balance'>Lastest blog posts</p>
                <p>Spend smarter, lower your bills, get cashback on everything you buy, and be happy.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 lg:gap-10 lg:mb-7">
                {blogsData.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default LandinPageBlog;
