import React from 'react';

function UserList(props: any) {
    const { user } = props;
    return (<>
        <h1 className='user'>Users page</h1>
        {
            user && JSON.parse(user).map((item: any, index: number) => {
                console.log("user item", item)
                return (<p style={{ marginBottom: 20 }}>{item?.name}</p>)
            })
        }
    </>)
}

export default UserList;