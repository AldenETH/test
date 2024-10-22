export const generateStaticParams = async () => {
    return [
      { slug: 'test1' },
      { slug: 'test2' },
      { slug: 'test3' }
    ];
  }

interface PostProps {
    params: { slug: string };
}

const Post = ({ params }: PostProps) => {
    const { slug } = params;

    return (
        <div>
            <h1>{slug.replace(/-/g, ' ')}</h1>
            <p>This is the content of the post: {slug}</p>
        </div>
    );
};

export default Post;
