import { Album } from 'src/albums/entities/album.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('track')
export class Track {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column({ nullable: true })
  artistId: string | null;

  @Column({ nullable: true })
  albumId: string | null;

  @ManyToOne(() => Artist, (artist) => artist.id, {
    onDelete: 'SET NULL',
  })
  artist: Artist;

  @ManyToOne(() => Album, (album) => album.id, {
    onDelete: 'SET NULL',
  })
  album: Artist;
}
