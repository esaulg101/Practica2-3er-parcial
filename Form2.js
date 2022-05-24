class Form2{
    constructor(){
        this.title=createElement("h2");
        this.nombreCliente=createElement("h3");
        this.edad=createElement("h3");
        this.apellido=createElement("h3");
        this.id=createElement("h3");
        this.telefono=createElement("h3");
        this.correo=createElement("h3");
        this.tipodeCliente=createElement("h3");
        this.inputN = createInput();
        this.inputR = createInput();
        this.inputA = createInput();
        this.inputB = createInput();
        this.inputC = createInput();
        this.inputD = createInput();
        this.inputE = createInput();
        this.button = createButton("registrar");
    } 
    display(){
        this.title.html("registro de cliente");
        this.title.position(130,0);
        this.nombreCliente.html("ingresa el nombre del cliente");
        this.nombreCliente.position(130,100);
        this.inputN.position(150,160);
        this.edad.html("ingresa la edad");
        this.edad.position(140,200);
        this.inputR.position(160,260);
        this.apellido.html("ingresa el apellido");
        this.apellido.position(150,300);
        this.inputA.position(170,360);
        this.id.html("ingresa el id");
        this.id.position(160,400);
        this.inputB.position(180,460);
        this.telefono.html("ingresa el número telefonico");
        this.telefono.position(170,500);
        this.inputC.position(190,560);
        this.correo.html("ingresa el correo");
        this.correo.position(180,600);
        this.inputD.position(200,660);
        this.tipodeCliente.html("ingresa el tipo de cliente ");
        this.tipodeCliente.position(190,700);
        this.inputE.position(210,760);

        this.button.position(500,560);

        this.button.mousePressed(()=>{
            cliente.nombreCliente=this.inputN.value();
            cliente.edad=this.inputR.value();
            cliente.apellido=this.inputA.value();
            cliente.id=this.inputB.value();
            cliente.telefono=this.inputC.value();
            cliente.correo=this.inputD.value();
            cliente.tipodeCliente=this.inputE.value();

            cliente.update();
        })
    }
}