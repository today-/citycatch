type Extractor = <T extends any[] | string>(arr: T) => T extends Array<infer Z> ? Z : string;

export const getFirst: Extractor = arr => arr && arr[0];

export const getLast: Extractor = arr => arr && arr[arr.length - 1];
