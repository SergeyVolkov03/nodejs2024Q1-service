import { Album } from 'src/albums/entities/album.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('artist')
export class Artist {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  grammy: boolean;

  @OneToMany(() => Album, (album) => album.artistId)
  albums: Album[];
}
