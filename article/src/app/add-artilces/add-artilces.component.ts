import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-artilces',
  templateUrl: './add-artilces.component.html',
  styleUrls: ['./add-artilces.component.css']
})
export class AddArtilcesComponent implements OnInit {

  get titleg()
  {
    return this.form.get('title')
  }
  get desg()
  {
    return this.form.get('description')
  }

  constructor(private fb:FormBuilder,private as:ArticleService,private router:Router) { }
  form=this.fb.group(
    {
      title:["",[Validators.required,Validators.maxLength(20)]],
      description:["",[Validators.required,Validators.minLength(10)]]
    }
  )
  onSubmit()
  {
    console.log(this.form.value);
    let data={description:this.desg?.value as string,title:this.titleg?.value as string};
    console.log(data);
    const a=this.as.postArticles(data)
    a.subscribe(
      ()=>{
        console.log('It is subscribed');
      }
    )
    this.router.navigate(['/articles']);
    
  }

  ngOnInit(): void {
  }
  

}
