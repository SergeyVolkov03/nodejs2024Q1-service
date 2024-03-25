import { Artist } from '../../artists/entities/artist.entity';
import { Track } from '../../tracks/entities/track.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('album')
export class Album {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  artistId: string | null;

  @ManyToOne(() => Artist, (artist) => artist.id, {
    onDelete: 'SET NULL',
  })
  artist: Artist;

  @OneToMany(() => Track, (track) => track.albumId)
  tracks: Track[];
}
