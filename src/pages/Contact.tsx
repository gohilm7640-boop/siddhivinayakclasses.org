import { ArrowRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { site } from '../site';

const topics = ['Admission to SSV classes', 'A class code for the app', 'Courses and content', 'A payment or refund', 'Something else'];

/** No backend: the form writes the email for you and opens your mail app. */
function MessageForm() {
	const [error, setError] = useState('');

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get('name') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();
		if (!name || !message) {
			setError('Add your name and a message so we know how to help.');
			return;
		}
		setError('');
		const std = String(data.get('standard') ?? '');
		const body = [message, '', `Name: ${name}`, std && `Standard: ${std}`, data.get('phone') && `Phone: ${data.get('phone')}`].filter(Boolean).join('\n');
		window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(String(data.get('topic')))}&body=${encodeURIComponent(body)}`;
	};

	return (
		<form className="form card" onSubmit={onSubmit} noValidate aria-describedby="form-hint">
			<h2 className="h3">Send us a message</h2>
			<p id="form-hint" className="field__hint">
				This opens your email app with the message ready to send. Nothing is stored on this website.
			</p>
			<div className="field">
				<label htmlFor="topic">What is it about?</label>
				<select id="topic" name="topic" defaultValue={topics[0]}>
					{topics.map((t) => (
						<option key={t}>{t}</option>
					))}
				</select>
			</div>
			<div className="grid-2" style={{ gap: 18 }}>
				<div className="field">
					<label htmlFor="name">Your name</label>
					<input id="name" name="name" autoComplete="name" required aria-invalid={!!error || undefined} />
				</div>
				<div className="field">
					<label htmlFor="standard">Standard</label>
					<select id="standard" name="standard" defaultValue="">
						<option value="">Not a student</option>
						<option>11</option>
						<option>12</option>
					</select>
				</div>
			</div>
			<div className="field">
				<label htmlFor="phone">
					Phone <span className="muted">(optional)</span>
				</label>
				<input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
			</div>
			<div className="field">
				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" required aria-invalid={!!error || undefined} />
			</div>
			{error && (
				<p className="field__error" role="alert">
					{error}
				</p>
			)}
			<button type="submit" className="btn" style={{ justifySelf: 'start' }}>
				Write the email <ArrowRight size={18} />
			</button>
		</form>
	);
}

export default function Contact() {
	return (
		<>
			<PageHero overline="Contact" lines={['Talk to', <span key="b">the <span className="accent">class.</span></span>]}>
				<p className="lede">Admissions, class codes, courses or a payment question. Write to us and the SSV team will reply.</p>
			</PageHero>
			<section className="section--tight" style={{ paddingTop: 0 }}>
				<div className="container contact">
					<Reveal className="contact-lines">
						<div className="contact-line">
							<span className="overline">Email</span>
							<a href={`mailto:${site.email}`}>{site.email}</a>
						</div>
						{site.phone && (
							<div className="contact-line">
								<span className="overline">Phone</span>
								<a href={`tel:${site.phone}`}>{site.phone}</a>
							</div>
						)}
						{site.whatsapp && (
							<div className="contact-line">
								<span className="overline">WhatsApp</span>
								<a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
									Message us on WhatsApp
								</a>
							</div>
						)}
						{site.address && (
							<div className="contact-line">
								<span className="overline">Visit</span>
								<p>{site.address}</p>
							</div>
						)}
						<div className="contact-line">
							<span className="overline">Class codes</span>
							<p className="muted">SSV students get their app class code from the SSV office. Lost yours? Email us with your name and standard.</p>
						</div>
						<div className="contact-line">
							<span className="overline">Payments</span>
							<p className="muted">
								For a refund or a payment that didn’t unlock a course, include your registered email and the Razorpay payment ID. See the <Link className="text-link" to="/refund">refund policy</Link>.
							</p>
						</div>
					</Reveal>
					<Reveal delay={0.08}>
						<MessageForm />
					</Reveal>
				</div>
			</section>
		</>
	);
}
