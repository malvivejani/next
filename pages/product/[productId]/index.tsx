import React from 'react';
import { useRouter } from 'next/router';

function ProductDetail() {

    const router = useRouter();
    const pId = router.query.productId;
    return (
        <div>
            <div>Product detail page {pId}</div>
        </div>
    )
}

export default ProductDetail;
