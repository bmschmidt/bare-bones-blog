const fulltext = import.meta.glob([
	'/src/content/**/*.md',
	'/src/content/**/*.ipynb',
	'/src/content/**/*.docx',
	], 
	{ eager: true });
const files = Object.keys(fulltext);
type Pandocument = any;
type Page = {
	slug: string;
	metadata: Record<string, any>;
	document: Pandocument;
};
const pages: Page[] = [];
for (const filepath of files) {
	const data = fulltext[filepath].default;
	const slug = filepath.replace('/src/content/', '').slice(0, -3);
	const metadata = data.metadata || {};
	if (metadata.date === undefined || metadata.date == 0) {
		console.warn('No date for', slug);
    continue
	}
	// Turn the date into an actual date field.
	metadata.date = new Date(metadata.date || 0).toISOString();
	pages.push({
		slug,
		metadata,
		document: data.document
	});
}
pages.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
export default pages;
