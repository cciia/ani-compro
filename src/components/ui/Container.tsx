type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
      {children}
    </div>
  );
}