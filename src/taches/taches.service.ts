import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tache } from './tache.schema';
import { CreateTacheDto } from './dto/tache.dto';

@Injectable()
export class TachesService {
  constructor(@InjectModel(Tache.name) private tacheModel: Model<Tache>) {}

  async findAll(): Promise<Tache[]> {
    return this.tacheModel.find().exec();
  }

  async create(createTacheDto: CreateTacheDto): Promise<Tache> {
    const newTache = new this.tacheModel(createTacheDto);
    return newTache.save();
  }

  async update(id: string, updateTacheDto: CreateTacheDto): Promise<Tache> {
    return this.tacheModel.findByIdAndUpdate(id, updateTacheDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Tache> {
    return this.tacheModel.findByIdAndDelete(id).exec();
  }
}
