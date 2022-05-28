const Article = ({ title, subtitle, contents }) => {
  return (
    <article className="py-10 px-20">
      <header className="mb-3 border-b border-gray-300 pb-3">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-md">{subtitle}</p>
      </header>

      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </article>
  );
};

export default Article;
