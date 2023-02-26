import axios from 'axios';

/* cspell: disable */
export const api = axios.create({
	baseURL: 'https://peqgxbswtggdpoupoltc.supabase.co/rest/v1/',
	headers: {
		apikey: process.env.SUPABASE_KEY,
		Authorization: `Bearer ${process.env.SUPABASE_KEY}`
	}
})
