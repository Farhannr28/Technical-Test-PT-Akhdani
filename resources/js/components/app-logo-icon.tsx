type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function AppLogoIcon(props: Props) {
  return (
    <img
      src="/logo.png"
      alt="App Logo"
      {...props}
    />
  );
}