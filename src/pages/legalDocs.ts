import { site } from '../site';

export type LegalDoc = {
	title: string;
	intro: string;
	/** `link.to` is a site path or a mailto: address */
	sections: { title: string; body?: string; bullets?: string[]; link?: { to: string; label: string } }[];
};

const contact = `Email ${site.email}. We reply on working days.`;

/*
 * Policy text for the website and the SSV app. The refund and delivery terms keep the
 * substance of the policies SSV published with its Razorpay account; change them only
 * when SSV changes the policy itself.
 */
export const legalDocs: Record<'privacy' | 'deleteAccount' | 'terms' | 'refund' | 'delivery', LegalDoc> = {
	privacy: {
		title: 'Privacy policy',
		intro: `This policy explains what personal data ${site.name} ("SSV", "we") collects through this website and the SSV app, why, and what you can do about it.`,
		sections: [
			{
				title: 'This website',
				body: 'The website has no accounts, no advertising and no analytics trackers. The contact form does not send anything to us by itself: it opens your own email app with the message ready to send. Our hosting provider keeps standard server logs (such as IP address and browser type) for security. The intro film is a YouTube video in privacy-enhanced mode, and loads only when you press play.',
			},
			{
				title: 'Information the app collects',
				body: 'When you sign up and use the SSV app, we collect:',
				bullets: [
					'Personal details: name, email, mobile number and Student ID',
					'Sign-in details: your password, stored securely',
					'Study details: standard, state, district and any SSV class code',
					'Usage: courses you open, your progress, downloads and purchases',
				],
			},
			{
				title: 'Signing in with Google',
				body: 'If you sign in with Google, Google shares your name, email address and profile photo with us. We use these only to create and run your account. We never receive your Google password.',
			},
			{
				title: 'How we use it',
				bullets: [
					'To provide your lessons and notes',
					'To process payments and manage course access',
					'To track your progress and show it to you',
					'To tell you about new courses and updates',
					'To answer your questions and give support',
				],
			},
			{
				title: 'Where it is stored',
				body: 'Account and study data is stored with Supabase on servers in Mumbai, India. We use appropriate security measures, but no way of sending or storing data over the internet is completely secure.',
			},
			{
				title: 'Payments',
				body: 'Payments are processed by Razorpay. Card, UPI and bank details go directly to Razorpay; we never see or store them. We keep a record of what you bought so we can unlock it for you.',
			},
			{
				title: 'Sharing',
				body: 'We do not sell, trade or rent personal data. It is used only:',
				bullets: [
					'To provide the app and its lessons',
					'By authorised SSV staff for administration',
					'By the services that run the app for us: Supabase (storage), Razorpay (payments) and Google (sign-in)',
					'When the law requires it',
				],
			},
			{
				title: 'Your rights',
				bullets: [
					'See and update your details from your profile in the app',
					'Delete your account from Profile, then Delete account, which removes your personal data',
					'Opt out of messages from us',
					`Ask us about your data at ${site.email}`,
				],
				link: { to: '/delete-account', label: 'How to delete your account' },
			},
			{
				title: 'Students under 18',
				body: 'The app is made for students in Standards 11 and 12. We take special care with the data of minors and follow the privacy laws that apply in India.',
			},
			{ title: 'Changes', body: 'If we change this policy, we will post the new version here and update the date above.' },
			{ title: 'Contact', body: contact },
		],
	},
	deleteAccount: {
		title: 'Delete your SSV Classes account',
		intro: `How to delete your account in the SSV Classes app from ${site.name}, and what happens to your data when you do.`,
		sections: [
			{
				title: 'Delete it in the app',
				bullets: ['Open the SSV Classes app and sign in', 'Go to Profile', 'Tap Delete account', 'Confirm that you want to delete it'],
			},
			{
				title: 'Delete it without the app',
				body: `Email ${site.email} from the email address registered on your account, with the subject "Delete my account". Include your Student ID if you know it. We delete the account within 30 days of your request.`,
				link: { to: `mailto:${site.email}?subject=Delete%20my%20account`, label: 'Email us to delete your account' },
			},
			{
				title: 'What we delete',
				bullets: [
					'Your account and sign-in details',
					'Your profile: name, email, phone number and standard',
					'Your study progress and your list of downloads',
					'Your study assistant chat history',
					'Reviews you have written',
				],
			},
			{
				title: 'What we may keep',
				body: 'Tax and accounting law requires us to keep records of payments and orders, including Razorpay invoices. We keep these for up to 8 years and, where possible, separate them from the deleted profile.',
			},
			{ title: 'Questions', body: contact },
		],
	},
	terms: {
		title: 'Terms of use',
		intro: `These terms apply to this website, the SSV app and the courses of ${site.name} ("SSV", "we"). By using them you agree to these terms.`,
		sections: [
			{
				title: 'Your account',
				body: 'You can sign in to the app with your Student ID or email and a password, or with Google. Keep your password private and do not share your account. Tell us straight away if you think someone else is using it. Give accurate details when you register and keep them up to date.',
			},
			{
				title: 'SSV class codes',
				body: 'SSV classroom students receive a class code from SSV. A valid code gives free access to paid courses and notes until the date set by SSV. Codes are for SSV students only and must not be shared. Some courses have their own end date; after it, they must be bought even with a code.',
			},
			{
				title: 'Courses and payments',
				body: 'Free lessons are open to every registered student. Paid courses and notes unlock after a successful payment. Prices are shown in the app before you pay. Payments are handled by Razorpay, and you agree to pay all charges made with the payment method you use.',
			},
			{
				title: 'How you may use the content',
				body: 'You get a personal, non-commercial licence to watch and read course material in the app. It is a licence, not a transfer of ownership. You may not:',
				bullets: [
					'Copy, record, download (other than through the app\'s own download button), share or resell videos or notes',
					'Share your account or class code',
					'Try to get around how access is controlled',
				],
			},
			{
				title: 'Intellectual property',
				body: 'All course material, including videos, PDFs, text, graphics and the SSV name and logo, belongs to Shree Siddhivinayak Classes and is protected by copyright law.',
			},
			{
				title: 'Study assistant',
				body: 'The study assistant gives automatic explanations. Answers can be wrong. Check important points with your teacher.',
			},
			{
				title: 'Refunds and delivery',
				body: 'Cancellations and refunds follow our refund policy. How courses and material reach you is set out in our delivery policy.',
			},
			{
				title: 'Changes to the service',
				body: 'We may add, change or remove courses and features, and update these terms. When we update them, we will change the date above.',
			},
			{
				title: 'Limitation of liability',
				body: 'To the extent the law allows, SSV is not liable for indirect, incidental, special or consequential damages from using, or being unable to use, the website, the app or the courses.',
			},
			{ title: 'Contact', body: contact },
		],
	},
	refund: {
		title: 'Cancellation and refund policy',
		intro: 'We want every student to be happy with what they paid for. This policy explains when you can cancel a course and how refunds work.',
		sections: [
			{
				title: 'Cancelling',
				body: 'You can ask to cancel a course within 7 days of paying, or before its first class starts, whichever is earlier.',
			},
			{
				title: 'Who gets what back',
				bullets: [
					'Full refund: if you cancel within 7 days of paying and before you have opened any course material or attended any class. Payment gateway charges are not refunded.',
					'Part refund: if classes have started and you cancel within 15 days of the start date, we refund the fee minus the cost of the classes already held and material already provided.',
					'No refund: for requests made more than 15 days after the start date, or after a substantial part of the digital content has been watched or downloaded.',
				],
			},
			{
				title: 'How refunds are paid',
				body: 'Approved refunds are processed within 5 to 7 working days to the original payment method (UPI, card or net banking). Your bank may take a few more days to show the amount.',
			},
			{
				title: 'How to ask',
				body: `Email ${site.email} with your name, the email or Student ID on your account, the course and the Razorpay payment ID or receipt.`,
			},
		],
	},
	delivery: {
		title: 'Delivery policy',
		intro: 'SSV courses are digital. This policy explains how and when you get access after paying.',
		sections: [
			{
				title: 'Digital courses and notes',
				body: 'Paid courses and notes unlock in the SSV app on the account you paid from, normally as soon as the payment succeeds. If access has not appeared within 24 hours, contact us and we will sort it out. You also receive a payment confirmation from Razorpay.',
			},
			{
				title: 'SSV class codes',
				body: 'Content unlocked with an SSV class code is available as soon as the code is redeemed in the app.',
			},
			{
				title: 'Printed material',
				body: 'Where a classroom course includes printed study material, students collect it at the SSV centre. Any courier delivery to a remote student is dispatched within 3 to 5 working days and usually arrives within 5 to 7 working days, depending on the PIN code. Shipping is included in the fee unless a separate charge is shown before you pay.',
			},
			{ title: 'Problems with delivery', body: contact },
		],
	},
};
