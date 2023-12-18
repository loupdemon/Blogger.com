import { ArticleList, MetaTags, Image } from "../../components";

function Feed() {
  return (
    <>
      <MetaTags
        conicalRoute="/feed"
        title="Discover the best of Blogger.com"
        description="Discover stories, thinking, and expertise from writers on any topic. Create and grow your developer blog, newsletter, or team engineering blog effortlessly with us."
      />

      <section className="py-24 flex items-center justify-center">
        {/* <ArticleList data={data} /> */}
        <div className="text-center space-y-4 ">
          <div className="w-[500px] h-auto mx-auto">
            <Image src="/comment.png" />
          </div>
          <h2 className="text-5xl font-bold">Coming soon</h2>
        </div>
      </section>
    </>
  );
}

export default Feed;
