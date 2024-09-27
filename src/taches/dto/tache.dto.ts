import { ApiProperty } from '@nestjs/swagger';

export class CreateTacheDto {
  @ApiProperty({ example: 'Titre de la tâche' })
  readonly titre: string;

  @ApiProperty({ example: 'Description de la tâche ici.' })
  readonly description: string;

  @ApiProperty({ example: false })
  readonly complete: boolean;
}
