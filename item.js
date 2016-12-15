class Item{
  //Fill in the item class below this comment.
constructor(n,p,s){
  this.name = n;
  this.price = p;
  this.shipping = s;
}


}

//Create your three test items below this comment.
let mygift = new Item("PS4",400,7);
let yourgift = new Item("Ipad",300,10);
let agift = new Item("Ball",60,5);

class Cart{
  //What is the first part of every class? Type it below.
constructor(i,q){
  this.itemList = i;
  this.itemQuantity = q;
  }

  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = 0;
    for(i=0; i<this.itemList.length i++){
      total += this.itemList[i].price*this.itemQuantity[i];
    }
    return total;
  }
  subCart(days){
    var subCart = new Cart([],[]);
    for(let i=0; i<this.itemList.length; i++){
      if(this.itemList[i].shipping == days){
        subCart.itemList.push(this.itemList[i]);
        subCart.itemQuantity.push(this.itemQuantiy[i]);
      }
    }
    return subCart;
  }
}

class Password{
  constructor(pub,pri){
    this.publickey = pub;
    this.privatekey = pri;
  }

  validPublicKey(){
    
  }
}
