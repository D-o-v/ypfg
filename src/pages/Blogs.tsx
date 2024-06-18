import { useState, useEffect } from 'react';
import Blog from "../components/Blog";

interface BlogType {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    tags: string[];
}

const Blogs = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategoriesAndBlogs = () => {
            const categoriesData: string[] = ["All", "Budgeting", "Finance", "Investing", "Savings", "Technology"];
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
                },
                {
                    id: "4",
                    title: "The Future of Technology",
                    description: "An in-depth look at the latest trends and innovations in technology.",
                    date: "June 25, 2024",
                    image: "https://example.com/path/to/image4.jpg",
                    tags: ["Technology"]
                },
                {
                    id: "5",
                    title: "How to Start Investing",
                    description: "A beginner's guide to investing in the stock market.",
                    date: "June 30, 2024",
                    image: "https://example.com/path/to/image5.jpg",
                    tags: ["Investing", "Finance"]
                },
                {
                    id: "6",
                    title: "Creating a Savings Plan",
                    description: "Step-by-step guide to creating a savings plan that works for you.",
                    date: "July 5, 2024",
                    image: "https://example.com/path/to/image6.jpg",
                    tags: ["Savings", "Budgeting"]
                }
            ];

            setCategories(categoriesData);
            setBlogs(blogsData);
            setLoading(false);
        };

        fetchCategoriesAndBlogs();
    }, []);

    const filteredBlogs = selectedCategory === 'all'
        ? blogs
        : blogs.filter((blog) => blog.tags.map(tag => tag.toLowerCase()).includes(selectedCategory));

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center w-full h-screen">
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            ) : (
                <div className="min-h-screen p-4 lg:p-10 w-full bg-slate-100">
                    <div className="hero-content text-center">
                        <div className="max-w-xl">
                            <h1 className="text-5xl font-bold">Resources and insights</h1>
                            <p className="py-6">The latest industry news, interviews, technologies, and resources.</p>
                            <form>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Search"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a 3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                                    </svg>
                                </label>
                            </form>
                        </div>
                    </div>

                    <ul className="menu mb-4 gap-2 bg-slate-200 lg:menu-horizontal rounded-box w-full">
                        {categories.map(category => (
                            <li key={category} onClick={() => setSelectedCategory(category.toLowerCase())}>
                                <a className={selectedCategory === category.toLowerCase() ? 'active' : ''}>{category}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 lg:my-7">
                        {filteredBlogs.map(blog => (
                            <Blog key={blog.id} blog={blog}  />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Blogs;
