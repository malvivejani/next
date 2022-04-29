import React from 'react';
import UserList from '../../components/user';

function Users(props: any) {
    const { user } = props;
    console.log("-------", JSON.parse(user))
    return (<>
        <UserList user={user} />
    </>)
}

export default Users;

//getStaticProps fetches data on build time - pre rendering feature 
//1. runs only on server side and never on client side ...that's why cant see console in browsers
//2. can write all server side code in getStaticProps. (all  node.js code)
//3. allowed only in pages and not in component
//4. should return an object with props key- and props should also be Object.
//5. runs on build time - in production
//6. runs on every req - in developement mode
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("-----------------------", data);
    return {
        props: {
            user: JSON.stringify(data),
        },
    }
}