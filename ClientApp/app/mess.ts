import { Topic } from './topic';
import { User } from './user';

export class Mess {
    constructor(
        public id?: number,
        public user?: User,
        public topic?: Topic,
        public mess?: string) { }
}