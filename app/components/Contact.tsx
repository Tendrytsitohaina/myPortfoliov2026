/* eslint-disable react/no-unescaped-entities */
import { Mail, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
	return (
		<section id="contact" className="scroll-mt-24 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal className="rounded-3xl border border-gray-200 bg-linear-to-br from-gray-900 to-gray-700 p-6 text-white shadow-xl dark:border-gray-800 sm:p-8">
					<div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
						<div className="text-center lg:text-left">
							<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">
								Contact
							</p>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Discutons de votre prochain projet
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300 lg:mx-0">
								Étudiant en L3, actuellement à la recherche d'un stage — et ouvert aux missions
								freelance ou collaborations ponctuelles sur des projets web et mobile. N'hésitez
								pas à me contacter pour en discuter.
							</p>
						</div>

						<div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
							<div className="space-y-4">
								<a
									href="mailto:tendryrandriatsitohaina@email.com"
									className="flex items-center justify-center gap-3 text-sm text-gray-100 transition hover:text-white lg:justify-start"
								>
									<Mail size={18} />
									<span>tendryrandriatsitohaina@email.com</span>
								</a>
								<a
									href="tel:+261384666027"
									className="flex items-center justify-center gap-3 text-sm text-gray-100 transition hover:text-white lg:justify-start"
								>
									<Phone size={18} />
									<span>+261 38 46 660 27</span>
								</a>
							</div>

							<div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
								<a
									href="mailto:tendryrandriatsitohaina@email.com"
									className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
								>
									<Send size={16} />
									Me contacter
								</a>
								{/* ⚠️ Remplace ces "#" par tes vraies URLs GitHub / LinkedIn */}
								<a
									href="https://github.com/TON-USERNAME"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"
								>
									<FaGithub size={18} />
								</a>
								<a
									href="https://linkedin.com/in/TON-PROFIL"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"
								>
									<FaLinkedin size={18} />
								</a>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}