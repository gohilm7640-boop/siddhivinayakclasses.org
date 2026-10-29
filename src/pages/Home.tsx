import Admin from '../sections/Admin';
import Cta from '../sections/Cta';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import IntroFilm from '../sections/IntroFilm';
import Principles from '../sections/Principles';
import Story from '../sections/Story';
import Subjects from '../sections/Subjects';
import Ways from '../sections/Ways';

export default function Home() {
	return (
		<>
			<Hero />
			<IntroFilm />
			<Subjects />
			<Story />
			<Ways />
			<Admin />
			<Principles />
			<Faq />
			<Cta />
		</>
	);
}
