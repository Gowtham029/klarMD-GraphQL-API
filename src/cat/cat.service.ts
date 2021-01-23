import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Cat, CatDocument } from './cat.model';
import {
  CreateCatInput,
  ListCatInput,
  UpdateCatInput,
} from './cat.inputs';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
  ) {}

  create(payload: CreateCatInput) {
    const createdCat = new this.catModel(payload);
    return createdCat.save();
  }

  getById(_id: Types.ObjectId) {
    return this.catModel.findById(_id).exec();
  }

  list(filters: ListCatInput) {
    return this.catModel.find({ ...filters }).exec();
  }

  update(payload: UpdateCatInput) {
    return this.catModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: Types.ObjectId) {
    return this.catModel.findByIdAndDelete(_id).exec();
  }
}