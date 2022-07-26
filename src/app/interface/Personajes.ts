export interface Personaje {
  char_id: number;
  name: string;
  nickname: string;
  img: string;
  status: string;
  ocuppation: Ocuppation[];
}
interface Ocuppation {
  name: string;
}
