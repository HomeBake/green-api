export type TMessage = {
  body: string;
  time: number;
};

type Props = {
  messages: TMessage[];
};

export const Messages = ({ messages }: Props) => {
  return <></>;
};
