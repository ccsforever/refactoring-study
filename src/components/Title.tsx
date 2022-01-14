const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1>{'지역: ' + title}</h1>;
};

type TitleProps = {
  title: string;
};
export default Title;
