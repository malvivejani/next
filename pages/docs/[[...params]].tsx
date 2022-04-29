import React from 'react';
import { useRouter } from 'next/router';
//[...params] - catch all routes
// /docs/review/exam --- all catch in one route
// /docs/ - will show error
// [[...params]] -  will not show any error for /docs only route
function docs() {
    const router = useRouter();
    const params = router.query.params;
    console.log("params", params);

    return <h1>docs </h1>
}

export default docs;
