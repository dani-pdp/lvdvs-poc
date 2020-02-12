import { Module } from '@nestjs/common';
import { CreateCombat } from './create.combat';
import { CombatsServiceModule } from '../../../services/combats/combats.service.module';

@Module({
  providers: [CreateCombat],
  imports: [CombatsServiceModule],
  exports: [CreateCombat],
})
export class CombatsModule {}
