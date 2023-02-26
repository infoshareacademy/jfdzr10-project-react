const currentYear = new Date().getFullYear();

export const Footer = ({ text1, text2 }) => {
  return (
    <footer>
      {text1} {currentYear} - {text2}
    </footer>
  );
};
