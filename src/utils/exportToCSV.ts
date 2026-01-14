import { supabase } from '../lib/supabase';

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  product_interest: string | null;
  created_at: string;
}

export async function fetchContactInquiries(): Promise<ContactInquiry[]> {
  const { data, error } = await supabase
    .from('contact_inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
    throw error;
  }

  return data || [];
}

export function convertToCSV(data: ContactInquiry[]): string {
  if (data.length === 0) return '';

  const headers = [
    'ID',
    'Name',
    'Email',
    'Phone',
    'Company',
    'Product Interest',
    'Message',
    'Date Submitted'
  ];

  const csvRows = [
    headers.join(','),
    ...data.map(row => [
      row.id,
      `"${row.name}"`,
      row.email,
      row.phone,
      row.company ? `"${row.company}"` : '',
      row.product_interest ? `"${row.product_interest}"` : '',
      `"${row.message.replace(/"/g, '""')}"`,
      new Date(row.created_at).toLocaleString()
    ].join(','))
  ];

  return csvRows.join('\n');
}

export function downloadCSV(csvContent: string, filename: string = 'contact_inquiries.csv'): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export async function exportContactInquiriesToCSV(): Promise<void> {
  try {
    const inquiries = await fetchContactInquiries();
    const csvContent = convertToCSV(inquiries);
    const filename = `contact_inquiries_${new Date().toISOString().split('T')[0]}.csv`;
    downloadCSV(csvContent, filename);
  } catch (error) {
    console.error('Failed to export inquiries:', error);
    throw error;
  }
}
