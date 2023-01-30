export interface IZadanie{
  id?: number;
  nazwa: string;
  czasPoczatek: Date;
  czasKoniec: Date;
  wolontariuszeWymagani: number;

  eventId: number;
  przydzieleniId: number[];
}
