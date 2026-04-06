import React from 'react';
import blogAntenatal from '../../assets/images/blog_antenatal.png?url';
import blogRoutineTests from '../../assets/images/blog_routine_tests.png?url';
import blogObesity from '../../assets/images/blog_obesity.png?url';

const blogsData = [
  {
    image: blogAntenatal,
    date: 'June, 2022',
    title: 'Antenatal Classes - What they are and when to attend them',
    category: 'Centre of Excellence',
    link: '#',
  },
  {
    image: blogRoutineTests,
    date: 'June, 2022',
    title: 'Routine tests during pregnancy that lead to a healthy pregnancy',
    category: 'Centre of Excellence',
    link: '#',
  },
  {
    image: blogObesity,
    date: 'June, 2022',
    title: 'Obesity in pregnancy: Simple tips',
    category: 'Centre of Excellence',
    link: '#',
  }
];

const Blogs: React.FC = () => {
  return (
    <section className="bg-white flex justify-center">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center w-full flex flex-col gap-3 md:gap-5 justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Blogs
          </h2>
          <div className="flex justify-center flex-col items-center">
            <p className="text-gray-700 leading-relaxed text-sm md:text-[15px] max-w-2xl text-center">
              Discover our most recent health articles provided by our reliable experts.
            </p>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogsData.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              className="group flex flex-col bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-[200px] w-full overflow-hidden shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 md:p-6 flex-1">
                {/* Date & Share */}
                <div className="flex justify-between items-center text-gray-400 text-sm pb-4 border-b border-gray-100 mb-4 font-medium">
                  <span className="text-gray-500">{blog.date}</span>
                  <div className="flex items-center gap-1.5 hover:text-[#6B2D8B] transition-colors cursor-pointer text-gray-400">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* External Share arrow icon */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Share</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900 leading-snug mb-5 xl:mb-6 group-hover:text-[#6B2D8B] transition-colors">
                  {blog.title}
                </h3>

                {/* Category glued to bottom */}
                <span className="text-gray-500 text-[13px] md:text-sm font-medium mt-auto">
                  {blog.category}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
