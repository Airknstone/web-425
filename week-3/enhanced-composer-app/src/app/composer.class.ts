import { IComposer } from './composer.interface';
export class Composer {
  composers: Array<IComposer>;

  constructor () {
    this.composers = [
      {
        composerId: 100,
        fullName: "Wolfgang Amadeus Mozart",
        genre: "Classical"
      },
      {
        composerId: 200,
        fullName: "Ludgwig Van Beethoven",
        genre: "Classical"
      },
      {
        composerId: 300,
        fullName: "Hildegard von Bingen ",
        genre: "Classical"
      },
      {
        composerId: 400,
        fullName: "Claudio Monteverdi",
        genre: "Classical"
      },
      {
        composerId: 500,
        fullName: "Antonio Vivaldi",
        genre: "Classical"
      }
    ];
  }
  getComposers() {
    return this.composers;
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }

    } return;
  }
}
