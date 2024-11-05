(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    

    class ProductService {
        
        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private masterEmail: string = 'kelvin@';

        sendEmail( emailList: string[], template: "to-clients" | "to-admins" ) {
            console.log('Enviando correo a los clientes', template, emailList)
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(["eduardo@"], "to-admins")
        }
    
    
    }
    
    class AddToCard {
        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }

    const addToCard = new AddToCard();
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);

    productService.getProduct(10);
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    addToCard.addToCart(10);


})();