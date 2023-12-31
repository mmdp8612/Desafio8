import ProductMongo from "../dao/ProductMongo.js";

class ProductsService {
    constructor(dao){
        this.dao = new dao();
    }

    async getProducts(paginate=null, search=null){
        return await this.dao.getProducts(paginate, search);        
    }

    async addProduct(title, description, price, code, stock, status, category, thumbnail=null){
        return await this.dao.addProduct(title, description, price, code, stock, status, category, thumbnail);
    }

    async getProductById(productId){
        return await this.dao.getProductById(productId);
    }

    async updateProduct(productId, params){
        return await this.dao.updateProduct(productId, params);
    }

    async deleteProduct(productId){
        return await this.dao.deleteProduct(productId);
    }
}

export const productsService = new ProductsService(ProductMongo);