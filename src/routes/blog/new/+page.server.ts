import { create } from '$lib/server/database';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const slug = data.get('slug');
    const content = data.get('content');

    console.log({ title, content, slug });
    create({ title, slug, content });

    throw redirect(303, `/blog/${slug}`);
  },
};
