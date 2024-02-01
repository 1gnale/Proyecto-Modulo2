export class Product{

    constructor(code, image, names, description, price, stock, state, category){
        this.code=code;
        this.image=image;
        this.names=names;
        this.description=description;
        this.price=price;
        this.stock=stock;
        this.state=state;
        this.category=category;
    }

    set setCode(code){
        this.code=code;
    }
    
    set setImage(image){
        this.image=image;
    }

    set setNames(names){
        this.names=names;
    }

    set setDescription(description){
        this.description=description;
    }

    set setPrice(price){
        this.price=price;
    }

    set setStock(stock){
        this.stock=stock;
    }

    set setState(state){
        this.state=state;
    }

    set setCategory(category){
        this.category=category;
    }

    get setCode(){
        this.code=code;
    }
    
    get getImage(){
        return this.image;
    }

    get getNames(){
        return this.names;
    }

    get getDescription(){
        return this.description;
    }

    get getPrice(){
        return this.price;
    }

    get getStock(){
        return this.stock;
    }

    get getState(){
        return this.state;
    }

    get getCategory(){
        return this.category;
    }
}