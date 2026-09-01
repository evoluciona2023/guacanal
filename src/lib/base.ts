// GitHub Pages serves this site from a subpath (e.g. /guacanal), while local
// dev and other hosts may serve it from the root. Prepend this to any
// absolute path used in an href/src so links keep working either way.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
	return base + path;
}
