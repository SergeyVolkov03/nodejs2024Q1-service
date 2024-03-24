import { Artist } from 'src/artists/entities/artist.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

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
}
