"use client"

import { createContext, useContext, useState } from "react"
import nl from '@/data/text-content.nl.json'
import it from '@/data/text-content.it.json'

export enum LANGS {
	NL = 'nl',
	IT = 'it'
}

const translations = { nl, it }

interface ITranslationContext {
	t: typeof nl
	lang: LANGS
	toggleLang: () => void
}

const TranslationContext = createContext<ITranslationContext>(undefined as unknown as ITranslationContext)

export const TranslationProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lang, setLang] = useState<LANGS>(LANGS.NL)
	const t = translations[lang] || translations.nl

	const toggleLang = () => setLang(lang === LANGS.NL ?  LANGS.IT :  LANGS.NL)

	return (
		<TranslationContext.Provider value={{ t, lang, toggleLang }}>
			{children}
		</TranslationContext.Provider>
	)
}

export const useLang = () =>{
	const context = useContext(TranslationContext)
	if(!context) throw new Error("Trying to access translation outside provider")
	return context
}
