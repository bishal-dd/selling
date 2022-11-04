import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  addNewProduct(form){
    console.log(form.value);

    let newProduct = {

      productName:form.value.productname,
      description:form.value.productdescription,
      price:form.value.productprice,
      productImg:form.value.productimg
    }
    console.log(newProduct);

    this.productService.CreateProduct(newProduct).subscribe(data =>{
       console.log(data);
    });

    this.router.navigate(['/products/'])

  }

}
