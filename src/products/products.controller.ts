
import { Body, Controller,Post,Get, Param, Patch} from "@nestjs/common";
import { ProductsService } from "./poducts.service";

@Controller('products')
export class PrdoductsController{
    constructor( private readonly productsService: ProductsService){



    }

     @Post()
    addProduct(
        @Body('title')prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number
    
    ):any{

        
         const generatedID=this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice);
         return {id:generatedID}

    }
    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }
    
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.productsService.getSingleProduct(prodId);
    }
    @Patch(":id")
    updateProduct(@Param('id') prodId:string,
    @Body('title ')prodTitle:string,
    @Body('description')prodDesc:string,
    @Body('price')prodPrice:number
    ){

    }


    






}