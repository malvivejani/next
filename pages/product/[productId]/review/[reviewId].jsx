import React from 'react';
import { useRouter } from 'next/router';

function ReviewId() {

    const router = useRouter();
    const rId = router.query.reviewId;
    return (
        <div>
            <div>Review Id {rId}</div>
        </div>
    )
}

export default ReviewId;
