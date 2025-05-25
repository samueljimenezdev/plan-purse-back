import { IsDateString, IsIn, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { StatusEnum } from "../entities-mongo/task.entity";

export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    description: string;

    @IsDateString()
    dueDate: Date;

    @IsString()
    @IsNotEmpty()
    @IsIn(Object.values(StatusEnum))
    status: string;

    @IsNotEmpty()
    @IsInt()
    @IsIn([1, 2, 3, 4, 5])
    priority: number;

    @IsDateString()
    @IsNotEmpty()
    createdAt: Date;

    @IsString({ each: true })
    tags: string[];
}
