import classNames from 'classnames/bind';
import styles from "../assets/styles/GlobalStyles.scss"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const cx = classNames.bind(styles);

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx("container")}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;