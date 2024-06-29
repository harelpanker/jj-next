const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='container relative z-20 mx-auto'>{children}</div>;
};

export default Container;
