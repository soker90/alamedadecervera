export const optimizeUrl = (url, { w } = { w: 400 }) =>
	url.replace('/upload/', `/upload/q_auto/f_auto/w_${w}/`)
