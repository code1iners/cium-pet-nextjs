interface MainBodyProps {
  children: React.ReactNode;
}

export default function MainBody({ children }: MainBodyProps) {
  return <main className="grow">{children}</main>;
}
