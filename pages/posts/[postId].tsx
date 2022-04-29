function Post({ posts }: any) {
    return (
        <>
            <h1>List of posts</h1>

            <h5>{posts.id} {posts.title}</h5>
            <hr />
        </>
    )
}
export default Post;

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map((post: any) => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    });

    return {
        paths,
        fallback: false
    }

    //fallback -false : statically generate page and if page not found shows 404 page
    //fallback - true : statically generate pages, if not shows fallback UI and makes a getStaticProps request and 
    //ganerates the page and from next rendering keep track of that generated pages and wont show any fallback ui for that.direcly shows that generated page
    //fallback - blocking  - UI is blocked. and direcly makes a server request for that url..till the time UI is blocked
}


//Here we are asking to pre render page based on post id - but that postid will get run time by clicking on posts.
// Now for that we need to define what all possible postIds are possible to pre render it in browser. for that we nned to define getStaticPath.
export async function getStaticProps(context: any) {
    const { params } = context;   //dynamic 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}

// Static Generation(Recommended):
//  The HTML is generated at build time and will be reused on each request.
//  To make a page use Static Generation, either export the page component, or export getStaticProps(and getStaticPaths if necessary).
//     It's great for pages that can be pre-rendered ahead of a user's request.
//  You can also use it with Client - side Rendering to bring in additional data.

// Server - side Rendering: 
// The HTML is generated on each request.
// To make a page use Server - side Rendering, export getServerSideProps.Because Server - side Rendering results in slower performance than Static Generation
// , use this only if absolutely necessary.