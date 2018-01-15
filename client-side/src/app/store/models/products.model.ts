export interface Products {
    productList: ProductList;
    productsDetails: ProductsDetails;
}

export interface ProductList {
    name: 'string';
    submenu?: Submenu;
}

export interface Submenu {
    name: 'string';
}

export interface ProductsDetails {
    productName: 'string';
    price: 'string';
    imageUrl: 'string';
}
