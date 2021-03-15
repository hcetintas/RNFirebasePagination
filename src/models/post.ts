export { };
export default class Post {
    userId: number = 0;
    id: number=0;
    title: string="";
    body: string="";

    constructor(props:any) {
      this.userId = props&& props.userId||this.userId;
      this.id = props&& props.id||this.id;
      this.title = props&& props.title||this.title;
      this.body = props&& props.body||this.body;
  }
}