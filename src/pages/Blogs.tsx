import background from '../assets/blog-bg.jpg';

const Blogs = () => {
    return (
        <div
            className="min-h-screen p-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="p-4 lg:p-10 min-h-screen  w-full bg-opacity-10 backdrop-blur-sm backdrop-filter">

            <div className="relative z-10 text-white">
                Blogs
            </div>
            </div>
        </div>
    );
}

export default Blogs;
