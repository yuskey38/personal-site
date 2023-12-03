import { fail } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const message = formData.get('message')

        let errors: { email: string | null, message: string | null } = { email: null, message: null }

        if (!email) {
            errors.email = "Email is required."
        }

        if (!message) {
            errors.message = "Message is required."
        }

        if (!errors.email && !errors.message) {
            return { success: true }
        }

        return fail(422, errors)
    }
};