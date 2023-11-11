import { IsNotEmpty, IsString } from "class-validator";

export class BlogDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    excerpt: string;
    description: string;
}
