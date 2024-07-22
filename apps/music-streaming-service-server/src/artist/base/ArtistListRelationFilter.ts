/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArtistWhereInput } from "./ArtistWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ArtistListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ArtistWhereInput,
  })
  @ValidateNested()
  @Type(() => ArtistWhereInput)
  @IsOptional()
  @Field(() => ArtistWhereInput, {
    nullable: true,
  })
  every?: ArtistWhereInput;

  @ApiProperty({
    required: false,
    type: () => ArtistWhereInput,
  })
  @ValidateNested()
  @Type(() => ArtistWhereInput)
  @IsOptional()
  @Field(() => ArtistWhereInput, {
    nullable: true,
  })
  some?: ArtistWhereInput;

  @ApiProperty({
    required: false,
    type: () => ArtistWhereInput,
  })
  @ValidateNested()
  @Type(() => ArtistWhereInput)
  @IsOptional()
  @Field(() => ArtistWhereInput, {
    nullable: true,
  })
  none?: ArtistWhereInput;
}
export { ArtistListRelationFilter as ArtistListRelationFilter };
