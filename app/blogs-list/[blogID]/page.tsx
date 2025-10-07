export default function ReadBlog({
  params,
  searchParams,
}: {
  params: { blogId: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Category Badge */}
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          {searchParams.category}
        </span>
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {searchParams.title}
      </h1>

      {/* Blog Meta Information */}
      <div className="flex items-center gap-6 text-gray-600 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-medium">{searchParams.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{searchParams.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{searchParams.readTime}</span>
        </div>
      </div>

      {/* Excerpt */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        {searchParams.excerpt}
      </p>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none text-gray-800">
        {searchParams.content}
      </article>
    </div>
  );
}