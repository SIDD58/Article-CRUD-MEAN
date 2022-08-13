import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-artilces-list',
  templateUrl: './artilces-list.component.html',
  styleUrls: ['./artilces-list.component.css']
})
export class ArtilcesListComponent implements OnInit {

  articles:Article[]=[];
  curr_article?:Article;
  space:boolean=false;
  index:number=0;
  constructor(private as:ArticleService,private route:Router) {
    this.route.events.subscribe(()=>{
      this.refresh()
    })
   }

  ngOnInit(): void {
    this.as.getArticles().subscribe((data)=>{
      this.articles=data;
      console.log(this.articles);
    })
  }
  showDetails(index:number)
  {
    this.index=index;
    this.curr_article=this.articles[index];
    console.log(this.curr_article);
    this.space=true;
  }
  removeAll()
  {
    
    this.articles=[];
    this.space=false;
    
  
  }

  removeOne(i:number)
  {
    const a=this.as.deleteArticle(this.articles[i]._id)
    a.subscribe((data)=>{console.log("Record deleted")
    this.refresh();
    this.space=false;
    }
    ); 
  }

  refresh()
  {
    this.as.getArticles().subscribe((data)=>{
      this.articles=data;
    })
  }



}
