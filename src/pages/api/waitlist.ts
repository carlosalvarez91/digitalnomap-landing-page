import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the incoming request body
    const body = await req.body;
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || '',
        private_key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });


// Append email to spreadsheet
await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '',
  range: "A1", // Updated range to include both columns
  valueInputOption: 'RAW',
  insertDataOption: 'INSERT_ROWS',
  requestBody: {
    values: [[email, new Date().toISOString()]] // Two columns of data
  }
});

    return res.status(200).json({ message: 'Email added successfully' });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return res.status(500).json({ error: 'Failed to submit email' });
  }
}
