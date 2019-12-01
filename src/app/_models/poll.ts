import { Option } from '../_models/option';

export class Poll {
    PollID: number;
    Topic: string;
    Options: Option;
    Count: number;
}