import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {

  blogs: BlogDto[]
    constructor(@InjectModel(Blog.name) private blogModel:Model<BlogDocument> ){
        this.blogs=[
            {
                id: 1,
            title: 'Blog 1',
            excerpt: 'Excerpt 1',
            description: 'Description 1'
        },
        {
            id: 2,
            title: 'Blog 2',
            excerpt: 'Excerpt 2',
            description: 'Description 2'
        },
        {
            id: 3,
            title: 'Blog 3',
            excerpt: 'Excerpt 3',
            description: 'Description 3'
        }
        
        ]
      }

      async getAll(){
         return this.blogModel.find({})
      }

      async create(dto: BlogDto){
      
           return this.blogModel.create(dto)
      }

      async getById(id:string){
        return this.blogs.find(blog => blog.id === Number(id))
      }

      async update(id:string, dto: BlogDto){
        let blog = this.blogs.find(blog => blog.id === Number(id))
         blog = {...blog, ...dto}
            return blog
      }

      async delete(id:string){
        this.blogs = this.blogs.filter(blog => blog.id !== Number(id))
        return this.blogs
      }
}
