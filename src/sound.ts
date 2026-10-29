/**
 * Optional interface sounds (CC0 click/tick/pop from the SSV launch film kit).
 * Off until the visitor turns them on; the choice is remembered in this browser.
 * Web Audio is used because iOS ignores the volume of <audio> elements.
 */
import { useSyncExternalStore } from 'react';

const SOUNDS = { click: 0.35, tick: 0.25, pop: 0.4, step: 0.18 } as const;
export type SoundName = keyof typeof SOUNDS;

const KEY = 'ssv-sound';
let enabled = read();
const listeners = new Set<() => void>();
let ctx: AudioContext | null = null;
const buffers = new Map<SoundName, Promise<AudioBuffer | null>>();

function read() {
	try {
		return typeof window !== 'undefined' && window.localStorage.getItem(KEY) === 'on';
	} catch {
		return false;
	}
}

function context() {
	if (!ctx) {
		const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
		if (!AC) return null;
		ctx = new AC();
	}
	return ctx;
}

function load(name: SoundName, ac: AudioContext) {
	let b = buffers.get(name);
	if (!b) {
		b = fetch(`/sfx/${name}.mp3`)
			.then((r) => r.arrayBuffer())
			.then((data) => ac.decodeAudioData(data))
			.catch(() => null);
		buffers.set(name, b);
	}
	return b;
}

export function play(name: SoundName) {
	if (!enabled) return;
	const ac = context();
	if (!ac) return;
	// resume() only succeeds inside a click; a scroll-triggered sound before any click stays silent
	const resumed = ac.state === 'suspended' ? ac.resume().catch(() => undefined) : undefined;
	void Promise.all([load(name, ac), resumed]).then(([buffer]) => {
		if (!buffer || ac.state !== 'running') return;
		const src = ac.createBufferSource();
		const gain = ac.createGain();
		gain.gain.value = SOUNDS[name];
		src.buffer = buffer;
		src.connect(gain).connect(ac.destination);
		src.start();
	});
}

export function setSound(on: boolean) {
	enabled = on;
	try {
		window.localStorage.setItem(KEY, on ? 'on' : 'off');
	} catch {
		// private mode: the setting lasts for this visit only
	}
	if (on) {
		const ac = context();
		if (ac) for (const name of Object.keys(SOUNDS) as SoundName[]) void load(name, ac);
		play('click');
	}
	listeners.forEach((l) => l());
}

export function useSound() {
	return useSyncExternalStore(
		(l) => {
			listeners.add(l);
			return () => listeners.delete(l);
		},
		() => enabled,
		() => false,
	);
}
