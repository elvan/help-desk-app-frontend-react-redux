export const Footer = () => {
  return (
    <footer className='d-flex align-items-center border-top mt-auto py-3'>
      <span className='container-lg text-muted'>
        &copy; {new Date().getFullYear()} HelpDesk
      </span>
    </footer>
  );
};
