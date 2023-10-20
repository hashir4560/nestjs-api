import { Module } from "@nestjs/common";
import { PrdoductsController } from "./products.controller";
import { ProductsService } from "./poducts.service";


@Module({
    controllers:[PrdoductsController],
    providers:[ProductsService]
})

export class ProductModule{
    
}