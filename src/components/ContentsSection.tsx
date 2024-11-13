const ContentSection = () => {
  return (
    <section className="height-80 flex flex-col md:flex-row mdjustify-around">
      <article className="bg-green-600 h-56 flex-grow m-5 rounded-lg"></article>
      <article className="bg-red-600 h-56 flex-grow m-5 rounded-lg"></article>
      <article className="bg-purple-600 h-56 flex-grow m-5 rounded-lg"></article>
    </section>
  );
};

export default ContentSection;
