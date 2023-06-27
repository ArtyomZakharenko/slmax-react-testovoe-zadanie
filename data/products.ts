import {IProduct, ISingleProduct} from '@/interfaces/product.interface';

export const productsData: IProduct[] = [
    {
        id: 1,
        name: 'DRÖNA Box, patterned green, beige',
        price: 6.99,
        image: 'https://www.ikea.com/us/en/images/products/droena-box-patterned-green-beige__1150621_pe887553_s5.jpg?f=s',
    },
    {
        id: 2,
        name: 'NIMM Storage box with lid, gray-green',
        price: 4.99,
        image: 'https://www.ikea.com/us/en/images/products/nimm-storage-box-with-lid-gray-green__1136755_pe879854_s5.jpg?f=xl',
    },
    {
        id: 3,
        name: 'KONSTFULL Vase, frosted glass, green',
        price: 7.99,
        image: 'https://www.ikea.com/us/en/images/products/konstfull-vase-frosted-glass-green__1030416_pe836271_s5.jpg?f=xl',
    },
    {
        id: 4,
        name: 'Upplämen Storage basket, gray-green',
        price: 16.99,
        image: 'https://www.ikea.com/us/en/images/products/uppraemen-storage-basket-gray-green__1112588_pe871224_s5.jpg?f=xl',
    },
    {
        id: 5,
        name: 'STUK Storage with 7 compartments, light gray-green',
        price: 9.99,
        image: 'https://www.ikea.com/us/en/images/products/stuk-storage-with-7-compartments-light-gray-green__1085420_pe860101_s5.jpg?f=xl',
    },
    {
        id: 6,
        name: 'SOKKER Plant pot, indoor/outdoor light green',
        price: 4.99,
        image: 'https://www.ikea.com/us/en/images/products/socker-plant-pot-indoor-outdoor-light-green__1147760_pe883446_s5.jpg?f=xl',
    }
];

export const detailedData: ISingleProduct[] = [
    {
        id: 1,
        name: 'DRÖNA Box, patterned green, beige',
        price: 6.99,
        image: 'https://www.ikea.com/us/en/images/products/droena-box-patterned-green-beige__1150621_pe887553_s5.jpg?f=s',
        description: 'Perfect for everything from newspapers to clothes. Easy to pull out and lift as the box has handles. The box fits perfectly in KALLAX shelf.',
        category: 'Storage',
        countInStock: 10,
    },
    {
        id: 2,
        name: 'NIMM Storage box with lid, gray-green',
        price: 4.99,
        image: 'https://www.ikea.com/us/en/images/products/nimm-storage-box-with-lid-gray-green__1136755_pe879854_s5.jpg?f=xl',
        description: 'The box fits perfectly in KALLAX shelf.',
        category: 'Storage',
        countInStock: 10,
    },
    {
        id: 3,
        name: 'KONSTFULL Vase, frosted glass, green',
        price: 7.99,
        image: 'https://www.ikea.com/us/en/images/products/konstfull-vase-frosted-glass-green__1030416_pe836271_s5.jpg?f=xl',
        description: 'The glass vase is mouth blown by a skilled craftsperson.',
        category: 'Decoration',
        countInStock: 10,
    },
    {
        id: 4,
        name: 'Upplämen Storage basket, gray-green',
        price: 16.99,
        image: 'https://www.ikea.com/us/en/images/products/uppraemen-storage-basket-gray-green__1112588_pe871224_s5.jpg?f=xl',
        description: 'The basket is hand woven and therefore has a unique look.',
        category: 'Storage',
        countInStock: 10,
    },
    {
        id: 5,
        name: 'STUK Storage with 7 compartments, light gray-green',
        price: 9.99,
        image: 'https://www.ikea.com/us/en/images/products/stuk-storage-with-7-compartments-light-gray-green__1085420_pe860101_s5.jpg?f=xl',
        description: 'The hook and loop fastener makes it easy to hang up and move.',
        category: 'Storage',
        countInStock: 10,
    },
    {
        id: 6,
        name: 'SOKKER Plant pot, indoor/outdoor light green',
        price: 4.99,
        image: 'https://www.ikea.com/us/en/images/products/socker-plant-pot-indoor-outdoor-light-green__1147760_pe883446_s5.jpg?f=xl',
        description: 'The plant pot is galvanized to protect against corrosion.',
        category: 'Decoration',
        countInStock: 10,
    }
];
