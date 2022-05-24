class Producto{
    constructor(){
        this.nombredelproducto=null;
        this.departamento=null;
        this.preciodelproducto=null;
        this.descripcion=null;
        this.stock=null;
    }
 update(){
     database.ref('producto').set({
         'nombredelproducto': this.nombredelproducto,
         'departamento': this.departamento,
         'preciodelproducto':this.preciodelproducto,
         'descripcion': this.descripcion,
         'stock': this.stock
     })
 }
}