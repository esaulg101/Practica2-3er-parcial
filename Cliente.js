class Cliente {
    constructor(){
        this.nombreCliente=null;
        this.edad=null;
        this.apellido=null;
        this.id=null;
        this.telefono=null;
        this.correo=null;
        this.tipodeCliente=null;
    }
 update(){
     database.ref('cliente').set({
         'nombreCliente': this.nombreCliente,
         'edad': this.edad,
         'apellido': this.apellido,
         'id': this.id,
         'telefono': this.telefono,
         'correo': this.correo,
         'tipodeCliente': this.tipodeCliente,

         
     })
 }
}