import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tache extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  complete: boolean;
}

export const TacheSchema = SchemaFactory.createForClass(Tache);
