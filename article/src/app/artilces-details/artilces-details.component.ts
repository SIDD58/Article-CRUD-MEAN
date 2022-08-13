import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-artilces-details',
  templateUrl: './artilces-details.component.html',
  styleUrls: ['./artilces-details.component.css']
})
export class ArtilcesDetailsComponent implements OnInit {
  get titleg()
  {
    return this.form.get('title')
  }
  get desg()
  {
    return this.form.get('description')
  }

  constructor(private fb:FormBuilder,private as:ArticleService,private route:ActivatedRoute,private router:Router) { }
  form=this.fb.group(
    {
      title:["",[Validators.required,Validators.maxLength(20)]],
      description:["",[Validators.required,Validators.minLength(15)]]
    }
  )
  onSubmit()
  {
    const data={
      title:this.titleg?.value,
      description:this.desg?.value
    }
    this.as.patchArticle(this.route.snapshot.params['id'],data).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/articles'])

    })
   
  }



  ngOnInit(): void {
    this.as.getArticle(this.route.snapshot.params['id']).subscribe((data)=>{
      this.form.setValue({
        title:data.title.valueOf(),
        description:data.description.valueOf()
      })
    })

  }

  

 

}
