import React from 'react';
import Link from 'next/link';

function Product() {
    return <div>
        <Link href='/product/1'>
            <h4>P1</h4>
        </Link>
        <Link href='/product/2'>
            <h4>P2</h4>
        </Link>
        <Link href='/product/3'>
            <h4>P3</h4>
        </Link>
    </div>;
}

export default Product;
