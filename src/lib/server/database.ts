const db = new Map();

export function create({slug, title, content}: {slug: string, title: string, content: string}) {
    db.set(slug, {title, content})
}

export function get(slug: string) {
    return db.get(slug);
}