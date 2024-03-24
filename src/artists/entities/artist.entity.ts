import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('artist')
export class Artist {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  grammy: boolean;
}
