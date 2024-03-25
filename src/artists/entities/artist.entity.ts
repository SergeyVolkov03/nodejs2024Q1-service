import { Album } from '../../albums/entities/album.entity';
import { Track } from '../../tracks/entities/track.entity';
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

  @OneToMany(() => Track, (track) => track.artistId)
  tracks: Track[];
}
