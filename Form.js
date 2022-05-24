class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombredelproducto=createElement("h3");
        this.departamento=createElement("h3");
        this.preciodelproducto=createElement("h3");
        this.descripcion=createElement("h3");
        this.stock=createElement("h3");
        this.inputN = createInput();
        this.inputP = createInput();
        this.inputF = createInput();
        this.inputR = createInput()
        this.inputK = createInput()
        this.button = createButton("registrar");
    } 
    display(){
        this.title.html("registro de prodructo");
        this.title.position(130,0);
        this.nombredelproducto.html("ingresa el nombre del producto");
        this.nombredelproducto.position(130,100);
        this.inputN.position(150,160);
        this.departamento.html("ingresa el nombre del departamento");
        this.departamento.position(140,200);
        this.inputP.position(160,260);
        this.preciodelproducto.html("ingresa el precio del producto");
        this.preciodelproducto.position(150,300);
        this.inputF.position(170,360);
        this.descripcion.html("descripcion del producto");
        this.descripcion.position(160,400);
        this.inputR.position(180,460);
        this.stock.html("introduce el stock");
        this.stock.position(170,500);
        this.inputK.position(190,560);
        this.button.position(500,560);

        this.button.mousePressed(()=>{
            producto.nombredelproducto=this.inputN.value();
            producto.departamento=this.inputP.value();
            producto.preciodelproducto=this.inputF.value();
            producto.descripcion=this.inputR.value();
            producto.stock=this.inputK.value();
            producto.update();
        })
    }
}