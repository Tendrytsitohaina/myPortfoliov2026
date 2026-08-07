"use client";

import Image from "next/image";
import img from "../img/tendry.png";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { ComponentType } from "react";

import ReactNative from "../LogoSvg/react-native-firebase-1.svg";
import Node from "../LogoSvg/nodejs.svg";
import FastAPI from "../LogoSvg/fastapi-1.svg";
import Flask from "../LogoSvg/flask.svg";
import Laravel from "../LogoSvg/laravel-2.svg";
import { Nextjs } from "../LogoSvg/NextJS";
import { React as ReactLogo } from "../LogoSvg/React";

const logos = [
	{ id: "react", icon: ReactLogo, label: "React", initialX: -190, initialY: -70 },
	{ id: "node", icon: Node, label: "Node.js", initialX: -180, initialY: 70 },
	{ id: "nextjs", icon: Nextjs, label: "Next.js", initialX: -200, initialY: 0 },
	{ id: "laravel", icon: Laravel, label: "Laravel", initialX: 20, initialY: 180 },
	{ id: "react-native", icon: ReactNative, label: "React Native", initialX: -130, initialY: -130 },
	{ id: "flask", icon: Flask, label: "Flask", initialX: -70, initialY: 170 },
	{ id: "fastapi", icon: FastAPI, label: "FastAPI", initialX: -140, initialY: 130 },
];

type LogoIcon = ComponentType<{ width?: number; height?: number }>;

type LogoItemProps = {
	logo: { initialX: number; initialY: number; icon: LogoIcon | string; label: string };
	index: number;
	scrollY: MotionValue<number>;
	startX: number;
	spacing: number;
	finalY: number;
	reduceMotion: boolean;
};

type TechChipProps = {
	logo: { icon: LogoIcon | string; label: string };
};

function LogoItem({ logo, index, scrollY, startX, spacing, finalY, reduceMotion }: LogoItemProps) {
	const finalX = startX + index * spacing;
	// En mode reduced-motion, on fige les logos à leur position finale (pas de translation liée au scroll)
	const x = useTransform(scrollY, [0, 500], reduceMotion ? [finalX, finalX] : [logo.initialX, finalX]);
	const y = useTransform(scrollY, [0, 500], reduceMotion ? [finalY, finalY] : [logo.initialY, finalY]);
	const Icon = logo.icon;

	return (
		<motion.div style={{ x, y }} className="absolute hidden md:block">
			<motion.div
				tabIndex={0}
				className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800"
				initial={{ opacity: 0, scale: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{
					delay: reduceMotion ? 0 : 0.4 + index * 0.08,
					type: reduceMotion ? "tween" : "spring",
					duration: reduceMotion ? 0.2 : undefined,
					stiffness: 260,
					damping: 18,
				}}
				whileHover={{ scale: reduceMotion ? 1 : 1.2, zIndex: 10 }}
				whileTap={{ scale: reduceMotion ? 1 : 0.92 }}
			>
				{typeof Icon === "function" ? (
					<Icon width={22} height={22} />
				) : (
					<Image src={Icon} alt={logo.label} width={22} height={22} className="h-[22px] w-[22px]" />
				)}				
				<span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
					{logo.label}
				</span>
			</motion.div>
		</motion.div>
	);
}

function TechChip({ logo }: TechChipProps) {
	const Icon = logo.icon;
	return (
		<div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
		{typeof Icon === "function" ? (
			<Icon width={16} height={16} />
		) : (
			<Image src={Icon} alt={logo.label} width={16} height={16} className="h-4 w-4" />
		)}			
			<span>{logo.label}</span>
		</div>
	);
}

export default function StickyProfile() {
	const { scrollY } = useScroll();
	const shouldReduceMotion = useReducedMotion();

	const profileScale = useTransform(scrollY, [0, 500], shouldReduceMotion ? [1, 1] : [1, 0.7]);
	const profileY = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, -80]);

	const row1Count = 3;
	const spacing = 110;

	const layoutFor = (index: number) => {
		const isRow1 = index < row1Count;
		const count = isRow1 ? row1Count : logos.length - row1Count;
		const rowIndex = isRow1 ? index : index - row1Count;
		const startX = -((count - 1) * spacing) / 2;
		const finalY = isRow1 ? 180 : 200;
		return { startX, spacing, rowIndex, finalY };
	};

	const contactOpacity = useTransform(scrollY, [75, 230], [0, 1]);
	const contactTranslateY = useTransform(scrollY, [100, 220], shouldReduceMotion ? [0, 0] : [12, 0]);

	return (
		<div className="relative rounded-3xl flex flex-col items-center justify-start px-2 pt-10 sm:px-4">
			<motion.div
				initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.85, y: shouldReduceMotion ? 0 : 30 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: "easeOut" }}
				className="flex w-full justify-center"
			>
				<motion.div
					style={{ scale: profileScale, y: profileY }}
					className="mr-5 relative flex h-50 w-60 items-center justify-center rounded-3xl border border-gray-300 bg-gray-50 shadow-xl transition-colors sm:h-72 sm:w-72 lg:h-96 lg:w-96 dark:border-gray-800 dark:bg-gray-900"
				>
					<div
						className={`absolute inset-8 rounded-full border border-dashed border-gray-400 sm:inset-8 dark:border-gray-700 ${
							shouldReduceMotion ? "" : "animate-[spin_30s_linear_infinite]"
						}`}
					/>

					<div className="mr-5 relative flex h-60 w-60 items-center justify-center sm:h-72 sm:w-72 lg:h-96 lg:w-96">
						<Image
							src={img}
							alt="Photo de profil de Tendry Randriatsitohaina"
							loading="eager"
							fill
							className="object-cover rounded-3xl"
							sizes="(max-width: 640px) 200px, (max-width: 1024px) 288px, 384px"
						/>
					</div>

					{logos.map((logo, index) => {
						const { startX, rowIndex, finalY } = layoutFor(index);
						return (
							<LogoItem
								key={logo.id}
								logo={logo}
								index={rowIndex}
								scrollY={scrollY}
								startX={startX}
								spacing={spacing}
								finalY={finalY}
								reduceMotion={!!shouldReduceMotion}
							/>
						);
					})}
				</motion.div>
			</motion.div>

			<div className="mt-4 flex max-w-xs flex-wrap items-center justify-center gap-2 md:hidden">
				{logos.map((logo) => (
					<TechChip key={logo.id} logo={logo} />
				))}
			</div>

			{/* KPI compacts : remplace les valeurs par tes vrais chiffres */}
			<motion.div
				style={{ opacity: contactOpacity, y: contactTranslateY }}
				className="w-full max-w-[320px] rounded-2xl border border-gray-200 bg-white/80 px-4 py-4 text-center shadow-lg backdrop-blur-sm transition-colors sm:max-w-88 sm:px-6 lg:-mt-15 -z-10 dark:border-gray-800 dark:bg-gray-900/80"
			>
				<div className="flex items-center justify-center gap-1 lg:justify-start">
					<h2 className="text-lg font-semibold text-gray-900 dark:text-white">Tendry</h2>
					<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Développeur Full Stack</p>
				</div>

				<div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700">
					<div className="px-2">
						<p className="text-xl font-bold text-gray-900 dark:text-white">5+</p>
						<p className="mt-0.5 text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
							Projets
						</p>
					</div>
					<div className="px-2">
						<p className="text-xl font-bold text-gray-900 dark:text-white">4</p>
						<p className="mt-0.5 text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
							Technos
						</p>
					</div>
					<div className="px-2">
						<p className="text-xl font-bold text-gray-900 dark:text-white">L3</p>
						<p className="mt-0.5 text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
							Niveau
						</p>
					</div>
				</div>

				<div className="mt-4 flex justify-center gap-3 lg:justify-start">
					<a
						href="https://github.com/TON-USERNAME"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="flex gap-2 text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
					>
						<FaGithub size={20} /> Github
					</a>
					<a
						href="https://linkedin.com/in/TON-PROFIL"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="flex gap-2 text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
					>
						<FaLinkedin size={20} /> Linkedin
					</a>
				</div>
			</motion.div>
		</div>
	);
}
