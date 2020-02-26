import { ApiProperty } from '@nestjs/swagger';

export class CreateCombatInputDto {
  @ApiProperty()
  readonly gladiator1: string;

  @ApiProperty()
  readonly gladiator2: string;
}
