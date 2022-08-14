import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Jeanine White
			<small className={Styles.byline}>🚀 Built with Astro by <a href='https://twitter.com/yuricodesbot'> YuriCodesBot</a></small>
		</footer>
	);
}
export default Footer;
