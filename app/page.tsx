import Link from "next/link";
import Image from "next/image";

const posts = [
  {slug: 'test1', title: 'Test 1', thumbnail: '/file.svg' },
  {slug: 'test2', title: 'Test 2', thumbnail: '/globe.svg' },
  {slug: 'test3', title: 'Test 3', thumbnail: '/file.svg' }
];

const Home = () => {
  return (
    <div className="container mx-auto">
      <h2>latest post</h2>
      <div className="flex flex-nowrap">
        {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className='block'>
              <div>
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={190}
                    height={190}
                />
                <div>
                    <h3 className='text-center'>{post.title}</h3>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Home;