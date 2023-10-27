type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type Email = string;
type PhoneNumber = string;
type UniqueId = string;
type DateTimeString = string;
type ImageUrl = string;
type RichText = string;
type PriceCents = number;
