import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";
import { Types } from "mongoose";

import { Cat, CatDocument } from "./cat.model";
import { CatService } from "./cat.service";
import { CreateCatInput, ListCatInput, UpdateCatInput } from "./cat.inputs";

@Resolver(() => Cat)
export class CatResolver {
    constructor(private catService: CatService) {}

    @Query(() => Cat)
    async cat(@Args("_id", { type: () => String }) _id: Types.ObjectId) {
        return this.catService.getById(_id);
    }

    @Query(() => [Cat])
    async cats(@Args("filters", { nullable: true }) filters?: ListCatInput) {
        return this.catService.list(filters);
    }

    @Mutation(() => Cat)
    async createCat(@Args("payload") payload: CreateCatInput) {
        return this.catService.create(payload);
    }

    @Mutation(() => Cat)
    async updateCat(@Args("payload") payload: UpdateCatInput) {
        return this.catService.update(payload);
    }

    @Mutation(() => Cat)
    async deleteCat(@Args("_id", { type: () => String }) _id: Types.ObjectId) {
        return this.catService.delete(_id);
    }
}
