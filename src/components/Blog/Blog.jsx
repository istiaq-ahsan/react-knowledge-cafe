import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-red-600 text-2xl'><IoBookmarksOutline />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl mt-4 mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href=''>{hashtag}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;