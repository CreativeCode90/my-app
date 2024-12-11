import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // Corrected from "styleUrl"
})
export class AboutComponent implements OnInit {
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    // const id  = this.route.snapshot.paramMap.get('id');
    // console.log(id);
   
    this.route.params.subscribe({
      next : (val)=>{
        // console.log(val['id']);
        console.log(val);
        
      },
      error : (e)=>{
        console.log("error ",e);
        
      }
    })
  }
}
