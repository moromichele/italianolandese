"use client"

import css from "./page.module.css"
import { LANGS, useLang } from "./context/translation-context"
import { MdOutlineMail } from "react-icons/md"
import { RiLinkedinBoxLine } from "react-icons/ri"

export default function Home() {
	const { t, toggleLang, lang } = useLang()

	return (
		<div className={css.page}>
			<div className={css.mainLayout}>
				<div className={css.header}>
					<div className={css.headerContent}>
						<div className={css.websiteTitleContainer}>
							<h1 className={css.websiteName}>
								<span className={lang === LANGS.IT ? css.orangeText : ""}>
									Italian
								</span>
								<span className={css.orangeText}>o</span>
								<span className={lang === LANGS.NL ? css.orangeText : ""}>
									landese
								</span>
							</h1>
						</div>
						<div className={css.divider} />
						<button
							className={css.langSwitchButton}
							onClick={toggleLang}
							aria-label={t.header.buttonAria}
						>
							<div className={lang === LANGS.IT ? css.activeLang : undefined}>
								<div>IT</div>
								<div
									className={lang === LANGS.IT ? css.activeLangDot : undefined}
								/>
							</div>
							<div className={lang === LANGS.NL ? css.activeLang : undefined}>
								<div>NL</div>
								<div
									className={lang === LANGS.NL ? css.activeLangDot : undefined}
								/>
							</div>
						</button>
					</div>
				</div>
				<div className={css.bodyLayout}>
					<div className={css.aboutContainer}>
						<div className={css.aboutSection}>
							<h1 className={css.title}>
								<span className={css.line}>{t.about.title1 + " "}</span>
								<span className={css.line}>{t.about.title2}</span>
							</h1>
							<div className={css.paragraph}>
								<h3 className={css.paragraphTitle}>{t.about.work.title}</h3>
								<p>{t.about.work.p1}</p>
								<p>
									<i>{t.about.work.p2}</i>
								</p>
								<p>{t.about.work.p3}</p>
							</div>
							<div className={css.paragraph}>
								<h3 className={css.paragraphTitle}>{t.about.bio.title}</h3>
								<p>{t.about.bio.p1}</p>
							</div>
						</div>
					</div>
					<div className={css.contactContainer}>
						<div className={css.contactSection}>
							<h2>{t.contact.heading}</h2>
							<ul className={css.contactList}>
								<li className={css.contactItem}>
									<a
										aria-label={t.contact.emailAria}
										target="_blank"
										rel="noopener noreferrer"
										href={`mailto:italianolandese+web@gmail.com?subject=${t.contact.placeholder}`}
										className={css.linkWithIcon}
									>
										<MdOutlineMail size={50} />
										<p className={css.bait}>
											italianolandese<span>@</span>gmail.<span>gibberish.</span>
											com
										</p>
									</a>
								</li>
								<li className={css.contactItem}>
									<a
										aria-label={t.contact.linkedinAria}
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/frauke-g-joris-019a959/"
										className={css.linkWithIcon}
									>
										<RiLinkedinBoxLine size={50} />
										<p>Linkedin</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<footer className={css.footer}>
					<div className={css.footerContent}>
						<p>website</p>
						<a
							aria-label={t.footer.linkedinAria}
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/michele-moro-07a81a21b/"
							className={css.linkWithIcon}
						>
							<p>@michele_moro</p>
							<RiLinkedinBoxLine size={15} />
						</a>
					</div>
				</footer>
			</div>
		</div>
	)
}
