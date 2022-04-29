import React from 'react';
import UserList from '../../components/user';
import Link from 'next/link';

function PostList(props: any) {
    const { posts } = props;
    console.log("-------", JSON.parse(posts))
    return (<>
        {
            posts && JSON.parse(posts).map((item: any, index: any) => {
                return (
                    <>
                        <Link href={`posts/${item.id}`} passHref>
                            <h1 key={item.id}>{item.id} {item.title}</h1>
                        </Link>
                    </>
                )
            })
        }
    </>)
}

export default PostList;


export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("-----------------------", data);
    return {
        props: {
            posts: JSON.stringify(data),
        },
    }
}