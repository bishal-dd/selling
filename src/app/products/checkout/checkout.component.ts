import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  newOrder(form){

    let order = {

      name:form.value.name,
      number:form.value.number,
      address:form.value.address,
     
    }
    console.log(order);

    this.productService.getOrder(order).subscribe(data =>{
       console.log(data);
    });
    this.router.navigate(['/products']);
  }

}
